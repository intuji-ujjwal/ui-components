import { Meta, StoryObj } from '@storybook/react';
import PopupModal, { PopupProps } from '../PopupModal';
import { ProgressBarProps } from '../../progressBar/ProgressBar';
const meta: Meta<typeof PopupModal> = {
  title: 'Components/PopupModal',
  component: PopupModal,
  tags: ['autodocs'],
  argTypes: {},
  parameters: {
    controls: { expanded: true },
  },
};
export default meta;

export const Primary: StoryObj<PopupProps> = {
  args: {
    title: 'Popup-Modal',
    children: (
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel minus sed
        atque hic veritatis mollitia esse ipsum iure sint quos at nisi, fuga
        eius, sequi maxime sit. Reiciendis, quas quidem!
      </p>
    ),
  },
};
