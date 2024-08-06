import { Box, VStack, Button, Modal, Link, ModalOverlay, ModalContent, Flex} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import Header from "./Header";
import RecipeCard from "./RecipeCard";
import Ingredients from "./Ingredients";
import Instructions from "./Instructions";

const RecipeComponent = ({recipe, handleDelete}) => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    const handleDeleteRecipe = () => {
        handleDelete(recipe._id);
    }
    return (
    <Box>
      <Box onClick={onOpen}>
        <RecipeCard
            recipe={recipe}
        />
      </Box>
        <Modal isOpen={isOpen} onClose={onClose} >
            <ModalOverlay />
            <ModalContent minW={'50%'}>
                <VStack w='100%' marginBottom={'2em'} marginTop={'2em'}>
                    <Header
                        recipe={recipe}
                    />
                    <Ingredients
                        usedIngredients={recipe.ingredients}
                        equipment={recipe.equipment}
                        key={1}
                    />

                    <Instructions
                        instructions={recipe.steps}
                        key={2}
                    />
                </VStack>
                <Flex w="100%" ml={"2em"} mt={"1em"} mb={"2em"}>
                    <Link  onClick={handleDeleteRecipe}>I'm done making this recipe!</Link>
                </Flex>     
            </ModalContent>
        </Modal>   
    </Box>
  );
};

export default RecipeComponent;