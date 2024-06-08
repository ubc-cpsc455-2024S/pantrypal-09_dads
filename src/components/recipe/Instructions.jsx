import { Box, Text, Heading} from "@chakra-ui/react";

const Instructions = ({ instructions }) => {

  return (
    <Box width={'100%'}>
        <Heading size='md' overflowWrap={"break-word"}>
            Instructions
        </Heading>

        <Box display="flex" flexDirection="column" marginLeft={"20px"}>
            {instructions.map((instruction, index) => {
                return <Text key={index} overflowWrap={"break-word"} textAlign={'left'}>
                    {index+1 + ". " + instruction}
                </Text>
            })}
        </Box>
    </Box>
  );
};

export default Instructions;