import { useEffect }from 'react'
import { Box, VStack, Wrap, WrapItem, Heading, HStack, Button, Divider } from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import { getRecipes, deleteRecipe} from '../context/recipeSlice';
import { useAuthContext } from '../hooks/useAuthContext';
import RecipeComponent from '../components/Recipe/RecipeComponent';
import RecipeGeneration from '../components/Recipe/RecipeGeneration';

const Home = () => {
  const recipes = useSelector((state) => state.recipe.recipes);
  const dispatch = useDispatch()
  const {user} = useAuthContext();

  useEffect(() => {
      dispatch(getRecipes(user));
  }, [dispatch, user]);

  const handleDelete = (id) => {
    dispatch(deleteRecipe({user:user, id:id}));
  }

  return (
    <Box display={"flex"} flexDirection={"column"} mx={"8%"} alignItems="flex-start">
        <Heading
            as="h1"
            fontSize="2rem"
            fontWeight="500"
            color="#333"
            marginBottom="1rem"
        >
          Saved Recipes
        </Heading>
        <Divider marginBottom={'20px'} />
        <VStack alignItems="flex-start">
            <Wrap alignItems={"center"}>
                {recipes.length > 0 ?
                    recipes.map((recipe) => (
                        <div key={recipe._id}>
                            <WrapItem key={recipe._id}>
                                <RecipeComponent recipe={recipe} handleDelete={handleDelete}/>
                            </WrapItem>
                        </div>
                    )) : null
                }
            </Wrap>
            <Divider marginTop={'20px'} />
            <HStack direction='column' spacing={4}>
                <RecipeGeneration dispatch={dispatch}/>
            </HStack>
        </VStack>
    </Box>
  )
}

export default Home