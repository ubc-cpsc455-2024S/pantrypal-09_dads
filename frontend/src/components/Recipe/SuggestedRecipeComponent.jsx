import { Box, VStack, Button, Modal, ModalBody, ModalOverlay, ModalContent} from "@chakra-ui/react";
import Ingredients from "./Ingredients";
import Instructions from "./Instructions";
import Header from "./Header";
import { useDisclosure } from "@chakra-ui/react";
import SuggestedRecipeCard from "./SuggestedRecipeCard";

const SuggestedRecipeComponent = ({recipe, index, onChoose, onDelete}) => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
    <Box>
      <Box>
        <SuggestedRecipeCard
            recipe={recipe}
            index={index}
            onChoose={onChoose}
            onDelete={onDelete}
            onOpen={onOpen}
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
            </ModalContent>
        </Modal>   
    </Box>
  );
};

export default SuggestedRecipeComponent;