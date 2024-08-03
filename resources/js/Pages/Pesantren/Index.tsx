export default function index({ pesantren }: any) {


    return (
        <div>
            <h1 className="mb-4 text-2xl font-bold">Nama Pesantren: {pesantren.nama}</h1>
            <h3>Alamat: {pesantren.alamat}</h3>

            <form action="/pesantren" method="POST" className="max-w-xl mt-4">
                <div className="mb-4">
                    <label htmlFor="nama" className="block text-sm font-medium text-gray-700">Nama Pesantren</label>
                    <input type="text" name="nama" id="nama" className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" required />
                </div>
                <div className="mb-4">
                    <label htmlFor="alamat" className="block text-sm font-medium text-gray-700">Alamat</label>
                    <textarea name="alamat" id="alamat" rows={3} className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" required></textarea>
                </div>
                <button type="submit" className="inline-flex items-center px-4 py-2 text-xs font-semibold tracking-widest text-white uppercase transition duration-150 ease-in-out bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-700 active:bg-indigo-900 focus:outline-none focus:border-indigo-900 focus:ring ring-indigo-300 disabled:opacity-25">
                    Submit
                </button>
            </form>

        </div>
    )
}
