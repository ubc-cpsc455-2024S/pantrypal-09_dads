import React from "react";
import { Box } from "@chakra-ui/react";
import { IoCloseOutline } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";

const MenuToggle = ({ toggle, isOpen }) => {
  return (
    <Box display={{ base: "block", md: "none" }} onClick={toggle}>
      {isOpen ? <IoCloseOutline /> : <RxHamburgerMenu />}
    </Box>
  );
};

export default MenuToggle;
