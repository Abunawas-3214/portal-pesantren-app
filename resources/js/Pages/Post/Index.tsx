import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, usePage } from '@inertiajs/react';
import { PageProps, PermissionsHandler } from '@/types';
import TablePost from '@/Components/table/post/table-post';
import { columns } from '@/Components/table/post/columns';
import { Post } from '@/types/post';


export default function Index({ auth, posts }: PageProps & { posts: Post[] }) {
    const page: { props: { can: PermissionsHandler } } = usePage();
    const userPermissions = page.props.can
    const postsWithUserPermissions = posts.map((post) => ({
        ...post,
        userPermissions
    }));
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="text-xl font-semibold leading-tight text-gray-800">Post</h2>}
        >
            <Head title="Post" />

            <div className="sm:flex sm:items-center">
                <div className="space-y-1 sm:flex-auto">
                    <h1 className="text-xl font-semibold text-gray-900">
                        Post List
                    </h1>
                    <p className="text-sm text-gray-700">
                        A list of all Post.
                    </p>
                </div>
                <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
                    <Link
                        href={route("post.create")}
                        className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
                    >
                        Add Post
                    </Link>
                </div>
            </div>
            <TablePost columns={columns} data={postsWithUserPermissions} />
        </AuthenticatedLayout>
    );
}
