import {
    VStack,
    Wrap,
    WrapItem,
    Heading,
    Box,
    HStack,
    Button,
    Divider,
  } from "@chakra-ui/react";
  
  const UnauthorizedPage = () => {
    return (
      <Box display={"flex"} flexDirection={"column"} mx={"8%"}>
        <VStack alignItems="flex-start" mx={"auto"}>
          <Heading
            as="h1"
            fontSize="2rem"
            fontWeight="500"
            color="#333"
            marginBottom="1rem"
          >
            Error Unauthorized!
          </Heading>
          <Heading
            as="h3"
            fontSize="1rem"
            fontWeight="500"
            color="#333"
            marginBottom="1rem"
          >
            Please Log in or sign up!
          </Heading>
        </VStack>
      </Box>
    );
  };
  
  export default UnauthorizedPage;
  