import React from 'react';

interface CardProps {
    title?: string;
    description?: string;
    icon?: React.ReactNode;
    children?: React.ReactNode;
    className?: string;
    hover?: boolean;
}

export const Card: React.FC<CardProps> = ({
    title,
    description,
    icon,
    children,
    className = '',
    hover = true,
}) => {
    return (
        <div
            className={`bg-gradient-to-b from-[#141414] to-[#2a2a2a] dark:bg-slate-800  dark:border-slate-700 p-6 ${hover ? '' : ''
                } ${className}`}
        >
            {icon && (
                <div className="mb-4 text-red-600 dark:text-red-400">
                    {icon}
                </div>
            )}
            {title && (
                <h3 className="text-3xl font-light text-white dark:text-slate-100 mb-2">
                    {title}
                </h3>
            )}
            {description && (
                <p className="text-slate-200 leading-relaxed">
                    {description}
                </p>
            )}
            {children}
        </div>
    );
};
