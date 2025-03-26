import { Line, LineChart, ResponsiveContainer, XAxis, YAxis } from 'recharts'
import colors from 'tailwindcss/colors'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { priceFormatter } from '@/lib/priceFormatter'

const data = [
  { date: '30/01', revenue: 1300 },
  { date: '12/03', revenue: 500 },
  { date: '07/04', revenue: 900 },
  { date: '09/06', revenue: 1900 },
  { date: '19/08', revenue: 900 },
  { date: '23/11', revenue: 2000 },
  { date: '18/12', revenue: 850 },
]

export function ReceiptChart() {
  return (
    <Card className="col-span-6">
      <CardHeader className="flex-row items-center justify-between pb-8">
        <div className="space-y-1">
          <CardTitle className="text-base font-medium">
            Receita no período
          </CardTitle>
          <CardDescription>Receita diária no período</CardDescription>
        </div>
      </CardHeader>

      <CardContent>
        <ResponsiveContainer width="100%" height={240}>
          <LineChart data={data} style={{ fontSize: 12 }}>
            <XAxis
              dataKey="date"
              stroke="#888"
              axisLine={false}
              tickLine={false}
              dy={16}
            />

            <YAxis
              stroke="#888"
              axisLine={false}
              tickLine={false}
              width={80}
              tickFormatter={(value: number) => priceFormatter(value)}
            />

            <Line
              type="linear"
              strokeWidth={2}
              dataKey="revenue"
              stroke={colors.violet['400']}
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
