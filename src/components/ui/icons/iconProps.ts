const sizeMap = {
  'xs': 12,
  'sm': 16,
  'md': 20,
  'base': 24,
  'lg': 32,
  'xl': 36,
  '2xl': 48,
  '3xl': 56,
  '4xl': 64,
};

export type sizeType = keyof typeof sizeMap;

export function getIconSize(size?: sizeType): number {
  return size ? sizeMap[size] : 14;
}

export interface IconProps {
  fill?: string;
  size?: number;
}
