import type { ReactNode } from 'react';
import { Link as RouterLink } from 'react-router';

interface LinkProps {
  children?: ReactNode;
  styled?: boolean;
  to: string;
}

export function Link({ children, styled = false, to }: LinkProps) {
  return (
    <RouterLink to={to} className={styled ? 'text-brand hover:underline' : ''}>
      {children}
    </RouterLink>
  );
}
