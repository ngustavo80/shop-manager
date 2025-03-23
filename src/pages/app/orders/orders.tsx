import { SuperSEO } from 'react-super-seo'

import { Pagination } from '@/components/pagination'
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

import { OrdersTableFilters } from './orders-table-filters'
import { OrdersTableRow } from './orders-table-row'

export function Orders() {
  return (
    <>
      <SuperSEO title="orders | shop-manager" />
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Pedidos</h1>
      </div>

      <div className="space-y-2.5">
        <OrdersTableFilters />

        <div className="rounded-md border border-border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[64px]"></TableHead>
                <TableHead className="w-[140px]">Identificador</TableHead>
                <TableHead className="w-[180px]">Realizado há</TableHead>
                <TableHead className="w-[140px]">Status</TableHead>
                <TableHead>Cliente</TableHead>
                <TableHead className="w-[140px]">Total do pedido</TableHead>
                <TableHead className="w-[164px]"></TableHead>
                <TableHead className="w-[132px]"></TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {Array.from({ length: 15 }).map((_, i) => {
                return <OrdersTableRow key={i} />
              })}
            </TableBody>
          </Table>
        </div>
        <Pagination perPage={15} totalCount={80} pageIndex={0} />
      </div>
    </>
  )
}
