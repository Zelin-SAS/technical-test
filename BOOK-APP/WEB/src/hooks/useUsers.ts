
import useData from './useData';


export interface User {
    _id: string;
    name: string;
    email: string;
    book: string;
}


const useUsers = () => useData<User>('http://localhost:3000/api/users');


export default useUsers