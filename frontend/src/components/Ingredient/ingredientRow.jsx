import { Text, Card, CardBody, Flex, Td, Tr, Button, IconButton, Heading } from "@chakra-ui/react";
import { FaTrash } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";

const IngredientRow = ({ ingredient, id, onDelete, onEdit }) => {
    return (
        <Tr>
            <Td>{ingredient.name}</Td>
            <Td>{ingredient.quantity}</Td>
            <Td>{ingredient.unit}</Td>
            <Td>{ingredient.notes}</Td>
            <Td><IconButton icon={<FaEdit/>}  bg='white' color="blue.600" size="lg" onClick={() => onEdit(id)}>Edit</IconButton><IconButton bg='white' size="lg" color="red.600" icon={<FaTrash/>} onClick={() => onDelete(id)}/></Td>
        </Tr>
    );
};

export default IngredientRow;