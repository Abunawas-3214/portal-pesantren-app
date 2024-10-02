import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';
import { PageProps } from '@/types'
import { Post } from '@/types/post'
import React from 'react'

export default function View({ auth, post }: PageProps & { post: Post }) {
    const markup = {
        __html: post.content
    }
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="text-xl font-semibold leading-tight text-gray-800">View Post</h2>}
        >
            <Head title="Post" />

            <div className="sm:flex sm:items-center">
                <div className="sm:flex-auto flex justify-center m-16">
                    <div className="space-y-12 w-2/3">
                        <div className="space-y-2">
                            <h1 className='text-4xl font-semibold'>{post.title}</h1>
                            <p>{post.user.name} - {new Date(post.created_at).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
                        </div>
                        {post.featured_image &&
                            <img
                                src={post.featured_image}
                                alt="post featured image"
                                className='w-full'
                            />
                        }
                        <article className='font-light prose text-md prose-slate prose-strong:font-black prose-h3:text-2xl prose-h3:font-light prose-a:text-blue-600'>
                            <div dangerouslySetInnerHTML={markup} />
                        </article>
                        {post.categories &&
                            <p className="text-sm capitalize text-primary">
                                <span>Kategori:</span> {post.categories && post.categories.length >= 2 ? post.categories.map(category => category.name).join(', ') : post.categories.map(category => category.name)}
                            </p>
                        }
                        <div className="px-4 py-3 text-right sm:px-6">
                            <button>
                                <Link
                                    href={route('post.index')}
                                    className={'inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 items-center'}
                                >
                                    Back
                                </Link>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    )
}