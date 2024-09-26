import { Category } from "@/types/category";
import { Link, router } from "@inertiajs/react";
import { ColumnDef } from "@tanstack/react-table";
import { Pencil, Trash } from "lucide-react";

function deleteCategory(id: number) {
    if (confirm("Are you sure you want to delete this category?")) {
        router.delete(route("category.destroy", id), {
            preserveScroll: true
        });
    }
}

export const columns: ColumnDef<Category>[] = [
    {
        accessorKey: "id",
        header: "ID",
    },
    {
        accessorKey: "name",
        header: "Name",
        cell: ({ row }) => {
            return <div className="capitalize">{row.original.name}</div>
        }
    },
    {
        accessorKey: "action",
        header: "Action",
        cell: ({ row }) => {
            const id = row.original.id;
            return (
                <div className="flex items-center justify-center gap-2">
                    <Link
                        href={route("category.edit", { id })}
                        className="inline-flex items-center justify-center p-2 text-sm font-medium text-white bg-yellow-400 border border-transparent rounded-md shadow-sm hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:ring-offset-2 sm:w-auto"
                    >
                        <Pencil className="w-4 h-4" />
                    </Link>
                    <button
                        onClick={() => deleteCategory(id)}
                        className="inline-flex items-center justify-center p-2 text-sm font-medium text-white bg-red-600 border border-transparent rounded-md shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:w-auto"
                    >
                        <Trash className="w-4 h-4" />
                    </button>
                </div>
            );
        },
    }
];