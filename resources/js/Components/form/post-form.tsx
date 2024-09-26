import { Category } from '@/types/category'
import { Link, useForm } from '@inertiajs/react'
import React, { SetStateAction, useEffect } from 'react'
import Tiptap from '../editor/Tiptap'
import InputError from '../InputError'
import slugify from 'slugify'
import { Post } from '@/types/post'
import { Loader } from 'lucide-react'

export default function PostForm({ postData, categories }: { postData?: Post, categories: Category[] }) {
    const [uploadedImage, setUploadedImage] = React.useState<string | null>(postData?.featured_image || null)
    const selectedCategories = postData?.categories.map(category => category.id)

    const { data, setData, post, put, errors, reset, processing } = useForm({
        title: postData?.title || '',
        slug: postData?.slug || '',
        categories: selectedCategories || [] as String[],
        content: postData?.content || '',
        featured_image: postData?.featured_image || undefined as File | undefined,
        status: postData?.status || 'published',
        _method: postData && 'PUT',
    })

    // console.log(user_id)

    useEffect(() => {
        const generateSlug = slugify(data.title, {
            lower: true,
            strict: true
        })
        setData('slug', generateSlug)
    }, [data.title])

    const handleSelectCategories = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedCategories = Array.from(e.target.selectedOptions, (option) => option.value)
        setData('categories', selectedCategories)
    }

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const image = e.target.files?.[0]

        setData('featured_image', image)

        const promises = []
        if (image) {
            const reader = new FileReader()
            reader.readAsDataURL(image)
            promises.push(new Promise((resolve, reject) => {
                reader.onload = () => resolve(reader.result)
            }))
        }
        Promise.all(promises).then(result => {
            setUploadedImage(result[0] as string)
        })
    }

    console.log(data)

    const submit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (postData) {
            if (data.featured_image === postData.featured_image) {
                delete data.featured_image
            }
            post(route('post.update', postData.id))
        } else {
            delete data._method
            post(route('post.store'))
        }
    }
    return (
        <form className='space-y-6' onSubmit={submit}>
            <div className="grid w-full grid-cols-7 gap-8 h-fit">
                <div className="w-full h-full col-span-5 space-y-6">
                    <div className="w-full space-y-2">
                        <input
                            disabled={processing}
                            value={data.title}
                            onChange={(e) => setData('title', e.target.value)}
                            type="text"
                            placeholder="Tulis Judul Post di Sini"
                            className={`block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-xl sm:font-bold ${errors.title ? "border-red-300 text-red-900 focus:ring-red-500 focus:border-red-500" : ""}`}
                        />
                        <InputError message={errors.title} />

                    </div>
                    <Tiptap content={postData?.content || ''} onChange={(richText) => setData('content', richText)} />
                    <InputError message={errors.content} />
                </div>
                <div className="col-span-2 space-y-6">
                    <div className="">
                        <label
                            className="block text-sm font-medium text-gray-700"
                        >
                            Slug <span className='text-xs text-gray-400'>(tergenerate secara otomatis)</span>
                        </label>
                        <input
                            disabled={processing}
                            value={data.slug}
                            onChange={(e) => setData('slug', e.target.value)}
                            type="text"
                            id="slug"
                            className={`block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${errors.slug ? "border-red-300 text-red-900 focus:ring-red-500 focus:border-red-500" : ""}`}
                        />
                        <InputError message={errors.slug} />
                    </div>
                    <div className="">
                        <label
                            className="block text-sm font-medium text-gray-700"
                        >
                            Kategori
                        </label>
                        <select
                            defaultValue={selectedCategories?.map((permission) => permission.toString())}
                            onChange={handleSelectCategories}
                            id="permissions"
                            name="permissions"
                            multiple
                            className={`block w-full h-28 px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${errors.categories ? "border-red-300 text-red-900 focus:ring-red-500 focus:border-red-500" : ""}`}
                        >
                            {categories.map((category) => (
                                <option key={category.id} value={category.id}>
                                    {category.name}
                                </option>
                            ))}
                        </select>
                        <InputError message={errors.categories} />
                    </div>
                    <div className="">
                        <label
                            className="block text-sm font-medium text-gray-700"
                        >
                            Featured Image
                        </label>
                        <div className="">
                            {uploadedImage && (
                                <div className="flex items-center justify-center w-full mt-2 border border-gray-300 rounded-md shadow-sm h-fit">
                                    <img
                                        src={uploadedImage}
                                        alt="Uploaded Image"
                                        className="object-cover w-full h-full"
                                    />
                                </div>
                            )}
                        </div>
                        <input
                            disabled={processing}
                            onChange={handleFileChange}
                            type="file"
                            accept='image/*'
                            className={`block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${errors.featured_image ? "border-red-300 text-red-900 focus:ring-red-500 focus:border-red-500" : ""}`}
                        />

                        <InputError message={errors.featured_image} />
                    </div>
                    <div className="">
                        <label
                            className="block text-sm font-medium text-gray-700"
                        >
                            Status
                        </label>

                        <select
                            onChange={(e) => setData('status', e.target.value as 'published' | 'draft' | 'archived')}
                            value={data.status}
                            className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        >
                            <option value="published">Published</option>
                            <option value="draft">Draft</option>
                            <option value="archived">Archived</option>
                        </select>
                        <InputError message={errors.status} />

                    </div>
                </div>
            </div>
            <div className="px-4 py-3 text-right sm:px-6">
                <button>
                    <Link
                        disabled={processing}
                        href={route('post.index')}
                        className={`inline-flex items-center px-4 py-2 mr-4 text-sm font-medium text-indigo-700 bg-indigo-100 border border-transparent rounded-md hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${processing ? "opacity-25 cursor-not-allowed" : ""}`}
                    >
                        Cancel
                    </Link>
                </button>
                <button
                    disabled={processing}
                    type="submit"
                    className={`inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 items-center ${processing ? "opacity-25 cursor-not-allowed" : ""}`}
                >
                    {processing
                        ? <>
                            <Loader className='w-3 h-3 mr-2 animate-spin' /> Loading...
                        </>
                        : postData ? 'Update' : 'Save'}
                </button>
            </div>
        </form>
    )
}
