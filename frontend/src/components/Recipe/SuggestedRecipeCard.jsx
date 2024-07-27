import { Box, Center, Text, Card, Heading, Stack, CardBody, StackDivider, Button, IconButton, Tag, Wrap, WrapItem, HStack} from "@chakra-ui/react";
import { FaTrash } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";

const SuggestedRecipeCard = ({recipe, index, onChoose, onDelete, onOpen}) => {

    return (
        <Card
        direction={{ base: 'column', sm: 'row' }}
        overflow='scroll'
        variant='outline'
        w="300px"
        h="350px"
        >                              
            <CardBody h="100%">
                <Stack spacing='4'>
                    <Box onClick={onOpen} mb={'0.5em'} >
                        <Heading as='h1' size='lg'>{recipe.name}</Heading>
                        <StackDivider />
                        <Text fontSize='lg'>{recipe.description}</Text>
                        <Wrap>
                            <WrapItem>
                                <Tag  size={'md'} key={'md'} borderRadius='full' variant='outline' color={"black"}>{recipe.time + " mins"}</Tag>
                            </WrapItem>
                            <WrapItem>
                                <Tag  size={'md'} key={'md'} borderRadius='full' variant='outline' color={"black"}>{Math.round(recipe.nutrition.calories) + " Cals"}</Tag>
                            </WrapItem>
                            <WrapItem>
                                <Tag  size={'md'} key={'md'} borderRadius='full' variant='outline' color={"black"}>{Math.round(recipe.serves) + " Servings"}</Tag>
                            </WrapItem>
                            <WrapItem>
                                {recipe.vegetarian ? <Tag  size={'md'} key={'md'} borderRadius='full' variant='solid' color={"black"} bg="green.200">Vegetarian</Tag> : <Tag  size={'md'} key={'md'} borderRadius='full' variant='solid' color={"black"} bg="yellow.300">Non-Vegetarian</Tag>}
                            </WrapItem>
                        </Wrap>
                    </Box>
                    <HStack mb={'2em'}>
                        <IconButton bg='white' size="lg" color="green.600" icon={<FaCheck/>} onClick={() => onChoose(index)}/>
                        <IconButton bg='white' size="lg" color="red.600" icon={<FaTrash/>} onClick={() => onDelete(index)}/>
                    </HStack>
                </Stack>
            </CardBody>
        </Card>
    )
}

export default SuggestedRecipeCard