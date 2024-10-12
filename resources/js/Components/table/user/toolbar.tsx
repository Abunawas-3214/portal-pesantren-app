import { Table } from '@tanstack/react-table'

interface TollbarProps<TData> {
    data: Table<TData>
}
export default function Toolbar(
    { data }: TollbarProps<any>
) {
    return (
        <div className='flex items-center justify-between'>
            <div className="flex flex-1 items-center space-x-2">
                <input
                    type="text"
                    placeholder="Cari User"
                    value={(data.getColumn('name')?.getFilterValue() as string) ?? ""}
                    onChange={(e) =>
                        data.getColumn('name')?.setFilterValue(e.target.value)
                    }
                    className="p-2 border w-40 border-slate-300 text-xs rounded-md focus:outline-none focus:ring-1 focus:ring-slate-500 focus:border-slate-500"
                />
                {data.getColumn('status') && (
                    <select
                        value={data.getColumn('status')?.getFilterValue() as string}
                        onChange={(e) =>
                            data.getColumn('status')?.setFilterValue(e.target.value)
                        }
                        className="p-2 border w-36 border-slate-300 text-xs rounded-md focus:outline-none focus:ring-1 focus:ring-slate-500 focus:border-slate-500"
                    >
                        <option value="">Semua Status</option>
                        <option value="active">Aktif</option>
                        <option value="inactive">Tidak Aktif</option>
                    </select>
                )}
            </div>
            <div className="flex gap-2">
                <p>Jumlah Data: </p>
                <p>{data.getFilteredRowModel().rows.length}</p>
            </div>
        </div>
    )
}
