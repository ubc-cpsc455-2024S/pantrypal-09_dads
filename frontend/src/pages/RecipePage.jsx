import {
  VStack,
  Wrap,
  WrapItem,
  Heading,
  Box,
  Text,
  Button,
  Divider,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRecipe } from "../context/recipeSlice";
import Header from "../components/Recipes/Header";
import Ingredients from "../components/Recipes/Ingredients";
import Instructions from "../components/Recipes/Instructions";

const RecipePage = () => {
  const { id } = useParams();
  const recipe = useSelector((state) => state.recipe.singleRecipe);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRecipe({ id: id }));
  }, [dispatch]);

  return (
    <Box display={"flex"} flexDirection={"column"} mx={"8%"}>
      <VStack alignItems="flex-start" mx={"auto"}>
        {recipe ? (
          <VStack w="100%" marginBottom={"2em"} marginTop={"2em"}>
            <Header recipe={recipe} />
            <Ingredients
              usedIngredients={recipe.ingredients}
              equipment={recipe.equipment}
              key={1}
            />
            <Instructions instructions={recipe.steps} key={2} />
          </VStack>
        ) : (
          <></>
        )}
      </VStack>
    </Box>
  );
};

export default RecipePage;
