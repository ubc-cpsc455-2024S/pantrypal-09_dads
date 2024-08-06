import { Text, Card, CardBody, Flex, Spacer, HStack, IconButton, Divider, Heading } from "@chakra-ui/react";
import { FaTrash } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";

const IngredientCard = ({ ingredient, id, onDelete, onEdit }) => {
    return (
        <Card overflow="hidden" minW={'150px'} maxW={'300px'} minH={"100px"} variant={"elevated"}>
            <CardBody>
                <Flex alignItems={'center'} direction={"column"} height={"100%"}>
                    <>
                        <HStack alignItems={'right'} spacing={'0.5rem'}>
                            <Heading        
                                size="md"
                                fontWeight="500"
                                color="#333"
                            >
                                {ingredient.name}
                            </Heading>
                        </HStack>
                        <Text size="sm">{ingredient.quantity} {ingredient.unit}</Text>
                        <Text size="sm" textAlign={"left"}>{"Notes:  " + ingredient.notes}</Text>
                    </>
                    <Spacer />
                    <HStack alignItems={'right'} spacing={'0.5rem'} w="100%">
                        <IconButton bg='white' size="lg" color="red.600" icon={<FaTrash/>} onClick={() => onDelete(id)}/>
                        <Spacer />
                        <IconButton icon={<FaEdit/>}  bg='white' color="blue.600" size="lg" onClick={() => onEdit(id)}>Edit</IconButton>
                    </HStack>
                </Flex>
            </CardBody>
        </Card>
    );
};

export default IngredientCard;