import React from 'react';
import { cn } from '@/lib/utils';

interface CustomCheckboxProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label: string;
  className?: string;
}

export const CustomCheckbox: React.FC<CustomCheckboxProps> = ({
  checked,
  onChange,
  label,
  className,
}) => {
  return (
    <div className={cn('flex gap-2 font-medium leading-none items-center', className)}>
      <div
        className="bg-white border-slate-300 border flex w-3.5 shrink-0 h-3.5 rounded-sm border-solid cursor-pointer relative"
        onClick={() => onChange(!checked)}
      >
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          className="absolute inset-0 opacity-0 cursor-pointer"
          aria-label={label}
        />
        {checked && (
          <svg
            className="w-3 h-3 text-amber-700 absolute inset-0.5"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        )}
      </div>
      <label className="cursor-pointer" onClick={() => onChange(!checked)}>
        {label}
      </label>
    </div>
  );
};
