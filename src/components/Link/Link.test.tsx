import { render, screen } from '@testing-library/react';
import { Link } from './Link';
import { MemoryRouter } from 'react-router';

test('it should render Link with correct href attribute', () => {
  render(
    <MemoryRouter>
      <Link to='/dashboard'>Dashboard Page</Link>
    </MemoryRouter>,
  );

  const link = screen.getByRole('link', { name: /Dashboard Page/i });

  expect(link).toHaveAttribute('href', '/dashboard');
});

test('it should apply styled classes when styled prop is true', () => {
  render(
    <MemoryRouter>
      <Link to='/'>Dashboard Page</Link>
    </MemoryRouter>,
  );

  const link = screen.getByRole('link', { name: /Dashboard Page/i });

  expect(link).toHaveClass('text-brand');
});

test('it should not apply styled classes when styled prop is false', () => {
  render(
    <MemoryRouter>
      <Link to='/' unstyled>
        Dashboard Page
      </Link>
    </MemoryRouter>,
  );

  const link = screen.getByRole('link', { name: /Dashboard Page/i });

  expect(link).not.toHaveClass('text-brand');
});
