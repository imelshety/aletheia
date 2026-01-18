import type { Meta, StoryObj } from '@storybook/react';
import { MemoryRouter } from 'react-router';
import { Link } from './Link';
import { Logo } from '@/components';

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
  argTypes: {
    variant: {
      control: 'select',
      options: ['styled', 'unstyled'],
    },
  },
} satisfies Meta<typeof Link>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Styled: Story = {
  args: {
    to: '/',
    children: 'Styled Link',
    variant: 'styled',
  },
};

export const unstyled: Story = {
  args: {
    to: '/',
    variant: 'unstyled',
    children: (
      <>
        {' '}
        <Logo width={40} height={40} />{' '}
      </>
    ),
  },
};

export const WithLogo: Story = {
  args: {
    to: '/',
    variant: 'styled',
    children: (
      <>
        <Logo width={40} height={40} />
        <h1 className='text-sm font-semibold'>Aletheia</h1>
      </>
    ),
  },
};
