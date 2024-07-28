import {
  Heading, 
  Box,
} from "@chakra-ui/react";
import { useSelector,useDispatch } from "react-redux";
import { useEffect } from "react";
import { useAuthContext } from "../hooks/useAuthContext";
import { getIngredients } from "../context/ingredientSlice";
import IngredientsDisplay from "../components/Ingredient/IngredientsDisplay";

const IngredientsPage = () => {
  const { user }= useAuthContext()
  const ingredients = useSelector((state) => state.ingredient.ingredients);
  const dispatch = useDispatch()

  useEffect(() => {
      dispatch(getIngredients(user));
  }, [dispatch, user]);


  return (
    <Box display={"flex"} flexDirection={"column"} mx={"8%"}>

      <Heading
        as="h1"
        fontSize="2rem"
        fontWeight="500"
        color="#333"
        marginBottom="1rem"
          >
          Here's whats in your Pantry!
      </Heading>
      <Heading
               as="h3"
               fontSize="1rem"
               fontWeight="500"
               color="#333"
               marginBottom="1rem"
                >
                Make any necessary changes before generating recipes.
      </Heading>
      <IngredientsDisplay ingredients={ingredients} dispatch={dispatch} user={user} />
    </Box>
  );
}


export default IngredientsPage
