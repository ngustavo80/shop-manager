import { Home, Store, UtensilsCrossed } from 'lucide-react'

import { NavLink } from './nav-link'
import { Separator } from './ui/separator'

export function Header() {
  return (
    <div className="border-b border-muted">
      <div className="flex h-16 items-center gap-6 px-6">
        <Store size={24} />

        <Separator orientation="vertical" className="h-6" />

        <nav className="flex items-center space-x-4 lg:space-x-6">
          <NavLink to="/">
            <Home size={20} />
            Início
          </NavLink>

          <NavLink to="/orders">
            <UtensilsCrossed size={20} />
            Pedidos
          </NavLink>
        </nav>
      </div>
    </div>
  )
}
