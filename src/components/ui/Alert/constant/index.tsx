import { AlertType } from '../types';

export const mockData: {
  link?: string;
  title?: string;
  type: AlertType;
  description?: string;
  className?: string;
  children?: React.ReactNode;
} = {
  type: 'default',
  title: 'Test Title',
  className: 'test-class',
  link: 'https://example.com',
  description: 'Test Description',
  children: <div data-testid='test-child'>Child Content</div>,
};

export const AlertTypeClasses: Record<AlertType, string> = {
  success: 'bg-green-50 border-l-green-600',
  error: 'bg-warning-50 border-l-warning-600',
  info: 'bg-blue-50 border-l-blue-600',
  warning: 'bg-yellow-50 border-l-yellow-600',
  default: 'bg-gray-50 border-l-gray-600',
};
