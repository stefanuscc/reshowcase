export const GalleryItem = (props) => {
    const { image, idx } = props

    return (
        <a key={image.id} href={image.url} className="group" target="_blank" rel="noreferrer">
            <div className="w-full aspect-w-5 aspect-h-3 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-4">
                <img
                    src={image.download_url}
                    alt={image.author}
                    className="w-full h-full object-center object-cover group-hover:opacity-75"
                />
            </div>
            <h3 className="mt-4 text-sm text-gray-700">{image.author}</h3>
            <p className="mt-1 text-lg font-medium text-gray-900">Unamed Image #{idx+1}</p>
        </a>
    )
}

export default GalleryItem