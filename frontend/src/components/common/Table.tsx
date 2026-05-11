interface TableProps {
  headers: string[];
  rows: Array<string[]>;
}

function Table({ headers, rows }: TableProps) {
  return (
    <div className="overflow-hidden rounded-[28px] border border-slate-800/70 bg-slate-950/90 shadow-2xl shadow-slate-950/25">
      <table className="min-w-full border-collapse text-left text-sm text-slate-300">
        <thead className="bg-slate-900/90 text-slate-400">
          <tr>
            {headers.map((header) => (
              <th key={header} className="px-6 py-4 font-medium">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index} className="border-t border-slate-800/70 hover:bg-slate-900/80">
              {row.map((cell, cellIndex) => (
                <td key={cellIndex} className="px-6 py-4">
                  {cell}
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
