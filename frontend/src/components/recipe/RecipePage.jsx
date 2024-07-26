import {useEffect} from 'react';
import { Box, VStack, Wrap, WrapItem, Heading, HStack, Button, Divider } from "@chakra-ui/react";
import Breadcrumbs from "../misc/BreadCrumbs";
import { IoFastFoodOutline } from "react-icons/io5";
import { useSelector, useDispatch } from "react-redux";
import RecipeInstructions from './Recipe';
import { getRecipes } from '../../context/recipeSlice';
import { useAuthContext } from '../../hooks/useAuthContext';

const RecipePage = () => {
    const recipes = useSelector((state) => state.recipe.recipes);
    const dispatch = useDispatch()
    const {user} = useAuthContext();

    useEffect(() => {
        console.log("here")
        dispatch(getRecipes(user));
    }, [dispatch, user]);

    return (
        
        <Box display={"flex"} flexDirection={"column"} mx={"8%"}>
            <VStack alignItems="flex-start">
                <Breadcrumbs link={""} />
                <Heading
                    as="h1"
                    fontSize="2rem"
                    fontWeight="500"
                    color="#333"
                    marginBottom="1rem"
                >
                    Based on your available ingredients, you can make...
                </Heading>
                <Wrap alignItems={"center"}>
                    {recipes.length > 0 ?
                        recipes.map((recipe) => (
                            <>
                                <WrapItem key={recipe.uuid}>
                                    <RecipeInstructions recipe={recipe}>
                                    </RecipeInstructions>
                                </WrapItem>
                            </>
                        )) : null
                    }
                </Wrap>
                <Divider marginTop={'20px'} />
                <HStack direction='column' spacing={4}>
                    <Button leftIcon={<IoFastFoodOutline />} variant='solid'>
                        Generate More
                    </Button>
                </HStack>
            </VStack>
        </Box>
    );
};

export default RecipePage;
