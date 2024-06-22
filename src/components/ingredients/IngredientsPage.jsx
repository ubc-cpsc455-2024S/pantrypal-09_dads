import {
  VStack, 
  Heading, 
  HStack, 
  Button, 
  Divider, 
  Link, 
  Box, 
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormLabel,
  Input,
  Select
} from "@chakra-ui/react";
import { IoFastFoodOutline } from "react-icons/io5";
import IngredientCard from "./ingredientCard";
import { useState } from "react";
import IngredientsDisplay from "./IngredientsDisplay";
import { useSelector, useDispatch } from "react-redux";

const InsertIngredientsPage = () => {
  const ingredients = useSelector((state) => state.ingredients.items);
  const dispatch = useDispatch();
  const [newIngredient, setNewIngredient] = useState(
    {
      name: '',
      quantity: 0,
      unit: ''
    }
  );

  return (
    <Box display={"flex"} flexDirection={"column"} mx={"8%"}>

      <Heading
        as="h1"
        fontSize="2rem"
        fontWeight="500"
        color="#333"
        marginBottom="1rem"
          >
          Identified Ingredients:
      </Heading>
      <Heading
               as="h3"
               fontSize="1rem"
               fontWeight="500"
               color="#333"
               marginBottom="1rem"
                >
                Make any necessary changes before generating recipes!
      </Heading>

      <IngredientsDisplay initialIngredients={ingredients} />


      <VStack>
        <Divider  marginTop={'20px'}/>
        <HStack direction='column' spacing={4}>
            <Button leftIcon={<IoFastFoodOutline />} variant='solid'>
              <Link href="/recipes"> Generate Recipes! </Link>
            </Button>
        </HStack>
      </VStack>
    </Box>
  );
}


export default InsertIngredientsPage
