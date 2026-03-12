import { useEffect, useState } from "react";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import "react-phone-number-input/style.css";

export default function PhoneNumberField({
  value,
  onChange,
  onError,
}: {
  value?: string;
  onChange?: (value: string) => void;
  onError?: (error: string | null) => void;
}) {
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const phoneValue = value || "";
    if (phoneValue && !isValidPhoneNumber(phoneValue)) {
      const err = "Please enter a valid phone number";
      setError(err);
      if (onError) onError(err);
    } else {
      setError(null);
      if (onError) onError(null);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return (
    <div className="w-full">
      <style>{`
        .phone-input input {
          border: none !important;
          background: transparent !important;
          outline: none !important;
          box-shadow: none !important;
          padding: 0 !important;
        }
      `}</style>
      <PhoneInput
        international
        defaultCountry="IN"
        value={value}
        onChange={(val) => onChange?.(val || "")}
        className={`phone-input w-full rounded-md border bg-input-background px-3 h-9 font-['Inter'] text-base text-black outline-none transition-[color,box-shadow] placeholder:text-muted-foreground focus-within:border-ring focus-within:ring-ring/50 focus-within:ring-[3px] md:text-sm ${error ? "border-destructive ring-destructive/20" : "border-input"
          }`}
        placeholder="Your Phone number*"
      />
      {error && (
        <p className="mt-1 text-[10px] text-destructive leading-none">{error}</p>
      )}
    </div>
  );
}
