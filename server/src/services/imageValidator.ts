import axios from 'axios';

export async function isImageUrlValid(url: string): Promise<boolean> {
    try {
        const response = await axios.head(url);
        const contentType = response.headers['content-type'];
        return response.status === 200 && contentType.startsWith('image/');
    } catch (error) {
        return false;
    }
}