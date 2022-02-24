/* Libraries */
import { useState } from 'react'

/* Hooks */
import { useFetch } from './hooks/useFetch'

/* Components */
import Alert from './components/micro/Alert'
import List from './components/List'
import Gallery from './components/Gallery'
import ModeControl from './components/micro/ModeControl'
import PageControl from './components/micro/PageControl'

function App() {
  const endPoint = "https://picsum.photos/v2/list"
  const limit = 10
  const [page, setPage] = useState(1)
  const [images, loading, hasError] = useFetch(`${endPoint}?page=${encodeURIComponent(page)}&limit=${encodeURIComponent(limit)}`)
  const [mode, setMode] = useState('gallery')

  const handleModeChange = (type) => {
    setMode(type)
  }

  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-16 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>

        <div className="mb-4 flex justify-between">
          <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">Re-showcase</h2>
          <div className="flex">
            <PageControl page={page} max={3} onChange={setPage} className="mr-3"/>
            <ModeControl mode={mode} onChange={handleModeChange} />
          </div>
        </div>

        {hasError ? <Alert message="There was some errors on the endpoint, please be patient." className="mb-4"/> : ''}
        
        {(mode === 'gallery') ? <Gallery isLoading={loading} images={images}/> : <List isLoading={loading} images={images}/>}
      </div>
    </div>
  )
}

export default App;
