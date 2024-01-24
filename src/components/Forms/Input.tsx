import { clsx } from "clsx";
import { useState } from "react";
import { UseFormRegister } from "react-hook-form";

interface SsProps {
  xs: string;
  sm: string;
  lg: string;
  md: string;
}

interface IProps {
  placeholder: string;
  className?: string;
  size?: "xs" | "sm" | "md" | "lg";
  type?: string;
  spanClass?: string;
  name: string;
  error?: string | null;
  rest?: React.InputHTMLAttributes<HTMLInputElement>;
  // eslint-disable-next-line no-unused-vars
  register?: UseFormRegister<any>;
  value?: string;
  // eslint-disable-next-line no-unused-vars
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onkeydown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  onkeyup?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  max?: number | string | undefined;
  min?: number | string | undefined;
  maxLength?: number | undefined;
  minLength?: number | undefined;
  step?: string;
  prefix?: string;
  pattern?: string;
  title?: string;
  disabled?: boolean;
  autoFocus?: boolean;
  icon?: {};
  defaultValue?: string;
  autoComplete?: string;
}

const sizeStyles: SsProps = {
  xs: "px-3 py-2 text-xs",
  sm: "px-3 py-2 text-sm",
  md: "px-4 py-3 text-base",
  lg: "px-5 py-4 text-lg",
};

const Input: React.FC<IProps> = ({
  placeholder,
  size = "md",
  className,
  value,
  onChange,
  type,
  register,
  icon,
  max,
  min,
  step,
  pattern,
  title,
  disabled,
  error,
  name,
  onkeydown,
  onkeyup,
  defaultValue,
  maxLength,
  minLength,
  ...rest
}) => {
  const [inputType] = useState(type || "text");

  return (
    <div className="relative w-full">
      <input
        type={inputType}
        className={clsx(
          className,
          sizeStyles[size],
          "focus:shadow-outline block w-full rounded-md border disabled:!text-secondary bg-transparent  focus:outline-none focus:ring-0 border-borderColor text-white  focus:border-primary"
        )}
        pattern={pattern}
        max={max}
        step={step}
        title={title}
        min={min}
        value={value}
        maxLength={maxLength}
        minLength={minLength}
        name={name}
        onChange={onChange}
        onKeyDown={onkeydown}
        onKeyUp={onkeyup}
        {...(register !== undefined && { ...register(name) })}
        placeholder={placeholder}
        disabled={disabled}
        defaultValue={defaultValue}
        {...rest}
      />
    </div>
  );
};

export default Input;
