import { Box, Center, Image, Text, Card, Heading, Stack, CardBody, StackDivider, HStack, Link} from "@chakra-ui/react";

// eslint-disable-next-line react/prop-types
const RecipeCard = ({image, title, time, calories,likes,id,onOpen}) => {

    return (
        <Card borderWidth="1px" borderRadius="lg">
            <Link href="/recipes/temp" textDecoration={"none"} _hover={"textDecoration: 'none', color: 'tomato'"} >
            <CardBody>
                <Stack divider={<StackDivider />} spacing='4'>
                    <Heading size='md'>{title}</Heading>
                    <Image boxSize="220px" src={image} borderRadius={"10px"}/>
                        <Box>
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
            </Link>
        </Card>
    )
}

export default RecipeCard