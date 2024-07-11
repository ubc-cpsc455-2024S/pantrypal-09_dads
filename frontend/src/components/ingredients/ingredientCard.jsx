import { Text, Card, CardBody, HStack, Button } from "@chakra-ui/react";

const IngredientCard = ({ ingredient, id, onDelete, onEdit }) => {
    return (
        <Card overflow="hidden" mb="4" borderWidth="1px" borderRadius="lg" width={'300px'}>
            <CardBody>
                <HStack alignItems={'center'} spacing={'0.5rem'} justifyContent="space-between">
                    <Text fontWeight="bold" fontSize="l">{ingredient.name}</Text>
                    <Text>{ingredient.quantity} {ingredient.unit}</Text>
                    <Button colorScheme="red" size="sm" onClick={() => onDelete(id)}>Delete</Button>
                    <Button colorScheme="blue" size="sm" onClick={() => onEdit(id)}>Edit</Button>
                </HStack>
            </CardBody>
        </Card>
    );
};

export default IngredientCard;