import React from 'react';

const BoosterScreen: React.FC = ({ children }) => {
  return (
    <div
      className="bg-black min-h-screen"
      style={{
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundImage:
          'url("https://www.spacex.com/static/images/falcon-9/desktop/MerlinVac.webp")',
      }}
    >
      <div className="w-full h-full md:bg-[#0000008e] bg-[#000000b6]">
        <div className="max-w-7xl m-auto px-8 xl:px-4 w-full grid grid-cols-1 md:grid-cols-2 pt-20 min-h-screen gap-4 items-center">
          {children}
        </div>
      </div>
    </div>
  );
};

export default BoosterScreen;
