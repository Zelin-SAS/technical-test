import { useEffect, useState } from 'react'
import apiClient from '../services/api-client'
import { CanceledError } from 'axios'
import useData from './useData';
import { User } from './useUsers';


export interface Book {
    id: number;
    title: string;
    author: string;
    image: string;
    note: string;
}


const useBooks = () => useData<Book>('/books');


export default useBooks