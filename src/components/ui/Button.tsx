import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
    variant = 'primary',
    size = 'md',
    className = '',
    children,
    ...props
}) => {
    const baseStyles =
        'inline-flex items-center justify-center font-medium transition-all duration-200 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';

    const variants = {
        primary:
            'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500',

        secondary:
            'bg-red-500 text-white hover:bg-red-600 focus:ring-red-500',

        outline:
            'border-2 border-red-600 text-red-600 hover:bg-red-50 dark:hover:bg-red-950 focus:ring-red-500',

        ghost:
            'text-red-600 dark:text-red-400 hover:bg-red-100 dark:hover:bg-red-900/40 focus:ring-red-500',
    };

    const sizes = {
        sm: 'px-3 py-1.5 text-sm',
        md: 'px-6 py-2.5 text-base',
        lg: 'px-8 py-3.5 text-lg',
    };

    return (
        <button
            className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};
