import PageHeading from '@components/UI/PageHeading';
import React from 'react';

const BoosterScreen: React.FC<{ title: string }> = ({ children, title }) => {
  return (
    <>
      <div
        className="bg-black min-h-screen"
        style={{
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundImage: 'url("/starman.webp")',
        }}
      >
        <div className="w-full h-full md:bg-[#0000008e] bg-[#000000b6]">
          <div className="max-w-4xl m-auto px-8 w-full min-h-screen pt-[10vh]">
            <div className="text-6xl font-bold text-white pb-12">
              {title.toUpperCase()}
            </div>
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

export default BoosterScreen;
