import type { Meta, StoryObj } from '@storybook/react';
import { MemoryRouter } from 'react-router';
import { Link } from './Link';

const meta = {
  title: 'Components/Link',
  component: Link,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    Story => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
} satisfies Meta<typeof Link>;

export default meta;
type Story = StoryObj<typeof meta>;

export const StyledLink: Story = {
  args: {
    to: '/',
    children: 'Styled Link',
    styled: true,
  },
};

export const UnStyledLink: Story = {
  args: {
    to: '/',
    unstyled: true,
    children: 'Unstyled Link',
  },
};
