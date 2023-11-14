import { Button, Card, CardBody, CardFooter, Heading, Skeleton ,SkeletonText, Text, Stack, HStack,Image} from "@chakra-ui/react"

export const BookCardSkeleton = () => {
  return (
    <Card width='100%' direction={{ base: 'column', sm: 'row' }} overflow='hidden' variant='outline' borderRadius={15} padding={5}>
        <Skeleton objectFit='cover' width={'190px'} borderRadius={20}/>
        <HStack>
        <Stack>
        <CardBody>
            <Heading><Skeleton mt='2' height='30px' width='1200px' fadeDuration={20} /></Heading>
            <Text ><Skeleton  mt='2' height='15px' width='1200px' /></Text>
            <Text ><SkeletonText mt='10' noOfLines={4} spacing='2' skeletonHeight='2' /></Text>
            <HStack justifyContent={"space-between"} marginTop={5}>
            <Button><Skeleton mt='2' width={'40px'} fadeDuration={20} /></Button>
            <Button><Skeleton width={'40px'} fadeDuration={20} /></Button>
            </HStack>
        </CardBody>
        </Stack>
        </HStack>
    </Card>
  )
}
