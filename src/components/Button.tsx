import * as React from 'react';

interface ButtonProps {
  disabled?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

export function Button({ disabled = false, children, onClick, type = 'button' }: ButtonProps) {
  const commonClasses =
    'w-full font-semibold rounded-lg focus:outline-none transition-colors duration-200 ' +
    'focus-visible:ring-2 focus-visible:ring-offset-2';

  const variantClasses =
    'text-white bg-brand hover:bg-brand-dark focus:ring-brand active:bg-brand-darker disabled:bg-brand-muted';

  const sizeClasses = 'py-2 px-4 text-base';

  const buttonClasses = `${commonClasses} ${sizeClasses} ${variantClasses}`;

  return (
    <button type={type} onClick={disabled ? undefined : onClick} disabled={disabled} className={buttonClasses}>
      {children}
    </button>
  );
}
