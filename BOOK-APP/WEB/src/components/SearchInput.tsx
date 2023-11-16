import { Input, InputGroup, InputLeftElement} from '@chakra-ui/react'
import React, { useRef } from 'react'
import { BsSearch } from "react-icons/bs";



export const SearchInput = () => {
    const ref = useRef<HTMLInputElement>(null);
  return (
    <form style={{width:'100%'}} onSubmit={(event) => {
      event.preventDefault();
      if( ref.current) console.log(ref.current.value);
    }}>
      <InputGroup>
          <InputLeftElement ml={'5px'} mt={'15px'} children={<BsSearch/>}/>
          <Input ref={ref} height={'70px'} borderRadius={20} placeholder='Search Book...' variant='filled'/>
      </InputGroup>
    </form>
)}
