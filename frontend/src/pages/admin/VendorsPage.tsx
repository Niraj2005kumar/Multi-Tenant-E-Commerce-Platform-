import { useState } from 'react';
import { vendors } from '../../data/mockData';
import VendorTable from '../../components/admin/VendorTable';
import SearchBar from '../../components/common/SearchBar';
import Pagination from '../../components/common/Pagination';

function VendorsPage() {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);

  const filteredVendors = vendors.filter(
    (vendor) =>
      vendor.name.toLowerCase().includes(query.toLowerCase()) ||
      vendor.company.toLowerCase().includes(query.toLowerCase()),
  );

  const itemsPerPage = 10;
  const pages = Math.ceil(filteredVendors.length / itemsPerPage);
  const paginatedVendors = filteredVendors.slice((page - 1) * itemsPerPage, page * itemsPerPage);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-semibold text-white">Vendors</h1>
        <p className="mt-2 text-slate-400">{filteredVendors.length} total vendors</p>
      </div>

      <SearchBar value={query} onChange={setQuery} />

      <VendorTable vendors={paginatedVendors} />

      <div className="flex justify-center">
        <Pagination page={page} pages={pages} onChange={setPage} />
      </div>
    </div>
  );
}

export default VendorsPage;
