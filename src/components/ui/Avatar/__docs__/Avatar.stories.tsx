import { Avatar as AvatarComponent } from '../Avatar';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta = {
  title: 'components/Avatar',
  component: AvatarComponent,
  tags: ['autodocs'],
} satisfies Meta<typeof AvatarComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Avatar: Story = {
  args: {
    name: 'avatar 1',
    imageSrc: 'https://photogov.net/_nuxt/img/result.266b50d.webp',
    size: '3xl',
  },
  argTypes: {
    size: {
      options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl'],
      control: { type: 'select' },
    },
  },
};

export const AvatarWithNoImage: Story = {
  args: {
    name: 'Sam',
    size: '3xl',
  },
};
