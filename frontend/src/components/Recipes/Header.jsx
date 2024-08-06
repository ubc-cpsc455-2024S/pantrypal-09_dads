import { Tooltip, VStack, IconButton , Heading, Image, Center, Wrap, WrapItem, Tag, useToast} from "@chakra-ui/react";
import { FaShare } from "react-icons/fa";

const Header = ({recipe}) => {
  const toast = useToast()

  const clickShare = () => {
    navigator.clipboard.writeText(window.location.origin+"/recipes/"+recipe._id)
    toast({
      title: 'Copied Link!',
      status: 'success',
      duration: 1500,
      isClosable: true,
    })
    console.log("here")
  }

  return (
    <>
      <Center>
            <VStack>
                
                <Heading alignContent={'flex-start'} marginTop={'5px'} marginBottom={'5px'} size="xl" fontWeight="400" letterSpacing={'tighter'}>
                    {recipe.name}
                </Heading>
                <Wrap align='center'>
                    <WrapItem>
                    <Tag  size={'md'} key={'md'} borderRadius='full' variant='outline' color={"black"}>{recipe.time + " mins"}</Tag>
                    </WrapItem>
                    <WrapItem>
                    <Tag  size={'md'} key={'md'} borderRadius='full' variant='outline' color={"black"}>{Math.round(recipe.nutrition.calories) + " Cals"}</Tag>
                    </WrapItem>
                    <WrapItem>
                    <Tag  size={'md'} key={'md'} borderRadius='full' variant='outline' color={"black"}>{Math.round(recipe.serves) + " Servings"}</Tag>
                    </WrapItem>
                    <WrapItem>
                    {recipe.vegetarian ? <Tag  size={'md'} key={'md'} borderRadius='full' variant='solid' color={"black"} bg="green.200">Vegetarian</Tag> : <Tag  size={'md'} key={'md'} borderRadius='full' variant='solid' color={"black"} bg="yellow.300">Non-Vegetarian</Tag>}
                    </WrapItem>
                    <WrapItem>
                      <Tooltip label="Share Recipe!" aria-label='A tooltip'>
                        <IconButton variant='outline' borderRadius='full' aria-label='Search database' icon={<FaShare  />} onClick={clickShare} />
                      </Tooltip>
                    </WrapItem>
                </Wrap>                
            </VStack>
        </Center>
    </>
  );
};

export default Header;