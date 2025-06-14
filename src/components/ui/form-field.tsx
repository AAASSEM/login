import React from 'react';
import { cn } from '@/lib/utils';

interface FormFieldProps {
  label: string;
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  required?: boolean;
}

export const FormField: React.FC<FormFieldProps> = ({
  label,
  type = 'text',
  placeholder,
  value,
  onChange,
  className,
  required = false,
}) => {
  return (
    <div className={cn('flex w-full flex-col items-stretch', className)}>
      <label className="gap-2 text-slate-900 font-medium leading-none">
        {label}
      </label>
      <div className="flex w-full items-stretch gap-2 text-slate-400 font-normal leading-6 mt-1.5">
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={required}
          className="text-slate-400 self-stretch bg-white border-slate-300 border min-w-60 w-full h-full flex-1 shrink basis-[0%] pl-3 pr-14 py-2 rounded-md border-solid max-md:pr-5 focus:outline-none focus:ring-2 focus:ring-amber-700 focus:border-transparent"
        />
      </div>
    </div>
  );
};
