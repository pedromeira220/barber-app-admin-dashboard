import { cn } from '@/lib/utils'
import { ComponentProps } from 'react'
import { Button } from '../ui/button'
import { Home, Users } from 'lucide-react'

interface SidebarProps extends ComponentProps<'div'> {}

export function Sidebar({ className }: SidebarProps) {
  return (
    <div className={cn('pb-12', className)}>
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
            Painel administrativo
          </h2>
          <div className="flex flex-col gap-1">
            <Button variant="ghost" className="w-full justify-start">
              <Home size={24} className="mr-2 h-4 w-4" />
              Início
            </Button>
            <Button variant="secondary" className="w-full justify-start">
              <Users size={24} className="mr-2 h-4 w-4" />
              Barbearias
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
