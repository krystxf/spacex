import { Navbar } from './Navbar'
import React from 'react'
import { Footer } from './Footer'
import { motion } from 'framer-motion'
import { NextSeo } from 'next-seo';

export type LayoutProps = { pathname: string, title: string }

const Layout: React.FC<LayoutProps> = ({ pathname, children, title }) => {
  return (
    <motion.div
      className="bg-black min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
    >
      <NextSeo
        title={title}
        description="Spacex practice page with GraphQL API usage."
      />
      <Navbar pathname={pathname} />
      <div
        className="pt-12 bg-black"
        style={{ minHeight: 'calc(100vh - 64px)' }}
      >
        {children}
      </div>
      <Footer />
    </motion.div>
  )
}

export default Layout
