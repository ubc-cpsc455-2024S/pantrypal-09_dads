import { Text, Card, CardBody, Flex, Td, Tr, Button, IconButton, Heading } from "@chakra-ui/react";
import { FaTrash } from "react-icons/fa";

const IngredientRow = ({ ingredient, id, onDelete, onEdit }) => {
    return (
        <Tr>
            <Td>{ingredient.name}</Td>
            <Td>{ingredient.quantity}</Td>
            <Td>{ingredient.unit}</Td>
            <Td>{ingredient.notes}</Td>
            <Td><Button colorScheme="blue" size="xs" onClick={() => onEdit(id)}>Edit</Button></Td>
            <Td><IconButton bg='white' size="md" color="red.600" icon={<FaTrash/>} onClick={() => onDelete(id)}/></Td>
        </Tr>
    );
};

export default IngredientRow;