import { useId } from "react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { IMaskInput } from "react-imask";

type InputFormProps = {
  labelText?: string;
  icon?: React.ReactNode;
  error?: string;
  value?: string;
  mask?: string;
} & React.ComponentProps<"input">;

export function InputForm({
  labelText,
  icon,
  error,
  value,
  mask,
  onChange,
  ...props
}: InputFormProps) {
  const id = useId();

  const handleAccept = (val: string) => {
    if (onChange) {
      onChange({
        target: { value: val },
      } as React.ChangeEvent<HTMLInputElement>);
    }
  };
  return (
    <div className="flex flex-col gap-2">
      <Label htmlFor={id}>{labelText}</Label>
      {mask ? (
        <IMaskInput
          id={id}
          mask={mask}
          value={value}
          onAccept={handleAccept}
          className={`flex h-9 w-full rounded-md border px-3 py-1 text-sm shadow-sm
          ${error ? "border-red-500 focus-visible:ring-red-500" : "border-input"}
        `}
        />
      ) : (
        <Input id={id} value={value} onChange={onChange} {...props} />
      )}

      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  );
}
