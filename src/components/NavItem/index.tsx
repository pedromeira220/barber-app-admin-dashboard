import { text } from '@/styles/tailwind-variants/Text'
import React, { ReactNode } from 'react'

interface NavItemProps {
  text: string
  isCurrent?: boolean
  icon: ReactNode
}

export const NavItem: React.FC<NavItemProps> = ({
  text: titleText,
  isCurrent = false,
  icon,
}) => {
  return (
    <div
      className="py-2 px-3 rounded-md data-[is-current=true]:bg-background-active cursor-pointer hover:bg-background-active"
      data-is-current={isCurrent}
    >
      <div className="flex gap-3 items-center">
        {icon}
        <span
          className={text({
            weight: 'semibold',
            className:
              'text-text-secondary-700 data-[is-current=true]:text-text-primary-900',
          })}
          data-is-current={isCurrent}
        >
          {titleText}
        </span>
      </div>
    </div>
  )
}
