import { Building, ChevronDown, LogOut } from 'lucide-react'

import { Button } from './ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/dropdown-menu'
import { useQuery } from '@tanstack/react-query'
import { GetProfile } from '@/api/get-profile'
import { GetManagedRestaurant } from '@/api/get-managed-restaurant'
import { spawn } from 'child_process'
import { Skeleton } from './ui/skeleton'

export function AccountMenu() {
  const {data: profile, isLoading: isLoadingProfile} = useQuery({
    queryKey: ['profile'],
    queryFn: GetProfile
  })

  const {data: restaurant, isLoading: isLoadingRestaurant} = useQuery({
    queryKey: ['managed-restaurant'],
    queryFn: GetManagedRestaurant
  })

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="flex items-center gap-2 select-none"
        >
          {isLoadingRestaurant? <Skeleton className='w-40 h-4' /> : restaurant?.name}
          <ChevronDown size={16} />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="w-56 border border-border">
        <DropdownMenuLabel className="flex gap-2 flex-col">
          {isLoadingProfile ? 
          <>
            <Skeleton className='w-40 h-4' />
            <Skeleton className='w-32 h-3' />
          </> 
          : 
          <>
            <span>{profile?.name}</span>
            <span className="text-sx text-muted-foreground">
              {profile?.email}
            </span>
          </>}
        </DropdownMenuLabel>

        <DropdownMenuSeparator />

        <DropdownMenuItem>
          <Building size={16} className="mr-2" />
          <span>Perfil da Loja</span>
        </DropdownMenuItem>

        <DropdownMenuItem className="text-rose-500 dark:text-rose-400">
          <LogOut size={16} className="mr-2 text-rose-500 dark:text-rose-400" />
          <span>Sair</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
