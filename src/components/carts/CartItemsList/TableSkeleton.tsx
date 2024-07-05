import React from "react";

const TableLoader: React.FC<{ returnOrder: boolean }> = ({ returnOrder }) => {
  return (
    <div className="animate-pulse">
      <div className="h-8 bg-gray-200 rounded w-full mb-4"></div>
      <div className="space-y-2">
        {[1, 2, 3].map((i) => (
          <div key={i} className="flex space-x-4">
            <div className="h-6 bg-gray-200 rounded w-1/5"></div>
            {returnOrder ? (
              <>
                <div className="h-6 bg-gray-200 rounded w-1/5"></div>
                <div className="h-6 bg-gray-200 rounded w-1/5"></div>
                <div className="h-6 bg-gray-200 rounded w-1/5"></div>
                <div className="h-6 bg-gray-200 rounded w-1/5"></div>
              </>
            ) : (
              <>
                <div className="h-6 bg-gray-200 rounded w-1/5"></div>
                <div className="h-6 bg-gray-200 rounded w-1/5"></div>
                <div className="h-6 bg-gray-200 rounded w-2/5"></div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TableLoader;
