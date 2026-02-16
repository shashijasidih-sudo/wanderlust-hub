import React, { createContext, useContext, useState, useEffect, ReactNode, useCallback } from "react";

export type CurrencyCode = "INR" | "USD" | "THB" | "AED" | "SGD";

interface CurrencyInfo {
  code: CurrencyCode;
  symbol: string;
  name: string;
}

export const CURRENCIES: CurrencyInfo[] = [
  { code: "INR", symbol: "₹", name: "Indian Rupee" },
  { code: "USD", symbol: "$", name: "US Dollar" },
  { code: "THB", symbol: "฿", name: "Thai Baht" },
  { code: "AED", symbol: "د.إ", name: "UAE Dirham" },
  { code: "SGD", symbol: "S$", name: "Singapore Dollar" },
];

interface CurrencyContextType {
  currency: CurrencyCode;
  setCurrency: (code: CurrencyCode) => void;
  convertPrice: (amountInINR: number) => number;
  formatPrice: (amountInINR: number) => string;
  currencySymbol: string;
  rates: Record<string, number>;
  isLoadingRates: boolean;
}

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined);

const CACHE_KEY = "currency_rates";
const CACHE_DURATION = 60 * 60 * 1000; // 1 hour

export const CurrencyProvider = ({ children }: { children: ReactNode }) => {
  const [currency, setCurrencyState] = useState<CurrencyCode>(() => {
    return (localStorage.getItem("preferred_currency") as CurrencyCode) || "INR";
  });
  const [rates, setRates] = useState<Record<string, number>>({ INR: 1 });
  const [isLoadingRates, setIsLoadingRates] = useState(false);

  const setCurrency = useCallback((code: CurrencyCode) => {
    setCurrencyState(code);
    localStorage.setItem("preferred_currency", code);
  }, []);

  useEffect(() => {
    const fetchRates = async () => {
      // Check cache
      const cached = localStorage.getItem(CACHE_KEY);
      if (cached) {
        const { data, timestamp } = JSON.parse(cached);
        if (Date.now() - timestamp < CACHE_DURATION) {
          setRates(data);
          return;
        }
      }

      setIsLoadingRates(true);
      try {
        const res = await fetch("https://open.er-api.com/v6/latest/INR");
        const json = await res.json();
        if (json.result === "success") {
          const relevantRates: Record<string, number> = {
            INR: 1,
            USD: json.rates.USD,
            THB: json.rates.THB,
            AED: json.rates.AED,
            SGD: json.rates.SGD,
          };
          setRates(relevantRates);
          localStorage.setItem(CACHE_KEY, JSON.stringify({ data: relevantRates, timestamp: Date.now() }));
        }
      } catch (error) {
        console.error("Failed to fetch exchange rates:", error);
      } finally {
        setIsLoadingRates(false);
      }
    };

    fetchRates();
  }, []);

  const currencyInfo = CURRENCIES.find(c => c.code === currency) || CURRENCIES[0];

  const convertPrice = useCallback((amountInINR: number) => {
    if (currency === "INR") return amountInINR;
    const rate = rates[currency];
    if (!rate) return amountInINR;
    return Math.round(amountInINR * rate * 100) / 100;
  }, [currency, rates]);

  const formatPrice = useCallback((amountInINR: number) => {
    const converted = convertPrice(amountInINR);
    return `${currencyInfo.symbol}${converted.toLocaleString(undefined, { minimumFractionDigits: currency === "INR" ? 0 : 2, maximumFractionDigits: 2 })}`;
  }, [convertPrice, currencyInfo, currency]);

  return (
    <CurrencyContext.Provider
      value={{
        currency,
        setCurrency,
        convertPrice,
        formatPrice,
        currencySymbol: currencyInfo.symbol,
        rates,
        isLoadingRates,
      }}
    >
      {children}
    </CurrencyContext.Provider>
  );
};

export const useCurrency = () => {
  const context = useContext(CurrencyContext);
  if (!context) {
    throw new Error("useCurrency must be used within a CurrencyProvider");
  }
  return context;
};
