import { VStack, Wrap, WrapItem, Heading, Box, HStack, Button, Divider} from "@chakra-ui/react";

const DietPage = () => {

  return (
    <Box display={"flex"} flexDirection={"column"} mx={"8%"}>
        <VStack alignItems="flex-start">
            <Heading
               as="h1"
               fontSize="2rem"
               fontWeight="500"
               color="#333"
               marginBottom="1rem"
                >
                Dietary Restrictions
            </Heading>
            <Heading
               as="h3"
               fontSize="1rem"
               fontWeight="500"
               color="#333"
               marginBottom="1rem"
                >
                Please add any Restrictions that you would like for us to take into account!
            </Heading>
            {/* <Wrap alignItems={"center"}>
                {data!==null?
                    (data.ingredients.map((ingredient, index) => {
                        return (
                            <WrapItem key={index}>
                                <IngredientCard key={index} ingredient={ingredient} />
                            </WrapItem>
                        )
                    })):null
                }
            </Wrap>
            <Divider  marginTop={'20px'}/>
            <HStack direction='column' spacing={4}>
                <Button leftIcon={<IoFastFoodOutline />} variant='solid'>
                Generate Recipes!
                </Button>
            </HStack> */}
        </VStack>
    </Box>
  )
}


export default DietPage
