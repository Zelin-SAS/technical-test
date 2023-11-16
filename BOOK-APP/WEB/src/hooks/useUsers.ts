
import useData from './useData';


export interface User {
    book: any;
    _id: string;
    name: string;
}


const useUsers = () => useData<User>('http://localhost:3000/api/users');


export default useUsers