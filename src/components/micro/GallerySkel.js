export const GallerySkel = (props) => {
    const { idx } = props

    return (
        <div className="animate-pulse flex-row" key={idx}>
            <div className="w-full aspect-w-5 aspect-h-3 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-4 bg-slate-200"></div>
            <div className="mt-4 h-5 w-full bg-slate-200 rounded"></div>
            <div className="mt-1 h-6 w-full bg-slate-200 rounded"></div>
        </div>
    )
}

export default GallerySkel