import { useCallback } from 'react'
import { ViewGridIcon, ViewListIcon } from '@heroicons/react/solid'

export const ModeControl = (props) => {
    const { mode = 'gallery', className, onChange } = props

    // Handle change display mode (grid or list)
    const handleChange = useCallback((type) => {
        onChange(type)
    }, [onChange])

    return (
        <span className={`relative z-0 inline-flex shadow-sm rounded-md ${className}`}>
            <button type="button" className={`rounded-l-md control-button ${mode === 'gallery' ? 'active' : ''}`} onClick={() => { handleChange('gallery') }}>
                <ViewGridIcon className="-ml-1 -mr-1 h-5 w-5 text-gray-400 hover:text-white" aria-hidden="true" />
            </button>
            <button type="button" className={`-ml-px rounded-r-md control-button ${mode === 'list' ? 'active' : ''}`} onClick={() => { handleChange('list') }}>
                <ViewListIcon className="-ml-1 -mr-1 h-5 w-5 text-gray-400 hover:text-white" aria-hidden="true" />
            </button>
        </span>
    )
}

export default ModeControl