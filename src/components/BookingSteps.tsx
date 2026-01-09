import { cn } from "@/lib/utils";

interface BookingStepsProps {
  currentStep: 1 | 2 | 3;
}

const steps = [
  { number: 1, label: "Customer information" },
  { number: 2, label: "Payment information" },
  { number: 3, label: "Booking is confirmed!" },
];

const BookingSteps = ({ currentStep }: BookingStepsProps) => {
  return (
    <div className="flex items-center justify-center gap-8 md:gap-16 mb-8">
      {steps.map((step, index) => (
        <div key={step.number} className="flex flex-col items-center">
          <div
            className={cn(
              "w-10 h-10 rounded-full flex items-center justify-center text-lg font-semibold border-2 transition-all",
              currentStep === step.number
                ? "bg-primary text-primary-foreground border-primary"
                : currentStep > step.number
                ? "bg-primary/20 text-primary border-primary/50"
                : "bg-muted text-muted-foreground border-muted-foreground/30"
            )}
          >
            {step.number}
          </div>
          <span
            className={cn(
              "text-xs md:text-sm mt-2 text-center max-w-[100px]",
              currentStep === step.number
                ? "text-primary font-semibold"
                : "text-muted-foreground"
            )}
          >
            {step.label}
          </span>
        </div>
      ))}
    </div>
  );
};

export default BookingSteps;
