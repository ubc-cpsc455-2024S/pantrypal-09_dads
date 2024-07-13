import { Box, Center, Image, Text, Card, Heading, Stack, CardBody, StackDivider, HStack, Link} from "@chakra-ui/react";

// eslint-disable-next-line react/prop-types
const RecipeCard = ({image, title, time, description, calories,likes,id,onOpen}) => {

    return (
        <Card
        direction={{ base: 'column', sm: 'row' }}
        overflow='hidden'
        variant='outline'
        >                              
         <Image boxSize="220px" margin={'5px'} src={image} borderRadius={"5px"} objectFit='cover'maxW={{ base: '100%', sm: '200px' }}/> 

            <CardBody>
                <Stack divider={<StackDivider />} spacing='4'>
                    <Box>
                        <Heading size='md' mb="15px">{title}</Heading>
                        <StackDivider />
                        <Text fontSize='xl' marginBottom={'2em'}>{description}</Text>
                        <Center height='10px'>
                            <HStack divider={<StackDivider />}>
                                <Text overflowWrap={"break-word"} alignItems={"flex-end"}>{time + " mins"}</Text>
                                <Text overflowWrap={"break-word"} textAlign={"end"}>{Math.round(calories) + " Cals"}</Text>
                                <Text overflowWrap={"break-word"} textAlign={"end"}>{"♥️ "+ likes}</Text>
                            </HStack>
                        </Center>
                    </Box>
                </Stack>
            </CardBody>
        </Card>
    )
}

export default RecipeCard