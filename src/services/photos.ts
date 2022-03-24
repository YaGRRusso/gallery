import { PhotoType } from './../types/photo';
import { storage } from '../libs/firebase';
import { ref, listAll, getDownloadURL, uploadBytes, deleteObject } from 'firebase/storage';
import { async } from '@firebase/util';
import { v4 } from 'uuid';

export const getAll = async () => {
    let list: PhotoType[] = []

    const imagesFolder = ref(storage, 'images')
    const photoList = await await (listAll(imagesFolder))

    for (let i in photoList.items) {
        let photoUrl = await (getDownloadURL(photoList.items[i]))

        list.push({
            name: photoList.items[i].name,
            url: photoUrl
        })
    }

    return list
}

export const insert = async (file: File) => {
    if (['image/jpeg', 'image/jpg', 'image/png', 'image/gif'].includes(file.type)) {

        let randomName = v4()
        let newFile = ref(storage, `images/${randomName}`)


        try {
            let upload = await uploadBytes(newFile, file)
            let photoUrl = await getDownloadURL(upload.ref)

            return {
                name: upload.ref.name,
                url: photoUrl
            } as PhotoType

        } catch {
            return new Error('Usuário não tem permissão!')
        }


    } else {
        return new Error('Arquivo inválido!')
    }
}

export const deletePhoto = async ({ url }: PhotoType) => {
    const deleteFile = ref(storage, url);
    try {
        await deleteObject(deleteFile)
        return true
    } catch {
        return false
    }
}