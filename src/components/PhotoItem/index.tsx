import { PhotoType } from '../../types/photo'
import * as C from './styles'

type Props = {
    data: PhotoType
}

export const ImagesDisplay = ({ data }: Props) => {
    return (
        <C.Display>
            <img src={data.url} alt={data.name} />
            <p>{data.name}</p>
        </C.Display>
    )
}