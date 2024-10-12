import { Table } from "@tanstack/react-table"
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from "lucide-react"
interface PaginationProps<TData> {
    data: Table<TData>
}
export default function Pagination<TData>(
    { data }: PaginationProps<TData>
) {
    return (
        <div className="flex items-center justify-end space-x-8">
            <div className="flex space-x-2 items-center justify-center">
                <p>Show per pages</p>
                <select
                    value={data.getState().pagination.pageSize}
                    onChange={e => {
                        data.setPageSize(Number(e.target.value))
                    }}
                    className="h-10 w-16 rounded-md border border-slate-200 bg-background px-2 py-1 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                >
                    {[10, 20, 30, 40, 50].map(pageSize => (
                        <option key={pageSize} value={pageSize}>
                            {pageSize}
                        </option>
                    ))}
                </select>
            </div>

            <span className="flex items-center gap-1">
                <div>Page</div>
                <strong>
                    {data.getState().pagination.pageIndex + 1} of{' '}
                    {data.getPageCount()}
                </strong>
            </span>

            <div className="flex space-x-1">
                <button
                    className="border rounded h-8 w-8 flex items-center justify-center hover:bg-gray-100 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                    onClick={() => data.setPageIndex(0)}
                    disabled={!data.getCanPreviousPage()}
                >
                    <ChevronsLeft className="h-4 w-4" />
                </button>
                <button
                    className="border rounded h-8 w-8 flex items-center justify-center hover:bg-gray-100 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                    onClick={() => data.previousPage()}
                    disabled={!data.getCanPreviousPage()}
                >
                    <ChevronLeft className="h-4 w-4" />
                </button>

                <button
                    className="border rounded h-8 w-8 flex items-center justify-center hover:bg-gray-100 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                    onClick={() => data.nextPage()}
                    disabled={!data.getCanNextPage()}
                >
                    <ChevronRight className="h-4 w-4" />
                </button>
                <button
                    className="border rounded h-8 w-8 flex items-center justify-center hover:bg-gray-100 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                    onClick={() => data.setPageIndex(data.getPageCount() - 1)}
                    disabled={!data.getCanNextPage()}
                >
                    <ChevronsRight className="h-4 w-4" />
                </button>
            </div>
        </div>
    )
}
