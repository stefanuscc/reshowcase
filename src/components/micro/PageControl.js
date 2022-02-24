import { useCallback } from 'react'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid'

export const PageControl = (props) => {
    const {page, max, className, onChange} = props

    // Handle next page, page over than max will not count
    const handleNext = useCallback(() => {
        let newPage = page + 1 > max ? max : page + 1
        onChange(newPage)
    }, [page, max, onChange])

    // Handle prev page, page bellow than 1 will not count
    const handlePrev = useCallback(() => {
        let newPage = page - 1 < 1 ? 1 : page - 1
        onChange(newPage)
    }, [page, onChange])

    // Handle change page
    const handlePage = useCallback((newPage) => {
        onChange(newPage)
    }, [onChange])

    return (
        <span className={`relative z-0 inline-flex shadow-sm rounded-md ${className}`}>
            <button
                type="button"
                className="rounded-l-md control-button px-2"
                onClick={handlePrev}
            >
                <span className="sr-only">Previous</span>
                <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
            </button>
            { [...Array(max)].map((el, idx) => (
                <button
                    key={idx}
                    type="button"
                    className={`control-button ${page === idx + 1 ? 'active' : ''}`}
                    disabled={page === idx + 1}
                    onClick={ () => handlePage(idx + 1) }
                >
                    <span className="sr-only">Page {idx + 1}</span>
                    {idx + 1}
                </button>
            ))}
            <button
                type="button"
                className="-ml-px rounded-r-md control-button px-2"
                onClick={handleNext}
            >
                <span className="sr-only">Next</span>
                <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
            </button>
        </span>
    )
}

export default PageControl
