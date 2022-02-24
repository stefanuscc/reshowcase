import { useState, useEffect } from 'react'

const fetchData = async (url, opts) => {
    const res = await fetch(url, opts)
    const json = await res.json()
    return json
}

export function useFetch(url, opts) {
    const [response, setResponse] = useState(null)
    const [loading, setLoading] = useState(false)
    const [hasError, setHasError] = useState(false)

    useEffect(() => {
        setLoading(true)
        
        fetchData(url, opts)
        .then((res) => {
            setResponse(res)
            setLoading(false)
        })
        .catch(() => {
            setHasError(true)
            setLoading(false)
        })
    }, [url, opts])
    
    return [ response, loading, hasError ]
}