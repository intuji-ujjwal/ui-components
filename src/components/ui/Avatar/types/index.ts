import { VariantProps } from 'class-variance-authority';
import { avatarVariants } from '../helper/styles';

export type AvatarSize = NonNullable<
  VariantProps<typeof avatarVariants>['size']
>;

export interface AvatarProps extends React.HTMLAttributes<HTMLElement> {
  name: string;
  imageSrc?: string | null;
  size?: AvatarSize;
  className?: string;
  type?: 'single' | 'group';
}
