import React from 'react';

const PageHeading: React.FC<{ title: string }> = ({ title }) => {
  return (
    <div className="absolute left-1/2 -translate-x-1/2 top-[20%] z-10 text-6xl font-bold text-white">
      {title.toUpperCase()}
    </div>
  );
};

export default PageHeading;
