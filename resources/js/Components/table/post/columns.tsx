import { Post } from "@/types/post";
import { Link, router } from "@inertiajs/react";
import { ColumnDef } from "@tanstack/react-table";
import { Pencil, Trash } from "lucide-react";

function deletePost(id: number) {
    if (confirm("Are you sure you want to delete this post?")) {
        router.delete(route("post.destroy", id), {
            preserveScroll: true
        });
    }
}

export const columns: ColumnDef<Post>[] = [
    {
        accessorFn: (_, index) => index + 1,
        header: "No.",
    },
    {
        accessorKey: "title",
        header: "Title",
        cell: ({ row }) => {
            return <div className="capitalize">{row.original.title}</div>
        }
    },
    {
        accessorKey: "user_id",
        header: "Author",
        cell: ({ row }) => {
            return (
                <div className="capitalize">{row.original.user.name}</div>
            )
        }
    },
    {
        accessorKey: "status",
        header: "Status",
        cell: ({ row }) => {
            return (
                <div className="capitalize">{row.original.status}</div>
            )
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
                        href={route("post.edit", { id })}
                        className="inline-flex items-center justify-center p-2 text-sm font-medium text-white bg-yellow-400 border border-transparent rounded-md shadow-sm hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:ring-offset-2 sm:w-auto"
                    >
                        <Pencil className="w-4 h-4" />
                    </Link>
                    <button
                        onClick={() => deletePost(id)}
                        className="inline-flex items-center justify-center p-2 text-sm font-medium text-white bg-red-600 border border-transparent rounded-md shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:w-auto"
                    >
                        <Trash className="w-4 h-4" />
                    </button>
                </div>
            );
        },
    }
];