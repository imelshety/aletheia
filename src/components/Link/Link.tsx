import type { ReactNode } from 'react';
import { Link as RouterLink } from 'react-router';

export interface LinkProps {
  children: ReactNode;
  unstyled?: boolean;
  to: string;
}

export function Link({ children, unstyled, to }: LinkProps) {
  return (
    <RouterLink to={to} className={` ${unstyled ? '' : 'text-brand hover:underline'}`}>
      {children}
    </RouterLink>
  );
}
