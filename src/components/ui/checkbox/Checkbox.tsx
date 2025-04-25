import React from 'react';
import { cva, VariantProps } from 'class-variance-authority';

import { cn } from '../../../utils/cn';
import { IconCheck } from '../icons/regular/check';
import { IconMinus } from '../icons/regular/minus';

const checkboxVariants = cva(
  "before:content[''] bg-white before:bg-blue-gray-500 peer relative size-5 cursor-pointer appearance-none rounded-sm border border-grey-200 shadow-inner transition-all before:absolute before:left-2/4 before:top-2/4 before:block before:h-12 before:w-12 before:-translate-x-2/4 before:-translate-y-2/4 before:rounded-full before:opacity-0 before:transition-opacity disabled:cursor-not-allowed disabled:bg-gray-100 checked:border-blue-600 checked:bg-blue-600 focus:border-blue-600 disabled:checked:border-blue-200 disabled:checked:bg-blue-200 disabled:indeterminate:border-blue-200 disabled:indeterminate:bg-blue-200",
);

interface CheckboxProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof checkboxVariants> {
  indeterminate?: boolean;
}

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, indeterminate = false, ...props }, ref) => {
    return (
      <div className='inline-flex items-center'>
        <div className='relative flex cursor-pointer items-center'>
          <input
            ref={ref}
            type='checkbox'
            data-cy={`checkbox`}
            data-indeterminate={indeterminate}
            className={cn(checkboxVariants({}), className)}
            {...props}
          />
          <span className='pointer-events-none absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100 peer-data-[indeterminate=true]:opacity-0'>
            <IconCheck
              fill={'white'}
              size={12}
            />
          </span>
          <span className='pointer-events-none absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4 text-white opacity-0 transition-opacity peer-data-[indeterminate=true]:opacity-100'>
            <IconMinus
              fill={'white'}
              size={12}
            />
          </span>
        </div>
      </div>
    );
  },
);

Checkbox.displayName = 'Checkbox';
