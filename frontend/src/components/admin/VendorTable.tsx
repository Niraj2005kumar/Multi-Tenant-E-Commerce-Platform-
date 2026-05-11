import type { Vendor } from '../../types';
import Table from '../common/Table';
import Badge from '../common/Badge';

function VendorTable({ vendors }: { vendors: Vendor[] }) {
  const columns = [
    { title: 'Vendor', render: (item: Vendor) => item.name },
    { title: 'Company', render: (item: Vendor) => item.company },
    {
      title: 'Status', render: (item: Vendor) => {
        const variant = item.status === 'Active' ? 'success' : item.status === 'Suspended' ? 'rose' : 'muted';
        return <Badge label={item.status} variant={variant} />;
      },
    },
  ];
  return <Table columns={columns} data={vendors} />;
}

export default VendorTable;
