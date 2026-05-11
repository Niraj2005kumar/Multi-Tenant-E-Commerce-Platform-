import type { Order } from '../../types';
import Badge from '../common/Badge';
import Table from '../common/Table';

function OrdersTable({ orders }: { orders: Order[] }) {
  const columns = [
    { title: 'Order', render: (item: Order) => item.id },
    { title: 'Customer', render: (item: Order) => item.customer },
    { title: 'Total', render: (item: Order) => item.total },
    {
      title: 'Status', render: (item: Order) => {
        const variant = item.status === 'Delivered' ? 'success' : item.status === 'Cancelled' ? 'rose' : 'primary';
        return <Badge label={item.status} variant={variant} />;
      },
    },
    { title: 'Date', render: (item: Order) => item.date },
  ];

  return <Table columns={columns} data={orders} />;
}

export default OrdersTable;
