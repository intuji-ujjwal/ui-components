import React, { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Pagination, { PaginationProps } from '../Pagination';

const meta: Meta<typeof Pagination> = {
  title: 'components/Pagination',
  component: Pagination,
  tags: ['autodocs'],
};

export default meta;

const PaginationStory: React.FC<PaginationProps> = (args) => {
  const [currentPage, setCurrentPage] = useState(args.currentPage);
  const [showCount, setShowCount] = useState(args.showCount);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, args.totalPages));
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleShowCountChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setShowCount(parseInt(e.target.value));
  };

  return (
    <Pagination
      {...args}
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
      handleNextPage={handleNextPage}
      handlePreviousPage={handlePreviousPage}
      handleShowCountChange={handleShowCountChange}
      showCount={showCount}
    />
  );
};

export const Primary: StoryObj<PaginationProps> = {
  args: {
    totalPages: 10,
    totalItems: 250,
    currentPage: 1,
    showCount: 25,
  },
  render: (args) => <PaginationStory {...args} />,
};
