import { cn } from '../../../utils/cn';

// TypeScript type for the props
type ImageComponentProps = {
  src?: string;
  classes?: string;
  alt?: string;
  width?: number;
  height?: number;
};
const ImageComponent = ({
  src,
  classes,
  alt,
  width,
  height,
}: ImageComponentProps) => {
  const defaultClass = `max-w-full transition duration-150 ease-out`;
  const widthOfImg = width ? width : '';
  const heightOfImg = height ? height : '';
  return (
    <img
      src={src ? src : '../src/assets/images/placeholder-image.png'}
      alt={alt ? alt : 'image'}
      className={cn(defaultClass, classes)}
      style={{
        width: widthOfImg,
        height: heightOfImg,
      }}
    />
  );
};
export default ImageComponent;
