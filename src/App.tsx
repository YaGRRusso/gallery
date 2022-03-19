import { FormEvent, useEffect, useState } from 'react'
import * as C from './App.styles'
import { ImagesDisplay } from './components/PhotoItem'
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

  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const file = formData.get('image') as File

    if (file && file.size > 0) {
      setLoading(true)
      let result = await Photos.insert(file)
      setLoading(false)

      if (result instanceof Error) {
        alert(result.message)
      } else {
        let photoList = [...photos]
        photoList.push(result)
        setPhotos(photoList)
      }
    }
  }

  const handleDeleteItem = async (data: PhotoType) => {
    setLoading(true)
    await Photos.deletePhoto(data)
    setLoading(false)

    let photoList = photos.filter(item => {
      if (item.url !== data.url) {
        return data
      }
    })
    setPhotos(photoList)
  }

  return (
    <C.Body>
      <C.Container>
        <h1>React Gallery</h1>

        <C.UploadForm method='POST' onSubmit={handleFormSubmit}>
          <input type="file" name="image" />
          <input type="submit" />
        </C.UploadForm>

        {loading &&
          <C.Warning><div /></C.Warning>
        }

        {!loading && photos.length === 0 &&
          <C.Warning>Não há fotos cadastradas.</C.Warning>
        }

        {!loading && photos.length > 0 &&
          <C.ImageSection>
            {photos.map((item, index) => (
              <ImagesDisplay key={index} data={item} deleteFunction={handleDeleteItem} />
            ))}
          </C.ImageSection>
        }
      </C.Container>
    </C.Body>
  )
}

export default App