import { useId } from "react";
import { IMaskInput } from "react-imask";
import { Label } from "../ui/label";

type InputMaskProps = {
  labelText?: string;
  mask: string;
  error?: string;
  value?: string;
  onChange?: (value: string) => void;
};

export function InputMask({
  labelText,
  mask,
  error,
  value,
  onChange,
}: InputMaskProps) {
  const id = useId();
  return (
    <div className="flex flex-col gap-2">
      <Label htmlFor={id}>{labelText}</Label>
      <IMaskInput
        id={id}
        mask={mask}
        value={value}
        onAccept={(value) => onChange?.(value as string)}
        className={`flex h-9 w-full rounded-md border px-3 py-1 text-sm shadow-sm
          ${error ? "border-red-500 focus-visible:ring-red-500" : "border-input"}
        `}
      />
      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  );
}
