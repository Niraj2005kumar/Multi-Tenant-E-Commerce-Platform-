import { useState } from 'react';
import { orders } from '../../data/mockData';
import OrdersTable from '../../components/vendor/OrdersTable';
import Pagination from '../../components/common/Pagination';

function VendorOrdersPage() {
  const [page, setPage] = useState(1);
  const itemsPerPage = 5;
  const pages = Math.ceil(orders.length / itemsPerPage);
  const paginatedOrders = orders.slice((page - 1) * itemsPerPage, page * itemsPerPage);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-semibold text-white">Orders</h1>
        <p className="mt-2 text-slate-400">{orders.length} total orders</p>
      </div>

      <OrdersTable orders={paginatedOrders} />

      <div className="flex justify-center">
        <Pagination page={page} pages={pages} onChange={setPage} />
      </div>
    </div>
  );
}

export default VendorOrdersPage;
