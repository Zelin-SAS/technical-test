import { Avatar, Badge, Box, Flex, Text } from "@chakra-ui/react"
import { User } from "../hooks/useUsers"

interface Props {
    user: User
}


export const UserBadge = ({user}: Props) => {
  return (
    <Flex padding={10} backgroundColor={'#EDF2F7'} borderRadius={15}>
        <Avatar src='https://cdn4.iconfinder.com/data/icons/web-ui-color/128/Account-512.png' />
        <Box ml='3'>
        <Text fontWeight='bold'>
            {user.name}
            <Badge ml='1' colorScheme='green'>
            New
            </Badge>
        </Text>
        <Text fontSize='sm'>{user.email}</Text>
        </Box>
  </Flex>
  
  )
}
