import useData from './useData';
import { User } from './useUsers';


export interface Book {
    _id: string;
    title: string;
    author: string;
    image: string;
    note: string;
}


const useBooks = () => useData<Book>('http://localhost:3000/api/books');


export default useBooks