import type { ReactNode } from 'react';
import { Link as RouterLink } from 'react-router';

interface LinkProps {
  children?: ReactNode;
  unstyled?: boolean;
  to: string;
}

export function Link({ children, unstyled = false, to }: LinkProps) {
  return (
    <RouterLink to={to} className={unstyled ? '' : 'text-brand hover:underline'}>
      {children}
    </RouterLink>
  );
}
