import {
  Tooltip,
  VStack,
  IconButton,
  Heading,
  Text,
  Center,
  Wrap,
  WrapItem,
  Tag,
  useToast,
  Flex,
} from "@chakra-ui/react";
import { FaShare } from "react-icons/fa";
import { FcLikePlaceholder, FcLike } from "react-icons/fc";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useSelector, useDispatch } from "react-redux";
import { checkSaveStatus, saveRecipe } from "../../context/recipeSlice";
import { useEffect } from "react";

const Header = ({ recipe, suggestion = false }) => {
  const toast = useToast();
  const savedStatus = useSelector((state) => state.recipe.savedStatus);
  const { user } = useAuthContext();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkSaveStatus({ recipe_id: recipe._id, user: user }));
  }, [dispatch, user]);

  const clickShare = () => {
    navigator.clipboard.writeText(
      window.location.origin + "/recipes/" + recipe._id,
    );
    toast({
      title: "Copied Link!",
      status: "success",
      duration: 1500,
      isClosable: true,
    });
  };

  const clickSave = () => {
    dispatch(saveRecipe({ recipe_id: recipe._id, user: user }));
    toast({
      title: "Saved Recipe!",
      status: "success",
      duration: 1500,
      isClosable: true,
    });
  };

  return (
    <>
      <Center>
        <VStack margin={"5px"}>
          <Wrap align={"center"} justify="center">
            <Heading
              align="center"
              margin={"5px"}
              size="xl"
              fontWeight="400"
              letterSpacing={"tighter"}
              overflow={"none"}
            >
              {recipe.name}
            </Heading>
            {/* Social Links */}
            {suggestion ? null : (
              <>
                {/* Show save button only if logged in */}
                {user ? (
                  <WrapItem>
                    {savedStatus ? (
                      <Flex align="center">
                        <FcLike />
                        <Text marginLeft={"2px"}>{recipe.saved.length}</Text>
                      </Flex>
                    ) : (
                      <Tooltip label="Save Recipe!" aria-label="A tooltip">
                        <IconButton
                          background={"none"}
                          borderRadius={"full"}
                          icon={<FcLikePlaceholder />}
                          onClick={clickSave}
                        />
                      </Tooltip>
                    )}
                  </WrapItem>
                ) : null}
                {/* Share Button */}
                <WrapItem>
                  <Tooltip label="Share Recipe!" aria-label="A tooltip">
                    <IconButton
                      variant="outline"
                      borderRadius="full"
                      aria-label="Search database"
                      icon={<FaShare />}
                      onClick={clickShare}
                    />
                  </Tooltip>
                </WrapItem>
              </>
            )}
          </Wrap>
          <Text size="xs" as="sub" mb="10px">
            Generated by: {recipe.created_by_name}
          </Text>
          <Wrap align="center">
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
        </VStack>
      </Center>
    </>
  );
};

export default Header;
