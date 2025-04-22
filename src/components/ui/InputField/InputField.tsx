import './inputField.css';
import React, { useState } from 'react';
import { calculatePasswordStrength } from './calculatePasswordStrength';
import PasswordStrengthIllustration from './PasswordStrengthIllustration';
import { Controller, useFormContext } from 'react-hook-form';

export interface PrimaryInputProps {
  requirement?: boolean;
  type: 'text' | 'email' | 'password' | 'url' | 'number' | 'date' | 'search';
  placeholder?: string;
  name: string;
  label?: React.ReactNode;
  max_width?: number;
  defaultValue?: string;
  error?: string;
  rules?: object;
  minHeight?: number;
}

const type_def = {
  text: 'text-field',
  email: 'email-field',
  password: 'password-field',
  url: 'url-field',
  number: 'number-field',
  date: 'date-field',
  search: 'search-field',
};

const InputField: React.FC<PrimaryInputProps> = ({
  requirement = false,
  type = 'text',
  placeholder,
  name,
  max_width,
  defaultValue = '',
  rules,
  minHeight,
  ...props
}: PrimaryInputProps) => {
  const { control } = useFormContext();
  const class_style = `field-${type_def[type]}`;

  const searchIcon = encodeURIComponent(`
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.9419 17.0575L14.0302 13.1466C15.1639 11.7854 15.7293 10.0395 15.6086 8.27214C15.488 6.50475 14.6906 4.85192 13.3823 3.65748C12.074 2.46304 10.3557 1.81895 8.58462 1.8592C6.81357 1.89945 5.12622 2.62094 3.87358 3.87358C2.62094 5.12622 1.89945 6.81357 1.8592 8.58462C1.81895 10.3557 2.46304 12.074 3.65748 13.3823C4.85192 14.6906 6.50475 15.488 8.27214 15.6086C10.0395 15.7293 11.7854 15.1639 13.1466 14.0302L17.0575 17.9419C17.1156 17.9999 17.1845 18.046 17.2604 18.0774C17.3363 18.1089 17.4176 18.125 17.4997 18.125C17.5818 18.125 17.6631 18.1089 17.739 18.0774C17.8149 18.046 17.8838 17.9999 17.9419 17.9419C17.9999 17.8838 18.046 17.8149 18.0774 17.739C18.1089 17.6631 18.125 17.5818 18.125 17.4997C18.125 17.4176 18.1089 17.3363 18.0774 17.2604C18.046 17.1845 17.9999 17.1156 17.9419 17.0575ZM3.12469 8.74969C3.12469 7.63717 3.45459 6.54963 4.07267 5.62461C4.69076 4.69958 5.56926 3.97861 6.5971 3.55287C7.62493 3.12712 8.75593 3.01573 9.84707 3.23277C10.9382 3.44981 11.9405 3.98554 12.7272 4.77221C13.5138 5.55888 14.0496 6.56116 14.2666 7.65231C14.4837 8.74345 14.3723 9.87445 13.9465 10.9023C13.5208 11.9301 12.7998 12.8086 11.8748 13.4267C10.9497 14.0448 9.86221 14.3747 8.74969 14.3747C7.25836 14.373 5.82858 13.7799 4.77404 12.7253C3.71951 11.6708 3.12634 10.241 3.12469 8.74969Z"
        fill="#A0A0A0"
      />
    </svg>`);
  const SearchBg = {
    backgroundImage: `url("data:image/svg+xml,${searchIcon}")`,
  };
  const [showPassword, setShowPassword] = useState(false);

  const [passwordStrength, setPasswordStrength] = useState(0);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };
  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const password = event.target.value;
    const strength = calculatePasswordStrength(password);
    setPasswordStrength(strength);
  };
  return (
    <div
      className={`${class_style} input-field w-full`}
      style={{ maxWidth: max_width ? max_width : '' }}
    >
      {props.label && (
        <label className='mb-2 block text-xs font-semibold capitalize'>
          {props.label}{' '}
          {requirement && (
            <span className='requirement mb-1 font-light text-[#FF4A3D]'>
              *
            </span>
          )}
        </label>
      )}
      <div className='relative'>
        <Controller
          name={name}
          control={control}
          rules={rules}
          defaultValue={defaultValue}
          render={({
            field: { onChange, onBlur, value, ref },
            fieldState: { error },
          }) => (
            <>
              <div className='relative'>
                <input
                  id={name}
                  name={name}
                  type={
                    type === 'password'
                      ? showPassword
                        ? 'text'
                        : 'password'
                      : type
                  }
                  placeholder={placeholder}
                  value={value ?? ''}
                  onChange={(e) => {
                    onChange(e);
                    if (type === 'password') handlePasswordChange(e);
                  }}
                  onBlur={onBlur}
                  ref={ref}
                  className={`input-${class_style} h-[40px] w-full rounded border-2 py-2.5 text-base font-normal leading-none ${type === 'search' ? 'pl-[46px] pr-4' : 'px-4'} ${error ? 'error border-danger-500 focus:outline-none' : 'focus:outline-primary-700 border-neutral-100'} min-h-[${minHeight ? minHeight + 'px' : ''}]`}
                  style={
                    type === 'search'
                      ? {
                          ...SearchBg,
                          backgroundRepeat: 'no-repeat',
                          backgroundPosition: '17px center',
                        }
                      : {}
                  }
                />
                {type == 'password' && (
                  <span
                    className='absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer'
                    onClick={handleTogglePassword}
                  >
                    Show
                  </span>
                )}
              </div>

              {error && (
                <div className="errorinfo error-message text-danger-500 before:text-danger-500 mt-2 before:mr-1 before:inline before:content-['⚠']">
                  {error?.message || ''}
                </div>
              )}
              {type === 'password' && (
                <div className='password-strength'>
                  <PasswordStrengthIllustration strength={passwordStrength} />
                </div>
              )}
            </>
          )}
        />
      </div>
    </div>
  );
};

export default InputField;
