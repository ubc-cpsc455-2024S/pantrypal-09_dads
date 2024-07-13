import { VStack, Wrap, WrapItem, Heading, Box, HStack, Button, Divider} from "@chakra-ui/react";

const NotFoundPage = () => {

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
                404 Page Not Found
            </Heading>
            <Heading
               as="h3"
               fontSize="1rem"
               fontWeight="500"
               color="#333"
               marginBottom="1rem"
                >
                Sorry about that!
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


export default NotFoundPage
