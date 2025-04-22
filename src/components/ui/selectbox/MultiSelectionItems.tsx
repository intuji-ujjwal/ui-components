import React from 'react';
import { MultiSelect } from 'react-multi-select-component';
import './MultiSelectionItems.css';

export interface MultiSelectOptionProps {
  title?: string;
  items: { label: string; value: string; disabled?: boolean }[];
  selected: { label: string; value: string }[];
  setSelected: React.Dispatch<
    React.SetStateAction<{ label: string; value: string }[]>
  >;
  hasSelectAll?: boolean;
  overrideStrings?: string;
  disabled?: boolean;
  disableSearch?: boolean;
  isLoading?: boolean;
  className?: string;
  closeOnChangedValue?: boolean;
}

const MultiSelectOption: React.FC<MultiSelectOptionProps> = ({
  title,
  items,
  selected,
  setSelected,
  hasSelectAll,
  overrideStrings,
  disabled,
  disableSearch,
  isLoading,
  className,
  closeOnChangedValue,
  ...props
}) => {
  return (
    <MultiSelect
      options={items}
      value={selected}
      onChange={setSelected}
      labelledBy={title || 'Select'}
      hasSelectAll={hasSelectAll === true ? true : false}
      overrideStrings={{ selectSomeItems: overrideStrings ?? 'Select' }}
      disabled={disabled === true ? true : false}
      disableSearch={disableSearch === true ? true : false}
      isLoading={isLoading === true ? true : false}
      className={className ? className : ''}
      closeOnChangedValue={closeOnChangedValue === true ? true : false}
      {...props}
    />
  );
};

export default MultiSelectOption;
