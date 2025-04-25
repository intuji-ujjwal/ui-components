import { ComponentProps, JSX, ReactNode } from 'react';

export type BreadcrumbsProp = ComponentProps<'div'> & {
  children?: ReactNode;
  onClick?: () => void;
  title: string | ReactNode;
  previcon?: JSX.Element;
  path?: { id: number; link: string; label: string }[];
};
