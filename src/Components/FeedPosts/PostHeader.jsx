import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

const PostHeader = ({username,avatar}) => {
  return <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"} mb={2}>
    <Flex alignItems={"center"} gap={2}>
        <Avatar src={avatar} alt={username} size={"sm"}/>
        <Flex fontSize={12} fontWeight={"bold"} gap={2}>
            {username}
            <Box color={"gray.500"}>
            • 1w
            </Box>
        </Flex>
    </Flex>
    <Box cursor={"pointer"}>
        <Text fontSize={12} fontWeight={"bold"} color={"blue.500"} _hover={{
          color:"white"  
        }} transition={"0.3s ease-in-out"}>Unfollow</Text>
    </Box>

  </Flex>;
};

export default PostHeader;
