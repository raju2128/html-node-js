import React from 'react';

interface FormFieldProps {
  label: string;
  id: string;
  type?: 'text' | 'email' | 'select' | 'textarea';
  required?: boolean;
  value: string;
  onChange: (value: string) => void;
  options?: { value: string; label: string; }[];
  rows?: number;
}

export const FormField: React.FC<FormFieldProps> = ({
  label,
  id,
  type = 'text',
  required = false,
  value,
  onChange,
  options,
  rows
}) => {
  const baseClassName = "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gold-500 focus:ring-gold-500 bg-white/80 backdrop-blur-sm p-2";

  const renderInput = () => {
    switch (type) {
      case 'textarea':
        return (
          <textarea
            id={id}
            rows={rows}
            className={baseClassName}
            value={value}
            onChange={(e) => onChange(e.target.value)}
          />
        );
      case 'select':
        return (
          <select
            id={id}
            className={baseClassName}
            value={value}
            onChange={(e) => onChange(e.target.value)}
          >
            {options?.map(({ value, label }) => (
              <option key={value} value={value}>{label}</option>
            ))}
          </select>
        );
      default:
        return (
          <input
            type={type}
            id={id}
            required={required}
            className={baseClassName}
            value={value}
            onChange={(e) => onChange(e.target.value)}
          />
        );
    }
  };

  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      {renderInput()}
    </div>
  );
};