import { useEffect, useState } from 'react'
import apiClient from '../services/api-client'
import { CanceledError } from 'axios'


export interface Book {
    id: number;
    title: string;
    author: string;
    image: string;
}


const useBooks = () => {
    const [books, setBooks] = useState<Book[]>([]);
    const [error, setError] = useState('');

    useEffect(() => {
        const controller = new AbortController();

        apiClient.get<Book[]>('/books', { signal: controller.signal })
            .then(res => setBooks(res.data))
            .catch((err) => {
                if (err instanceof CanceledError ) return;
                setError(err.message);
            });
        
        return () => controller.abort();

    }, []);

    return {books, error};
}


export default useBooks