import { ChangeEvent } from 'react';
import './CheckboxDesign.css';
import React from 'react';
export interface CheckboxProps {
  id?: string;
  type?: 'slide' | 'default' | 'radio';
  children?: React.ReactNode;
  checked?: boolean;
  label?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  isDisabled?: boolean;
  checkboxDesigncss?: string;
  radioBoxStyles?: string;
  labelStyle?: string;
  additionInfo?: string;
  //   value?:string | null;
}

const type_def = {
  slide: 'switch-checkbox switch',
  default: 'default-checkbox default',
  radio: 'radio-checkbox',
};

const Checkbox: React.FC<CheckboxProps> = ({
  type = 'slide',
  checked = false,
  onChange,
  label,
  isDisabled = false,
  radioBoxStyles,
  labelStyle,
  //   value,
  ...props
}: CheckboxProps) => {
  const class_style = `${type_def[type]}`;

  return (
    <div>
      <span
        className={`label title mb-2 block text-xs font-semibold capitalize ${
          props.checkboxDesigncss ? props.checkboxDesigncss : 'mb-2'
        } ${label ? '' : 'hidden'}`}
      >
        {label}
      </span>
      <label
        className={`label-info relative flex flex-wrap ${labelStyle} ${class_style} ${
          isDisabled ? 'pointer-events-none' : 'cursor-pointer'
        } ${radioBoxStyles && radioBoxStyles}`}
      >
        <input
          type='checkbox'
          checked={checked}
          onChange={onChange}
          disabled={isDisabled}
          className={`${isDisabled && 'cursor-not-allowed'}`}
          //   value={value? value: undefined}
        />
        <span
          className='slider round'
          aria-selected={isDisabled ? 'true' : 'false'}
        ></span>
        {props.children && (
          <span className={`label-text ml-2.5`}>{props.children}</span>
        )}
      </label>
    </div>
  );
};
export default Checkbox;
