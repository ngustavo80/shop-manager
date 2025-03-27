import { DayOrdersAmountCard } from './cards/day-orders-amount-card'
import { MonthCanceledOrdersAmountCard } from './cards/month-canceled-orders-amount'
import { MonthOrdersAmountCard } from './cards/month-orders-amount'
import { MonthReceiptCard } from './cards/month-receipt-card'
import { PopularProductsChart } from './charts/popular-products-chart'
import { ReceiptChart } from './charts/receipt-chart'

export function Dashboard() {
  return (
    <>
      <head>
        <title>Metrics | shop-manager</title>
        <link rel="icon" type="image/svg+xml" href="/store.svg" />
      </head>

      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Métricas</h1>

        <div className="grid grid-cols-4 gap-4">
          <MonthReceiptCard />
          <MonthOrdersAmountCard />
          <DayOrdersAmountCard />
          <MonthCanceledOrdersAmountCard />
        </div>

        <div className="grid grid-cols-9 gap-4">
          <ReceiptChart />
          <PopularProductsChart />
        </div>
      </div>
    </>
  )
}
