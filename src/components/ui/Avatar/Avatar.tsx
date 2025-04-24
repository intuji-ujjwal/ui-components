import { memo, useMemo } from 'react';

import { AvatarProps } from './types';
import { cn } from '../../../utils/cn';
import ImageComponent from '../Image/Image';
import { avatarVariants } from './helper/styles';

export const Avatar = memo(function Avatar({
  className,
  imageSrc,
  name,
  size = 'md',
  type,
  ...props
}: AvatarProps) {
  const initial = useMemo(
    () => (imageSrc ? undefined : name.charAt(0).toUpperCase()),
    [imageSrc, name],
  );

  return (
    <figure
      className={cn(avatarVariants({ size, type }), className)}
      data-cy={`avatar size:${size} - name:${name}`}
      {...props}
    >
      {imageSrc ? (
        <ImageComponent
          alt={name}
          src={imageSrc}
          data-cy={name}
          className='absolute left-0 top-0 h-full w-full object-cover'
        />
      ) : (
        <div className='bg-grey-100 absolute left-0 right-0 top-0 flex h-full items-center justify-center rounded-full object-cover'>
          <p className='text-xs font-semibold text-primary-500'>{initial}</p>
        </div>
      )}
    </figure>
  );
});
