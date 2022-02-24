import GalleryItem from './micro/GalleryItem'
import GallerySkel from './micro/GallerySkel'

export const Gallery = (props) => {
    const { images, isLoading, ...restProps } = props

    return (
        <div {...restProps} className="grid grid-cols-1 gap-y-5 sm:grid-cols-2 gap-x-3 lg:grid-cols-2 xl:grid-cols-5 xl:gap-x-3">
            { isLoading || images == null ? '' : images.map((image, idx) => (
                <GalleryItem image={image} idx={idx} key={image.id}></GalleryItem>
            ))}
            { isLoading || images == null ? [...Array(5)].map((e, i) => (
                <GallerySkel key={i} idx={i}></GallerySkel>
            )) : ''}
        </div>
    )
}

export default Gallery