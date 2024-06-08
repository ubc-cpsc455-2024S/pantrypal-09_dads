import { Box, Input, Image, Text, Heading, Card, CardBody, CardHeader, VStack, HStack} from "@chakra-ui/react";

// eslint-disable-next-line react/prop-types
const IngredientCard = ({ ingredient }) => {

    return (
        <Card minH="150px" overflow="hidden" mb="4" borderWidth="1px" borderRadius="lg">
            <CardBody>
                <VStack align="start">
                    <Text fontWeight="bold" fontSize="xl">{ingredient.name}</Text>
                    <HStack>
                        <Text>Quantity:</Text>
                        <Input
                            value={ingredient.quantity}
                        />
                    </HStack>
                    <HStack>
                        <Text>Notes:</Text>
                        <Input
                            value={ingredient.notes}
                        />
                    </HStack>
                </VStack>
            </CardBody>
        </Card>
    )
};

export default IngredientCard