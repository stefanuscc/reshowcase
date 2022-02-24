import { ChevronRightIcon } from "@heroicons/react/solid"

export const ListItem = (props) => {
    const { image, idx } = props

    return (
        <li key={image.id}>
            <a href={image.url} className="block hover:bg-gray-50" target="_blank" rel="noreferrer">
            <div className="flex items-center px-4 py-4 sm:px-6">
                <div className="min-w-0 flex-1 flex items-center">
                    <div className="flex w-1/5">
                        <div className="w-full aspect-w-2 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-2 xl:aspect-h-1">
                            <img className="w-full h-full object-center object-cover group-hover:opacity-75" src={image.download_url} alt="" />
                        </div>
                    </div>
                    <div className="min-w-0 flex-1 px-4 md:grid md:grid-cols-3 md:gap-4">
                        <div>
                            <p className="text-sm text-gray-500 truncate">Author</p>
                            <p className="mt-2 flex items-center text-sm font-medium text-gray-900">
                                <span className="truncate">{image.author}</span>
                            </p>
                        </div>
                        <div>
                            <p className="text-sm text-gray-500 truncate">Resolutions</p>
                            <p className="mt-2 flex items-center text-sm font-medium text-gray-900">
                                <span className="truncate">{image.width} x {image.height}</span>
                            </p>
                        </div>
                        <div>
                            <p className="text-sm text-gray-500 truncate">Image Name</p>
                            <p className="mt-2 flex items-center text-sm font-medium text-gray-900">
                                Unamed Image #{idx+1}
                            </p>
                        </div>
                    </div>
                </div>
                <div>
                    <ChevronRightIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                </div>
            </div>
            </a>
        </li>
    )
}

export default ListItem