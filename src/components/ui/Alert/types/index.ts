export type AlertType = 'success' | 'error' | 'info' | 'warning' | 'default';

export interface AlertProps {
  type: AlertType;
  title?: string;
  description?: string;
  children?: React.ReactNode;
  link?: string;
  openState: boolean;
  className?: string;
  alertIcon?: React.ReactNode;
  setOpenState: React.Dispatch<React.SetStateAction<boolean>>;
}
