import useData from './useData';
import { User } from './useUsers';


export interface Book {
    length: number;
    slice(firstIndex: number, lastIndex: number): unknown;
    _id: string;
    title: string;
    author: string;
    image: string;
    note: string;
    user:{
        _id:string;
        name:string;
    }
}


const useBooks = (selectedUser: User | null) => useData<Book>(`http://localhost:3000/api/books/${selectedUser?._id}`,[selectedUser?._id]);



export default useBooks