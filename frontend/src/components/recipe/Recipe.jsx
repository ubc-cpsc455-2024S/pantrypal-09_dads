import { Box, VStack, Button, Modal, ModalBody, ModalOverlay, ModalContent} from "@chakra-ui/react";
import Ingredients from "./Ingredients";
import Instructions from "./Instructions";
import Header from "./Header";
import { useDisclosure } from "@chakra-ui/react";
import RecipeCard from "./RecipeCard";

// Replace with call to API to fetch Data


const RecipeInstructions = ({recipe}) => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
    <Box>
      <Box onClick={onOpen}>
        <RecipeCard
            image={recipe.image}
            title={recipe.name}
            time={recipe.time}
            description={recipe.description}
            calories={recipe.nutrition.calories}
            likes={5}
            id={recipe.uuid}
        />
      </Box>
        <Modal isOpen={isOpen} onClose={onClose} >
            <ModalOverlay />
            <ModalContent minW={'50%'}>
                <VStack w='100%' marginBottom={'2em'} marginTop={'2em'}>
                    <Header
                        title={recipe.name}
                        image={recipe.image}
                        time={recipe.time}
                        calories={recipe.nutrition.calories}
                        likes={30}
                        servings = {recipe.serves}
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
            </ModalContent>
        </Modal>   
    </Box>
  );
};

export default RecipeInstructions;