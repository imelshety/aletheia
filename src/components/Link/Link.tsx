import type { ReactNode } from 'react';
import { Link as RouterLink } from 'react-router';

export interface LinkProps {
  children: ReactNode;
  styled?: boolean;
  unstyled?: boolean;
  to: string;
}

export function Link({ children, styled, unstyled, to }: LinkProps) {
  const isStyled = styled && !unstyled;

  return (
    <RouterLink to={to} className={` ${isStyled ? 'text-brand hover:underline' : ''}`}>
      {children}
    </RouterLink>
  );
}
