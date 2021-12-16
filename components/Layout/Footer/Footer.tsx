import React from 'react';
import FooterItem from './FooterItem';

const Footer: React.FC = () => {
  return (
    <div className="flex md:justify-center gap-8 md:gap-0 flex-col md:flex-row text-[12px] md:py-6 font-bold md:bg-black">
      <FooterItem link="https://www.instagram.com/spacex/" text="instagram" />

      <FooterItem link="https://twitter.com/spacex" text="twitter" />

      <FooterItem link="https://www.youtube.com/spacex" text="youtube" />

      <FooterItem
        link="https://www.linkedin.com/company/spacex/"
        text="linkedin"
      />
    </div>
  );
};

export default Footer;
