import { DollarSign } from 'lucide-react'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export function MonthReceiptCard() {
  return (
    <Card>
      <CardHeader className="flex flex-row justify-between">
        <CardTitle className="text-base font-semibold">
          Receita total (mês)
        </CardTitle>
        <DollarSign size={16} className="text-muted-foreground" />
      </CardHeader>

      <CardContent className="flex flex-col gap-1">
        <span className="text-2xl font-bold tracking-tight">R$ 1560,00</span>
        <p className="text-xs text-muted-foreground">
          <span className="text-emerald-500 dark:text-emerald-400">+2%</span> em
          relação ao mês anterior
        </p>
      </CardContent>
    </Card>
  )
}
