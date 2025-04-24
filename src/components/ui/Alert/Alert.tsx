import { AlertProps } from './types';
import { cn } from '../../../utils/cn';
import { AlertIcon } from './alertIcon';
import { AlertTypeClasses } from './constant';

const Alert = ({ ...props }: AlertProps) => {
  const {
    title,
    link,
    children,
    className,
    alertIcon,
    description,
    setOpenState,
    type = 'default',
    openState = false,
  } = props;

  if (!openState) return null;

  return (
    <div
      role='alert'
      className={cn(
        'w-full rounded border-l-4 px-6 py-4',
        AlertTypeClasses[type],
        className,
      )}
    >
      <div className='relative pl-14'>
        <span className='icon absolute left-0 top-0 block'>
          {alertIcon ? alertIcon : AlertIcon(type)}
        </span>
        <div className='flex items-start justify-between gap-2'>
          <div className='content'>
            {title && (
              <h3 className='title m-0 mb-1 text-base font-semibold'>
                {title}
              </h3>
            )}
            {description && (
              <div className='description text-base font-normal'>
                {description}
              </div>
            )}
          </div>
          <div className='flex items-center gap-1.5'>
            <a
              href={link}
              className='text-xs'
            >
              View Details
            </a>
            <span
              className='text-xs'
              onClick={() => setOpenState(false)}
            >
              Dismiss
            </span>
          </div>
        </div>
        {children && <div>{children}</div>}
      </div>
    </div>
  );
};

export default Alert;
