import { useEffect, useState } from 'react'
import * as C from './App.styles'
import * as Photos from './services/photos'
import { PhotoType } from './types/photo'

const App = () => {
  const [loading, setLoading] = useState(false)
  const [photos, setPhotos] = useState<PhotoType[]>([])

  useEffect(() => {
    const getPhotos = async () => {
      setLoading(true)
      setPhotos(await Photos.getAll())
      setLoading(false)
    }
    getPhotos()
  }, [])

  return (
    <C.Body>
      <C.Container>
        <h1>React Gallery</h1>
      </C.Container>
    </C.Body>
  )
}

export default App