import { Flex, SkeletonText, Skeleton, Text, Box, Avatar, SkeletonCircle, HStack} from "@chakra-ui/react"

export const UserBadgeSkeleton = () => {
  return (
    <Flex overflow={"hidden"}>
       <Box mt={10} width={'100%'} padding='7' boxShadow='lg' bg='white' as='button'  ml={'77px'}>
       <HStack>
        <SkeletonCircle marginLeft={'10px'}  size='14' />
            <Skeleton width={'300px'} padding='5' />
            <Text>
                  <SkeletonText fadeDuration={4}/>
            </Text>
        </HStack>
        </Box>
    </Flex>
  )
}
