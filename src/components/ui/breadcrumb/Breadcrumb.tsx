import { cn } from '../../../utils/cn';
import { BreadcrumbsProp } from './types';
import { slugify } from '../../../utils/helper/slugify.helper';

const Breadcrumbs = ({
  title,
  path,
  children,
  previcon,
  onClick,
  className,
  ...props
}: BreadcrumbsProp) => {
  return (
    <div
      className={cn(
        'breadcrumb bg-danger-0 flex items-center gap-5 px-6 py-4',
        `breadcrumb-${title ? slugify(title as string) : 'default'}`,
        className,
      )}
      {...props}
    >
      {previcon && (
        <div
          className='icon inline-flex h-[36px] w-[36px] cursor-pointer items-center justify-center rounded border border-neutral-200'
          onClick={onClick}
        >
          {previcon}
        </div>
      )}
      <div
        className={`inline-flex flex-wrap items-center justify-between ${
          previcon ? 'w-[calc(100%_-_50px)]' : 'w-full'
        }`}
      >
        <div className='title-wrap'>
          {title && (
            <h1 className='text-2xl font-semibold text-neutral-500'>{title}</h1>
          )}

          {path && (
            <ul className='breadcrumb flex list-none items-center gap-1'>
              {path
                .filter((path) => path?.label !== '')
                .map((segment) => (
                  <>
                    {segment.label === '' ? undefined : (
                      <li
                        key={segment?.id}
                        className="breadcrumb-item inline-flex text-sm font-normal after:ml-1 after:block after:text-gray-500 after:content-['/'] last:after:content-none"
                      >
                        {(() => {
                          switch (true) {
                            case segment?.id !== path.length - 1:
                              return (
                                <a
                                  href={segment?.link ?? '/'}
                                  className='text-gray-500'
                                >
                                  {segment?.label}
                                </a>
                              );
                            default:
                              return (
                                <span className='text-gray-800'>
                                  {segment?.label}
                                </span>
                              );
                          }
                        })()}
                      </li>
                    )}
                  </>
                ))}
            </ul>
          )}
        </div>
        {children && (
          <div className='other-accessories ml-auto flex flex-wrap gap-4'>
            {children}
          </div>
        )}
      </div>
    </div>
  );
};

export default Breadcrumbs;
