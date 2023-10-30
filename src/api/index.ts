import config from '../../config/default.json'
import md5 from 'md5'

const secretKey= config.CLIENT_KEY
const idClient=config.id.toString()
const accessToken=md5(idClient+secretKey)

const baseURL = `https://demo.qeep.pro/api/v2/application?client_id=${idClient}&access_token=${accessToken}`

export const sendApplication = async (formData: FormData) => {
    try {
        const response = await fetch(baseURL, {
            method: 'PUT',
            body: formData
        })
        return await response.json()
    } catch (error) {
        throw error
    }
}