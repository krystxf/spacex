import React from 'react';

export type LaunchTableRowProps = { title: string; value: string };

const LaunchTableRow: React.FC<LaunchTableRowProps> = ({ title, value }) => {
  return (
    <div className="flex justify-between items-center py-3 text-xs font-bold">
      <span>{title.toUpperCase()}</span>
      <span>{value}</span>
    </div>
  );
};

export default LaunchTableRow;
