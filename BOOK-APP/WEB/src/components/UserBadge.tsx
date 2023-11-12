import { Avatar, Badge, Box, Button, Flex, HStack, Text } from "@chakra-ui/react"
import { User } from "../hooks/useUsers"

interface Props {
    user: User
}


export const UserBadge = ({user}: Props) => {
  return (
    <Flex width={'100%'} boxShadow={'dark-lg'} as='button' ml='10' overflow={"hidden"} borderRadius={15} onClick={()=>console.log(user)}>
      <Box  width={'100%'} padding='7'>
        <HStack  padding={1} borderRadius={10}>
        <Avatar src='https://c1.klipartz.com/pngpicture/245/560/sticker-png-person-icon-avatar-icon-design-user-profile-face-silhouette-head-line-art.png'/>
       
        <HStack width={'100%'} justifyContent={"space-between"}  padding='10px' borderRadius={10}>
          <Text fontWeight='bold'>{user.name}</Text>
          <Button>ADD-BOOK</Button>
        </HStack>
        
        </HStack>
        </Box>
  </Flex>
  
  )
}
