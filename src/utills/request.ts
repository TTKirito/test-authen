import axios from 'axios'

export const postRequest = async (data: any, url: string, headers: any) => {
    try {
        const response = await axios.post(url, data, { headers })
        return response.data
    } catch (e) {
        console.error(e)
    }
}