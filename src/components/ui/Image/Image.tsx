import { cn } from '../../../utils/cn';

type ImageComponentProps = {
  src?: string;
  alt?: string;
  className?: string;
};

const ImageComponent = ({ src, className, alt }: ImageComponentProps) => {
  return (
    <img
      alt={alt ? alt : 'image'}
      className={cn('!h-full !w-full object-cover', className)}
      src={src ? src : '../src/assets/images/placeholder-image.png'}
    />
  );
};
export default ImageComponent;
