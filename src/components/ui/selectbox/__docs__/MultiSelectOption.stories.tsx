import React, { useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import MultiSelectOption, {
  MultiSelectOptionProps,
} from '../MultiSelectionItems';

const Itemsoptions = [
  { label: 'Grapes 🍇', value: 'grapes' },
  { label: 'Mango 🥭', value: 'mango' },
  { label: 'Strawberry 🍓', value: 'strawberry' },
];

const meta: Meta<typeof MultiSelectOption> = {
  title: 'components/MultiSelectOption',
  component: MultiSelectOption,
  tags: ['autodocs'],
};

export default meta;

const MultiSelectStory: React.FC<MultiSelectOptionProps> = (args) => {
  const [selected, setSelected] = useState<{ label: string; value: string }[]>(
    [],
  );

  return (
    <MultiSelectOption
      {...args}
      selected={selected}
      setSelected={setSelected}
    />
  );
};

export const MultiSelectPrimary: StoryFn<MultiSelectOptionProps> = (args) => (
  <MultiSelectStory {...args} />
);

MultiSelectPrimary.args = {
  title: 'Multi Select Options',
  items: Itemsoptions,
  selected: [],
  hasSelectAll: false,
  overrideStrings: 'Select Me Please',
  disabled: false,
  disableSearch: false,
  isLoading: false,
  className: '',
  closeOnChangedValue: false,
};
