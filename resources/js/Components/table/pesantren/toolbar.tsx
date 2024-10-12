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
                    placeholder="Cari Peasantren"
                    value={(data.getColumn('name')?.getFilterValue() as string) ?? ""}
                    onChange={(e) =>
                        data.getColumn('name')?.setFilterValue(e.target.value)
                    }
                    className="p-2 border w-40 border-slate-300 text-xs rounded-md focus:outline-none focus:ring-1 focus:ring-slate-500 focus:border-slate-500"
                />
                {data.getColumn('kecamatan') && (
                    <select
                        value={data.getColumn('kecamatan')?.getFilterValue() as string}
                        onChange={(e) =>
                            data.getColumn('kecamatan')?.setFilterValue(e.target.value)
                        }
                        className="p-2 border w-36 border-slate-300 text-xs rounded-md focus:outline-none focus:ring-1 focus:ring-slate-500 focus:border-slate-500"
                    >
                        <option value="">Semua Kecamatan</option>
                        <option value="lowokwaru">Lowokwaru</option>
                        <option value="blimbing">Blimbing</option>
                        <option value="kedungkandang">Kedungkandang</option>
                        <option value="klojen">Klojen</option>
                        <option value="sukun">Sukun</option>

                    </select>
                )}
                {data.getColumn('gender') && (
                    <select
                        value={data.getColumn('gender')?.getFilterValue() as string}
                        onChange={(e) =>
                            data.getColumn('gender')?.setFilterValue(e.target.value)
                        }
                        className="p-2 border w-32 border-slate-300 text-xs rounded-md focus:outline-none focus:ring-1 focus:ring-slate-500 focus:border-slate-500"
                    >
                        <option value="">Semua Gender</option>
                        <option value="putra">Putra</option>
                        <option value="putri">Putri</option>
                        <option value="putra_putri">Putra, Putri</option>
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
