import { Utensils } from 'lucide-react'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export function DayOrdersAmountCard() {
  return (
    <Card>
      <CardHeader className="flex flex-row justify-between">
        <CardTitle className="text-base font-semibold">Pedidos (dia)</CardTitle>
        <Utensils size={16} className="text-muted-foreground" />
      </CardHeader>

      <CardContent className="flex flex-col gap-1">
        <span className="text-2xl font-bold tracking-tight">89</span>
        <p className="text-xs text-muted-foreground">
          <span className="text-rose-500 dark:text-rose-400">-1%</span> em
          relação ao dia anterior
        </p>
      </CardContent>
    </Card>
  )
}
