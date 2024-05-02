import {
  useReactTable,
  TableOptions,
  RowData,
  getCoreRowModel,
  flexRender,
} from '@tanstack/react-table';

interface TableProps<T extends RowData>
  extends Pick<TableOptions<T>, 'columns' | 'data'> {}

export type TableColumns<T extends RowData> = TableProps<T>['columns'];

export function Table<T extends RowData>({ data, columns }: TableProps<T>) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });
  const { rows } = table.getRowModel();

  return (
    <div className="shadow-sm border rounded-lg overflow-x-auto">
      <table className={'w-full table-auto text-sm text-left'}>
        <thead className="bg-gray-50 text-gray-600 font-medium border-b">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th className="py-3 px-6" key={header.id}>
                  {header.isPlaceholder ? null : (
                    <div>
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext(),
                      )}
                    </div>
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody className="text-gray-600 divide-y">
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((visibleCells) => (
                <td
                  key={visibleCells.id}
                  className="px-6 py-4 whitespace-nowrap"
                >
                  {flexRender(
                    visibleCells.column.columnDef.cell,
                    visibleCells.getContext(),
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
