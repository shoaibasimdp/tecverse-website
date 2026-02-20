import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ label, error, className = '', ...props }, ref) => {
        return (
            <div className="w-full">
                {label && (
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                        {label}
                    </label>
                )}
                <input
                    ref={ref}
                    className={`w-full px-4 py-2.5 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-[#014f86] dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#014f86] focus:border-transparent transition-all ${error ? 'border-[#014f86] focus:ring-[#014f86]' : ''
                        } ${className}`}
                    {...props}
                />
                {error && (
                    <p className="mt-1 text-sm text-[#014f86] dark:text-[#014f86]">{error}</p>
                )}
            </div>
        );
    }
);

Input.displayName = 'Input';
