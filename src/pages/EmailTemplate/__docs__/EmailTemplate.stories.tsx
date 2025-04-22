import { Meta, StoryObj } from '@storybook/react';
import EmailTemplate, { EmailTemplateProps } from '../EmailTemplate';
const meta: Meta<typeof EmailTemplate> = {
  title: 'Pages/EmailTemplate',
  component: EmailTemplate,
  tags: ['autodocs'],
  argTypes: {},
  parameters: {
    controls: { expanded: true },
  },
};
export default meta;

export const Primary: StoryObj<EmailTemplateProps> = {
  args: {
    title: 'Payable and Used',
  },
};
