import React from 'react';
import { cn } from '../../../utils/cn';

type ButtonSize = 'small' | 'medium' | 'large';
type ButtonDesignType = 'solid' | 'outline' | 'tertiary';
type ButtonVarient =
  | 'primary'
  | 'yellow'
  | 'gray'
  | 'warning'
  | 'green'
  | 'blue';
type ButtonType = 'button' | 'submit' | 'reset';

const defaultBttnClass =
  'rounded leading-none inline-flex items-center justify-center cursor-pointer  gap-1.5';
const buttonSizeClasses: Record<ButtonSize, string> = {
  small: 'px-9 py-2 min-h-[32px] small text-xs',
  medium: 'px-9 py-3 min-h-[48px] medium text-base',
  large: 'px-9 py-4  min-h-[60px] large text-xl',
};

const buttonVariantClasses: Record<
  ButtonVarient,
  Record<ButtonDesignType, string>
> = {
  primary: {
    solid:
      'bg-primary-600 text-white hover:bg-primary-500 focus:bg-primary-800',
    outline:
      'bg-transparent border border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white',
    tertiary: 'text-primary-600',
  },
  yellow: {
    solid: 'bg-yellow-600 text-white hover:bg-yellow-500 focus:bg-yellow-800',
    outline:
      'bg-transparent border border-yellow-600 text-yellow-600 hover:bg-yellow-600 hover:text-white',
    tertiary: 'text-yellow-600',
  },
  gray: {
    solid: 'bg-gray-600 text-white hover:bg-gray-500 focus:bg-gray-800',
    outline:
      'bg-transparent border border-gray-600 text-gray-600 hover:bg-gray-600 hover:text-white',
    tertiary: 'text-gray-600',
  },
  warning: {
    solid:
      'bg-warning-600 text-white hover:bg-warning-500 focus:bg-warning-800',
    outline:
      'bg-transparent border border-warning-600 text-warning-600 hover:bg-warning-600 hover:text-white',
    tertiary: 'text-warning-600',
  },
  green: {
    solid: 'bg-green-600 text-white hover:bg-green-500 focus:bg-green-800',
    outline:
      'bg-transparent border border-green-600 text-green-600 hover:bg-green-600 hover:text-white',
    tertiary: 'text-green-600',
  },

  blue: {
    solid: 'bg-blue-600 text-white hover:bg-blue-500 focus:bg-blue-800',
    outline:
      'bg-transparent border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white',
    tertiary: 'text-blue-600',
  },
};

export interface ButtonProps {
  size: ButtonSize;
  designType?: ButtonDesignType;
  varient: ButtonVarient;
  type?: ButtonType;
  handleClick?: () => void;
  children: React.ReactNode;
  classes?: string;
  isDisabled?: boolean;
  url?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  isLoading?: boolean;
  loadingIcon?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  size = 'small',
  varient = 'primary',
  type = 'button',
  handleClick,
  children,
  classes,
  designType,
  isDisabled,
  url,
  isLoading,
  leftIcon,
  rightIcon,
  loadingIcon,
  ...props
}: ButtonProps) => {
  return (
    <>
      {url ? (
        <a
          {...props}
          type={type ? type : 'button'}
          className={cn(
            defaultBttnClass,
            buttonSizeClasses[size],
            buttonVariantClasses[varient][designType ?? 'solid'],
            classes,
          )}
          href={url}
          style={{
            cursor: isDisabled ? 'not-allowed' : 'pointer',
            opacity: isDisabled ? '0.5' : '1',
          }}
        >
          {' '}
          {leftIcon && leftIcon}
          <span className='label'>{children}</span>
          {rightIcon && rightIcon}
          {isLoading && loadingIcon}
        </a>
      ) : (
        <button
          {...props}
          disabled={isDisabled}
          type={type ? type : 'button'}
          className={cn(
            defaultBttnClass,
            buttonSizeClasses[size],
            buttonVariantClasses[varient][designType ?? 'solid'],
            classes,
          )}
          onClick={handleClick}
          style={{
            cursor: isDisabled ? 'not-allowed' : 'pointer',
            opacity: isDisabled ? '0.5' : '1',
          }}
        >
          {' '}
          {leftIcon && leftIcon}
          <span className='label'>{children}</span>
          {rightIcon && rightIcon}
          {isLoading && loadingIcon}
        </button>
      )}
    </>
  );
};

export default Button;
