import React from 'react'
import FooterItem from './FooterItem'

const Footer: React.FC = () => {
  return (
    <div className="flex flex-col pl-4 md:pl-0 md:flex-row justify-center gap-8 text-[12px] py-6 font-bold bg-black">
      <FooterItem link="https://www.instagram.com/spacex/" text="instagram" />

      <FooterItem link="https://twitter.com/spacex" text="twitter" />

      <FooterItem link="https://www.youtube.com/spacex" text="youtube" />

      <FooterItem
        link="https://www.linkedin.com/company/spacex/"
        text="linkedin"
      />
    </div>
  )
}

export default Footer
