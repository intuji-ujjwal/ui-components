import React from 'react';
import { cn } from '../../../lib/utils';
import useMediaQuery from '../../../hooks/useMediaQuery';

export interface AvatarProps {
  classes?: string;
  avatar: {
    id: React.Key | null | undefined;
    imageSrc: string | undefined;
    name: string | undefined;
  }[];
  size?: number;
  borderWidth?: number;
}

const Avatar: React.FC<AvatarProps> = ({
  classes,
  avatar,
  size,
  borderWidth,
}: AvatarProps) => {
  const isBigScreen = useMediaQuery('(min-width: 1200px)');
  const isDesktopOrLaptop = useMediaQuery('(min-width: 991px)');
  const isTablet = useMediaQuery('(min-width: 768px)');
  const isMobile = useMediaQuery('(min-width: 300px)');

  if (!avatar || avatar.length < 1) return null;

  let maxAvatarsToShow = 2;
  if (isBigScreen) {
    maxAvatarsToShow = 5;
  } else if (isDesktopOrLaptop) {
    maxAvatarsToShow = 4;
  } else if (isTablet) {
    maxAvatarsToShow = 3;
  } else if (isMobile) {
    maxAvatarsToShow = 2;
  }

  const avatarsToShow = avatar.slice(0, maxAvatarsToShow);
  const remainingCount = avatar.length - maxAvatarsToShow;

  const defaultclass = `rounded-full border border-gray-500 overflow-hidden block first:ml-0 -ml-2 before:content-[''] before:block before:pt-[100%] before:bg-white relative`;

  return (
    <div className='avatar'>
      {avatar && (
        <div className='avatar-wrap flex items-center'>
          {avatarsToShow.map((item) => (
            <figure
              className={cn(defaultclass, classes)}
              key={item?.id}
              style={{
                width: size ? size + 'px' : '70px',
                borderWidth: borderWidth ? borderWidth + 'px' : '4px',
              }}
            >
              <img
                src={item?.imageSrc}
                alt={item?.name}
                className='absolute left-0 top-0 h-full w-full object-cover'
              />
            </figure>
          ))}
          {remainingCount > 0 && (
            <span className='ml-2 text-sm'>+{remainingCount} more</span>
          )}
        </div>
      )}
    </div>
  );
};

export default Avatar;
