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

    let photoList = [...photos]
    const formData = new FormData(e.currentTarget);
    const files = formData.getAll('image') as File[]

    for (let i in files) {
      if (files[i] && files[i].size > 0) {
        setLoading(true)
        let result = await Photos.insert(files[i])
        setLoading(false)

        if (result instanceof Error) {
          alert(result.message)
        } else {
          photoList.push(result)
          console.log(photoList)
        }
      }
    }

    setPhotos(photoList)
  }

  const handleDeleteItem = async (data: PhotoType) => {
    setLoading(true)
    const res = await Photos.deletePhoto(data)
    setLoading(false)

    if (res) {
      let photoList = photos.filter(item => {
        if (item.url !== data.url) {
          return data
        }
      })
      setPhotos(photoList)
    } else {
      alert('Usuário não tem permissão!')
    }
  }

  return (
    <C.Body>
      <C.Container>
        <h1>React Gallery</h1>

        <C.UploadForm method='POST' onSubmit={handleFormSubmit}>
          <input type="file" name="image" multiple />
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