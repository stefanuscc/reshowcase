export const ListSkel = (props) => {
    const { idx } = props

    return (
        <li className="animate-pulse" key={idx}>
            <div className="flex items-center px-4 py-4 sm:px-6">
                <div className="min-w-0 flex-1 flex items-center">
                    <div className="flex w-1/5">
                        <div className="w-full aspect-w-2 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-2 xl:aspect-h-1 bg-slate-200">
                        </div>
                    </div>
                    <div className="min-w-0 flex-1 px-4 md:grid md:grid-cols-3 md:gap-4">
                        <div>
                            <p className="h-4 w-full bg-slate-200 rounded"></p>
                            <p className="mt-2 h-5 w-full bg-slate-200 rounded"></p>
                        </div>
                        <div>
                            <p className="h-4 w-full bg-slate-200 rounded"></p>
                            <p className="mt-2 h-5 w-full bg-slate-200 rounded"></p>
                        </div>
                        <div>
                            <p className="h-4 w-full bg-slate-200 rounded"></p>
                            <p className="mt-2 h-5 w-full bg-slate-200 rounded"></p>
                        </div>
                    </div>
                </div>
                <div>
                    <p className="h-5 w-5 bg-slate-200 rounded"></p>
                </div>
            </div>
        </li>
    )
}

export default ListSkel