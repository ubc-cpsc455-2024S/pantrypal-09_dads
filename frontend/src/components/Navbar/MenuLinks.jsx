import { Stack, Box, Text, Link, Avatar } from "@chakra-ui/react";
import { useLogout } from "../../hooks/useLogout";
import { useAuthContext } from "../../hooks/useAuthContext";
import {
  Menu,
  MenuButton,
  MenuList,
  IconButton,
  MenuItem,
} from "@chakra-ui/react";
import { RxHamburgerMenu } from "react-icons/rx";

const MenuLinks = ({ isOpen }) => {
  const { logout } = useLogout();
  const { user } = useAuthContext();

  const MenuListItem = ({ children, isLast, to = "/", ...rest }) => {
    return (
      <Link href={to}>
        <Text display="block" {...rest}>
          {children}
        </Text>
      </Link>
    );
  };

  //Logout Handling
  const handleClick = () => {
    logout();
  };

  return (
    <Box
      display={{ base: isOpen ? "block" : "none", md: "block" }}
      flexBasis={{ base: "100%", md: "auto" }}
    >
      <Stack
        spacing={8}
        align="center"
        justify={["center", "space-between", "flex-end", "flex-end"]}
        direction={["column", "row", "row", "row"]}
        pt={[4, 4, 0, 0]}
      >
        {user ? (
          <>
            <MenuListItem to="/">Home</MenuListItem>
            <MenuListItem to="/pantry">Pantry</MenuListItem>
            <MenuListItem to="/about">About</MenuListItem>
            <Menu>
              <MenuButton aria-label="Options" variant="outline">
                Account
              </MenuButton>
              <MenuList>
                <MenuItem>
                  <Link href={"/preference"}>Preferencees</Link>
                </MenuItem>
                <MenuItem onClick={handleClick}>Log Out</MenuItem>
              </MenuList>
            </Menu>
            <Avatar
              name={user.name}
              src="https://cdn-icons-png.flaticon.com/512/1198/1198284.png"
            />
          </>
        ) : (
          <>
            <MenuListItem to="/login">Login</MenuListItem>
            <MenuListItem to="/signup">Sign Up!</MenuListItem>
          </>
        )}
      </Stack>
    </Box>
  );
};

export default MenuLinks;
