import { render, screen } from '@testing-library/react';
import { Link } from './Link';
import { MemoryRouter } from 'react-router';

test('it should render children', () => {
  render(
    <MemoryRouter>
      <Link to='/'>Go To Dashboard Page</Link>
    </MemoryRouter>,
  );

  const link = screen.getByRole('link', { name: /Go To Dashboard Page/i });

  expect(link).toBeInTheDocument();
});

test('it should have the correct href attribute', () => {
  const targetUrl = '/dashboard';
  render(
    <MemoryRouter>
      <Link to={targetUrl}>Go To Dashboard Page</Link>
    </MemoryRouter>,
  );

  const link = screen.getByRole('link', { name: /dashboard/i });

  expect(link).toHaveAttribute('href', targetUrl);
});

test('it should apply styled classes when variant is styled', () => {
  const variant = 'styled';
  render(
    <MemoryRouter>
      <Link to='/' variant={variant}>
        Go To Dashboard Page
      </Link>
    </MemoryRouter>,
  );

  const link = screen.getByRole('link');

  expect(link).toHaveClass('flex', 'items-center', 'text-gray-500');
});

test('it should not apply styled classes when variant is unstyled', () => {
  const variant = 'unstyled';
  render(
    <MemoryRouter>
      <Link to='/' variant={variant}>
        Go To Dashboard Page
      </Link>
    </MemoryRouter>,
  );

  const link = screen.getByRole('link');

  expect(link).not.toHaveClass('text-gray-500');
});
