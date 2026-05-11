import type { ReactNode } from 'react';

interface Column<T> {
  title: string;
  render: (item: T) => ReactNode;
  className?: string;
}

function Table<T>({ columns, data }: { columns: Column<T>[]; data: T[] }) {
  return (
    <div className="overflow-hidden rounded-[28px] border border-white/10 bg-slate-900/90 shadow-lg shadow-slate-950/20">
      <table className="min-w-full divide-y divide-white/10 text-left text-sm text-slate-200">
        <thead className="bg-slate-950/90 text-slate-400">
          <tr>
            {columns.map((column) => (
              <th key={column.title} className={`px-6 py-4 font-medium ${column.className ?? ''}`}>
                {column.title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-white/10">
          {data.map((item, itemIndex) => (
            <tr key={itemIndex} className="hover:bg-white/5">
              {columns.map((column) => (
                <td key={column.title} className="px-6 py-4 align-top">
                  {column.render(item)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
