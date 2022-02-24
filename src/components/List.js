import ListSkel from './micro/ListSkel'
import ListItem from './micro/ListItem'

export const List = (props) => {
    const { images, isLoading } = props

    return (
        <div className="bg-white shadow overflow-hidden sm:rounded-md">
            <ul className="divide-y divide-gray-200">   
                { isLoading || images == null ? [...Array(5)].map((e, i) => (
                    <ListSkel key={i} idx={i}/>
                )) : ''}
                { isLoading || images == null ? '' : images.map((image, idx) => (
                    <ListItem key={image.id} image={image} idx={idx}/>
                ))}
            </ul>
        </div>
    )
}

export default List