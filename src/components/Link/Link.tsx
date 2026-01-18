import type { ReactNode } from 'react';
import { Link as RouterLink, type LinkProps as RouterLinkProps } from 'react-router';

export interface LinkProps extends RouterLinkProps {
  children?: ReactNode;
  variant?: 'styled' | 'unstyled';
}

const styledClasses = 'flex items-center gap-1 text-gray-500 hover:text-gray-800';
export function Link({ children, variant, ...props }: LinkProps) {
  const className = ` ${variant == 'styled' ? styledClasses : ''}`;
  return (
    <RouterLink className={className} {...props}>
      {children}
    </RouterLink>
  );
}
