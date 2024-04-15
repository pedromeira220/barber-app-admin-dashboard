import { Logo } from '@/components/Logo'
import { NavItem } from '@/components/NavItem'
import { Home, Users } from 'lucide-react'
import React from 'react'

export default function Barbearias() {
  return (
    <div className="grid grid-cols-[17.5rem,_1fr] min-h-screen">
      {/* Essa aqui é a div do menu lateral */}
      <div className="px-4 py-8 border-r border-border-secondary h-full flex flex-col gap-8">
        <div className="px-2">
          <Logo />
        </div>

        <div className="flex flex-col gap-1">
          <NavItem
            text="Home"
            icon={<Home className="text-text-secondary-700" size={24} />}
          />
          <NavItem
            text="Barbearias"
            isCurrent
            icon={<Users className="text-text-primary-900" size={24} />}
          />
        </div>
      </div>
      {/* Essa aqui é a div do menu lateral -- final */}

      <div>
        <p>Conteúdo</p>
      </div>
    </div>
  )
}
