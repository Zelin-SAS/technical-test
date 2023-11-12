
import useData from './useData';


export interface User {
    id: number;
    name: string;
    email: string;
    book: string;
}


const useUsers = () => useData<User>('/users');


export default useUsers