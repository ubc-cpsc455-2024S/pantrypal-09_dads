import { HStack, VStack, StackDivider, Heading, Image, Center, Wrap, WrapItem, Tag} from "@chakra-ui/react";

const Header = ({recipe}) => {

  return (
    <>
      <Center>
            <VStack>
                
                <Heading alignContent={'flex-start'} marginTop={'5px'} marginBottom={'5px'} size="xl" fontWeight="400" letterSpacing={'tighter'}>
                    {recipe.name}
                </Heading>
                <Wrap>
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
                </Wrap>                
            </VStack>
        </Center>
    </>
  );
};

export default Header;