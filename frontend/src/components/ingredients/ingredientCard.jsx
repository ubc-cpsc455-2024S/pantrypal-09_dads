import { Text, Card, CardBody, Flex, Spacer, HStack, Button, Divider, Heading } from "@chakra-ui/react";

const IngredientCard = ({ ingredient, id, onDelete, onEdit }) => {
    return (
        <Card overflow="hidden" mb="4" width={'300px'} height={"200px"} variant={"filled"}>
            <CardBody>
                <Flex alignItems={'center'} direction={"column"} spacing={"space-between"} height={"100%"}>
                    <>
                        <HStack alignItems={'right'} spacing={'0.5rem'}>
                            <Heading size="m">{ingredient.name}</Heading>
                        </HStack>
                        <Text>{ingredient.quantity} {ingredient.unit}</Text>
                        <Divider/>
                        <Text textAlign={"left"}>{ingredient.notes}</Text>
                    </>
                    <Spacer />
                    <Spacer />
                    <Spacer />
                    <HStack alignItems={'right'} spacing={'0.5rem'}>
                        <Button colorScheme="red" size="xs" variant='outline' onClick={() => onDelete(id)}>Delete</Button>
                        <Button colorScheme="blue" size="xs" onClick={() => onEdit(id)}>Edit</Button>
                    </HStack>
                </Flex>
            </CardBody>
        </Card>
    );
};

export default IngredientCard;