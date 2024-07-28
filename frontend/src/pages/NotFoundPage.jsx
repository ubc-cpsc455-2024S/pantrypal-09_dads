import { VStack, Wrap, WrapItem, Heading, Box, HStack, Button, Divider} from "@chakra-ui/react";

const NotFoundPage = () => {

  return (
    <Box display={"flex"} flexDirection={"column"} mx={"8%"}>
        <VStack alignItems="flex-start" mx={'auto'}>
            <Heading
               as="h1"
               fontSize="2rem"
               fontWeight="500"
               color="#333"
               marginBottom="1rem"
                >
                404 Page Not Found
            </Heading>
            <Heading
               as="h3"
               fontSize="1rem"
               fontWeight="500"
               color="#333"
               marginBottom="1rem"
                >
                Sorry about that!
            </Heading>
        </VStack>
    </Box>
  )
}


export default NotFoundPage
