import React from 'react';

interface ButtonProps {
    onClick?: () => void;
    children: React.ReactNode;
    variant?: 'primary' | 'secondary';
    className?: string;
    type?: 'submit' | 'button' | 'reset';
}

export const AppButton: React.FC<ButtonProps> = ({
    onClick,
    children,
    variant = 'primary',
    className = '',
    type = 'button',
}) => {
    const baseClasses =
        'block flex-1 h-[44px] sm:h-[52px] flex justify-center items-center px-2 text-sm sm:text-base text-secondary rounded-full focus:outline-none focus:ring-1 focus:ring-secondary transition-colors';
    const variantClasses =
        variant === 'primary' ? 'bg-primary ' : 'border border-secondary';

    return (
        <button
            type={type}
            onClick={onClick}
            className={`${baseClasses} ${variantClasses} ${className}`}
        >
            {children}
        </button>
    );
};
