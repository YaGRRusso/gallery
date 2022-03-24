import { PhotoType } from '../../types/photo'
import * as C from './styles'
import DeleteImg from '../../images/delete.svg'
import ZoomImg from '../../images/zoom.svg'

type Props = {
    data: PhotoType
    deleteFunction: (data: PhotoType) => void
}

export const ImagesDisplay = ({ data, deleteFunction }: Props) => {
    const handleDeleteItem = () => {
        deleteFunction(data)
    }

    const handleZoomItem = () => {
        window.open(data.url)
    }

    return (
        <C.Display>
            <div className='buttonsArea'>
                <img src={DeleteImg} alt="Excluir" onClick={() => handleDeleteItem()} />
                <img src={ZoomImg} alt="Baixar" onClick={() => handleZoomItem()} />
            </div>
            <div className="imgArea">
                <img src={data.url} alt={data.name} />
            </div>
            <p>{data.name}</p>
        </C.Display>
    )
}