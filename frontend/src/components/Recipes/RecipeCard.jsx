import {
  Box,
  Center,
  Image,
  Text,
  Card,
  Heading,
  Stack,
  CardBody,
  StackDivider,
  HStack,
  Link,
  Badge,
  Tag,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";

// eslint-disable-next-line react/prop-types
const RecipeCard = ({ recipe }) => {
  return (
    <Card
      direction={{ base: "column", sm: "row" }}
      overflow="scroll"
      variant="outline"
      w="300px"
      h="300px"
    >
      <CardBody h="100%">
        <Stack divider={<StackDivider />} spacing="4">
          <Box>
            <Heading as="h1" size="lg" mb="15px">
              {recipe.name}
            </Heading>
            <StackDivider />
            <Text fontSize="lg" marginBottom={"2em"}>
              {recipe.description}
            </Text>
            <Center height="10px" marginBottom={"2em"}>
              <Wrap>
                <WrapItem>
                  <Tag
                    size={"md"}
                    key={"md"}
                    borderRadius="full"
                    variant="outline"
                    color={"black"}
                  >
                    {recipe.time + " mins"}
                  </Tag>
                </WrapItem>
                <WrapItem>
                  <Tag
                    size={"md"}
                    key={"md"}
                    borderRadius="full"
                    variant="outline"
                    color={"black"}
                  >
                    {Math.round(recipe.serves) + " Servings"}
                  </Tag>
                </WrapItem>
                <WrapItem>
                  {recipe.vegetarian ? (
                    <Tag
                      size={"md"}
                      key={"md"}
                      borderRadius="full"
                      variant="solid"
                      color={"black"}
                      bg="green.200"
                    >
                      Vegetarian
                    </Tag>
                  ) : (
                    <Tag
                      size={"md"}
                      key={"md"}
                      borderRadius="full"
                      variant="solid"
                      color={"black"}
                      bg="yellow.300"
                    >
                      Non-Vegetarian
                    </Tag>
                  )}
                </WrapItem>
              </Wrap>
            </Center>
          </Box>
        </Stack>
      </CardBody>
    </Card>
  );
};

export default RecipeCard;
