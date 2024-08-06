import { Box, Text, Heading, VStack} from "@chakra-ui/react";

const Instructions = ({ instructions }) => {

  return (
    <Box width={'100%'} margin={"15px"}>
        <VStack display="flex" flexDirection="column" alignItems={'flex-start'} marginLeft={"35px"}>
            <Heading size='md' alignContent={'flex-start'} overflowWrap={"break-word"}>
                Instructions
            </Heading>
            {instructions.map((instruction, index) => {
                return <Text key={index} overflowWrap={"break-word"} textAlign={'left'}>
                    <b>{index + 1 + ". "}</b>{instruction}
                </Text>
            })}
        </VStack>
    </Box>
  );
};

export default Instructions;