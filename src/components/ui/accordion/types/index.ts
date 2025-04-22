import { ReactNode } from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export interface AccordionItemProps {
  title: string;
  children: ReactNode;
}

export interface AccordionProps {
  items: AccordionItemProps[];
  allowMultiple?: boolean;
  UpIcon?: React.ComponentType<IconProps>;
  DownIcon?: React.ComponentType<IconProps>;
}

export interface AccordionItemInternalProps extends AccordionItemProps {
  open: boolean;
  onToggle: (index: number) => void;
  index: number;
  UpIcon?: React.ComponentType<IconProps>;
  DownIcon?: React.ComponentType<IconProps>;
  focusClassName?: string;
  theme?: 'default' | 'gray' | 'disabled';
}

export interface UseAccordionStateResult {
  openItems: number[];
  handleToggle: (index: number) => void;
}
