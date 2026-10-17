import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'default' | 'on-dark' | 'header';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  variant = 'default',
  size = 'md',
}) => {
  const sizeClasses = {
    xs: 'h-7',
    sm: 'h-9',
    md: 'h-11 sm:h-12',
    lg: 'h-16 sm:h-20',
    xl: 'h-24 sm:h-28',
  };

  if (variant === 'on-dark') {
    return (
      <div className={`inline-flex items-center bg-white px-3 py-1.5 rounded-xl shadow-md border border-slate-100 ${className}`}>
        <img
          src="/images/logo.png"
          alt="Awad Educational Academy Logo"
          className={`${sizeClasses[size]} w-auto object-contain`}
        />
      </div>
    );
  }

  return (
    <div className={`inline-flex items-center ${className}`}>
      <img
        src="/images/logo.png"
        alt="Awad Educational Academy Logo"
        className={`${sizeClasses[size]} w-auto object-contain`}
      />
    </div>
  );
};
