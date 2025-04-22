import React, { ReactNode } from 'react';
import { slugify } from '../utils/slugify';
interface PageProps {
  title?: string;
  children?: ReactNode;
}
const PageLayout: React.FC<PageProps> = ({ title, children }) => {
  return <div className={`p-6 ${title ? slugify(title) : ''}`}>{children}</div>;
};

export default PageLayout;
