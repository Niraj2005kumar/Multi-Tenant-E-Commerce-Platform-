import type { User } from '../../types';
import Table from '../common/Table';
import Badge from '../common/Badge';

function UserTable({ users }: { users: User[] }) {
  const columns = [
    { title: 'Name', render: (user: User) => user.name },
    { title: 'Email', render: (user: User) => user.email },
    {
      title: 'Role', render: (user: User) => {
        const variant = user.role === 'admin' ? 'success' : user.role === 'vendor' ? 'rose' : 'primary';
        return <Badge label={user.role} variant={variant} />;
      },
    },
  ];
  return <Table columns={columns} data={users} />;
}

export default UserTable;
