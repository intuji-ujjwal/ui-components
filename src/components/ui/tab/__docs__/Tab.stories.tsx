import { Meta, StoryObj } from '@storybook/react';
import { GroupTab, TabProps } from '../Tab';
const meta: Meta<typeof GroupTab> = {
  title: 'Components/Tab',
  component: GroupTab,
  tags: ['autodocs'],
  argTypes: {
    icon: {
      options: ['reg-user', 'reg-check', 'fill-warning'],
      control: { type: 'select' },
    },
  },
};
export default meta;

export const Primary: StoryObj<TabProps> = {
  args: {
    icon: 'reg-user',
    fill: 'red',
    items: [
      {
        title: 'TabHead',
        children: (
          <p>
            Content Of
            Tablessssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss
            One
          </p>
        ),
      },
      {
        title: 'TabTwo',
        children: <p>Content Of Table Two</p>,
      },
      {
        title: 'TabTwo',
        children: <p>Content Of Table Two</p>,
      },
      // {
      //   title: "Accordion Item 3",
      //   children: <p>Content for Accordion Item 3</p>,
      //   active: false,
      //   id: 3,
      // },
    ],
  },
};
