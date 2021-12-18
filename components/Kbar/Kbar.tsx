import {
  KBarAnimator,
  KBarPortal,
  KBarPositioner,
  KBarProvider,
  KBarSearch
} from 'kbar'
import { useRouter } from 'next/router'
import React from 'react'
import Actions from './Actions'
import RenderResults from './RenderResults'

const Kbar: React.FC = ({ children }) => {
  const router = useRouter()

  return (
    <KBarProvider actions={Actions(router)}>
      <KBarPortal>
        <KBarPositioner className="absolute z-50">
          <KBarAnimator className="max-w-[600px] w-full rounded-[8px] overflow-hidden shadow-xl bg-[#ffffff86] text-black backdrop-blur-sm backdrop-filter">
            <KBarSearch className="px-[16px] py-[12px] text-[16px] w-full outline-none font-bold text-lg" />
            <RenderResults />
          </KBarAnimator>
        </KBarPositioner>
      </KBarPortal>
      {children}
    </KBarProvider>
  )
}

export default Kbar
