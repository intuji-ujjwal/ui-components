import type { Meta, StoryObj } from '@storybook/react';
import SidebarMenuContentWrap from '../SideBarMenuWrap';
import jsonFile from './sidebarMenu.json';
import React from 'react';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction

const meta: Meta = {
  title: 'components/SideBarMenu',
  component: SidebarMenuContentWrap,
  tags: ['autodocs'],
} satisfies Meta<typeof SidebarMenuContentWrap>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    sidebarMenus: jsonFile,
    children: <div>children ... You can add any thing here ...</div>,
  },
};
