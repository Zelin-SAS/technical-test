import { Input, InputGroup, InputLeftElement} from '@chakra-ui/react'
import React from 'react'
import { BsSearch } from "react-icons/bs";


export const SearchInput = () => {
  return (
    <InputGroup>
        <InputLeftElement ml={'5px'} mt={'15px'} children={<BsSearch/>}/>
        <Input height={'70px'} borderRadius={20} placeholder='Search Book...' variant='filled'/>
    </InputGroup>
)}
