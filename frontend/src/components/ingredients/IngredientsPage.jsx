import {
  VStack, 
  Heading, 
  HStack, 
  Button, 
  Divider, 
  Link, 
  Box,
} from "@chakra-ui/react";
import { IoFastFoodOutline } from "react-icons/io5";
import IngredientsDisplay from "./IngredientsDisplay";
import { goToRecipes } from "../../context/userSlice";

const InsertIngredientsPage = ({dispatch}) => {

  const handleContinue = async () => {
      dispatch(goToRecipes())
  };

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

      <IngredientsDisplay />


      <VStack>
        <Divider  marginTop={'20px'}/>
        <HStack direction='column' spacing={4}>
            <Button leftIcon={<IoFastFoodOutline/> } variant='solid' onClick={handleContinue}>
              Generate Recipes!
            </Button>
        </HStack>
      </VStack>
    </Box>
  );
}


export default InsertIngredientsPage
