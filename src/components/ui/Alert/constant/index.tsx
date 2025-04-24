import { AlertType } from '../Alert';

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
