import { Utensils } from 'lucide-react'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export function MonthOrdersAmountCard() {
  return (
    <Card>
      <CardHeader className="flex flex-row justify-between">
        <CardTitle className="text-base font-semibold">Pedidos (mês)</CardTitle>
        <Utensils size={16} className="text-muted-foreground" />
      </CardHeader>

      <CardContent className="flex flex-col gap-1">
        <span className="text-2xl font-bold tracking-tight">279</span>
        <p className="text-xs text-muted-foreground">
          <span className="text-emerald-500 dark:text-emerald-400">+6%</span> em
          relação ao mês anterior
        </p>
      </CardContent>
    </Card>
  )
}
