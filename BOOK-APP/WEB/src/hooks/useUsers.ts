import { useEffect, useState } from 'react'
import apiClient from '../services/api-client'
import { CanceledError } from 'axios'


export interface User {
    id: number;
    name: string;
    email: string;
}


const useUsers = () => {
    const [users, setBooks] = useState<User[]>([]);
    const [error, setError] = useState('');
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        const controller = new AbortController();

        setLoading(true)
        apiClient.get<User[]>('/users', { signal: controller.signal })
            .then((res) => {
                setBooks(res.data);
                setLoading(false);
            })
            .catch((err) => {
                if (err instanceof CanceledError ) return;
                setError(err.message)
                setLoading(false);
            });
        
        return () => controller.abort();

    }, []);

    return {users: users, error, isLoading};
}


export default useUsers