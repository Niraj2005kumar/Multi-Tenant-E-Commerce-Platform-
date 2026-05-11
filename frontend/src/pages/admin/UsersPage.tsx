import { useState } from 'react';
import { users } from '../../data/mockData';
import UserTable from '../../components/admin/UserTable';
import SearchBar from '../../components/common/SearchBar';
import Pagination from '../../components/common/Pagination';

function UsersPage() {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(query.toLowerCase()) ||
      user.email.toLowerCase().includes(query.toLowerCase()),
  );

  const itemsPerPage = 10;
  const pages = Math.ceil(filteredUsers.length / itemsPerPage);
  const paginatedUsers = filteredUsers.slice((page - 1) * itemsPerPage, page * itemsPerPage);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-semibold text-white">Users</h1>
        <p className="mt-2 text-slate-400">{filteredUsers.length} total users</p>
      </div>

      <SearchBar value={query} onChange={setQuery} />

      <UserTable users={paginatedUsers} />

      <div className="flex justify-center">
        <Pagination page={page} pages={pages} onChange={setPage} />
      </div>
    </div>
  );
}

export default UsersPage;
