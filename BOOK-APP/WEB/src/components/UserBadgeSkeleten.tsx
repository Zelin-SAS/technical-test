import {
  Flex,
  SkeletonText,
  Skeleton,
  Text,
  Box,
  Avatar,
  SkeletonCircle,
  HStack,
  Card,
  CardBody,
} from "@chakra-ui/react";

export const UserBadgeSkeleton = () => {
  return (
    <Card width={"400px"} overflow={"hidden"}>
      <CardBody
        width={"400px"}
        mb={"5px"}
        padding="5"
        boxShadow="lg"
        marginBottom={"40px"}
        borderRadius={"25px"}
        as="button"
        ml={"5px"}
      >
        <HStack>
          <SkeletonCircle marginLeft={"10px"} size="14" />
          <Skeleton width={"300px"} padding="5" />
          <Text>
            <SkeletonText fadeDuration={4} />
          </Text>
        </HStack>
      </CardBody>
    </Card>
  );
};
