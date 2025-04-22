import React from 'react';
import './radioDesign.css';

type RadioButtonProps = {
  checked?: boolean;
  disabled?: boolean;
  label?: string;
  labelStyles?: string;
  containerStyles?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  focus?: React.FocusEventHandler<HTMLInputElement>;
  name?: string;
  additionInfo?: string;
};

const RadioButton = ({
  checked,
  disabled,
  label,
  onChange,
  focus,
  name,
  containerStyles,
  labelStyles,
  additionInfo,
}: RadioButtonProps) => {
  const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
    if (focus) {
      focus(event);
    }
  };

  return (
    <label
      className={`radio-input-field ${
        additionInfo ? 'with-additional-info flex-wrap' : ''
      } ${containerStyles ? containerStyles : ''} ${disabled ? 'pointer-events-none' : 'cursor-pointer'}`}
    >
      <input
        type='radio'
        readOnly
        checked={checked}
        disabled={disabled}
        onFocus={handleFocus}
        onChange={onChange}
        name={name ? name : ''}
      />
      <div className='checkmark' />
      {label ? (
        <div
          className={`${labelStyles ? labelStyles : ''} radio-label ${
            additionInfo ? 'w-full' : ''
          }`}
        >
          {label}
        </div>
      ) : null}
      {additionInfo && (
        <span className='block w-full text-base font-normal text-neutral-200'>
          {' '}
          {additionInfo}
        </span>
      )}
    </label>
  );
};

export default RadioButton;
