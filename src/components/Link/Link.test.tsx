import { MemoryRouter } from '@/components';
import { render, screen } from '@testing-library/react';
import { Link } from './Link';

describe('Link component', () => {
  it('should render styled link by default', () => {
    render(
      <MemoryRouter>
        <Link to='/path/to/resource'>Dashboard Page</Link>
      </MemoryRouter>,
    );

    const element = screen.getByRole('link', { name: /Dashboard Page/i });

    expect(element.tagName.toLowerCase()).toBe('a');
    expect(element.getAttribute('class')).not.toBe('');
    expect(element.getAttribute('href')).toBe('/path/to/resource');
  });

  it('should render unstyled link when "unstyled" prop is true', () => {
    render(
      <MemoryRouter>
        <Link to='/path/to/resource' unstyled>
          Dashboard Page
        </Link>
      </MemoryRouter>,
    );

    const element = screen.getByRole('link', { name: /Dashboard Page/i });

    expect(element.getAttribute('class')).toBe('');
  });
});
