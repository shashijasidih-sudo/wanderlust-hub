import { useState } from "react";
import { MessageCircle, Package, Bus, MapPin, X } from "lucide-react";

const intents = [
  {
    label: "Book a package",
    icon: Package,
    message:
      "Hi Yellodae, I'm interested in booking a travel package for Thailand / Singapore / Dubai. Could you share the latest options and pricing?",
  },
  {
    label: "Ask about transfers",
    icon: Bus,
    message:
      "Hi Yellodae, I need airport or city transfers for my upcoming trip. Can you help me with availability and rates?",
  },
  {
    label: "Ask about Activities",
    icon: MapPin,
    message:
      "Hi Yellodae, I'd like to know about the best activities and experiences available in Thailand / Singapore / Dubai. Please guide me.",
  },
];

const phone = "917061710810";

const FloatingWhatsApp = () => {
  const [open, setOpen] = useState(false);

  const baseHref = (text: string) =>
    `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Intent panel */}
      {open && (
        <div className="flex flex-col gap-2 bg-white rounded-2xl shadow-xl p-3 w-64 border border-muted animate-in fade-in slide-in-from-bottom-2 duration-200">
          <div className="flex items-center justify-between px-1">
            <span className="text-sm font-semibold text-foreground">
              Start a chat
            </span>
            <button
              onClick={() => setOpen(false)}
              className="p-1 rounded-full hover:bg-muted transition-colors"
              aria-label="Close"
            >
              <X className="h-4 w-4 text-muted-foreground" />
            </button>
          </div>

          {intents.map((intent) => {
            const Icon = intent.icon;
            return (
              <a
                key={intent.label}
                href={baseHref(intent.message)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-3 py-2.5 rounded-xl bg-muted/50 hover:bg-[#25D366]/10 transition-colors group"
              >
                <div className="bg-[#25D366]/10 group-hover:bg-[#25D366]/20 p-1.5 rounded-lg transition-colors">
                  <Icon className="h-4 w-4 text-[#25D366]" />
                </div>
                <span className="text-sm font-medium text-foreground">
                  {intent.label}
                </span>
              </a>
            );
          })}

          <a
            href={baseHref(
              "Hi Yellodae, I have a question about your travel activities, transfers, or packages (Thailand / Singapore / Dubai). Could you please help me?"
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-3 py-2.5 rounded-xl bg-[#25D366]/10 hover:bg-[#25D366]/20 transition-colors"
          >
            <MessageCircle className="h-4 w-4 text-[#25D366]" />
            <span className="text-sm font-medium text-foreground">
              General inquiry
            </span>
          </a>
        </div>
      )}

      {/* Toggle button */}
      <button
        onClick={() => setOpen((prev) => !prev)}
        className={`bg-[#25D366] hover:bg-[#20BD5A] text-white p-4 rounded-full shadow-lg transition-all hover:scale-110 ${
          open ? "rotate-0" : ""
        }`}
        aria-label={open ? "Close WhatsApp menu" : "Open WhatsApp menu"}
      >
        {open ? (
          <X className="h-6 w-6" />
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-6 w-6"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        )}
      </button>
    </div>
  );
};

export default FloatingWhatsApp;
