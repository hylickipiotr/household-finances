import * as React from "react";

type FieldProps = {
  name: string;
  label: string;
  error?: string;
  isOptional?: boolean;
  className?: string;
};

const Field: React.FC<FieldProps> = ({
  name,
  label,
  error,
  children,
  isOptional,
  className,
}) => {
  return (
    <div className={className}>
      <div className="flex justify-between space-x-6">
        <label
          htmlFor={name}
          className="text-sm font-semibold text-gray-700 truncate"
        >
          {label}
        </label>
        {isOptional && <span className="text-sm text-gray-400">Optional</span>}
      </div>
      <div className="mt-1">{children}</div>
      {error && (
        <div className="mt-2 text-sm font-semibold text-red-600 first-letter:uppercase">
          {error}
        </div>
      )}
    </div>
  );
};

export { Field };
export type { FieldProps };
