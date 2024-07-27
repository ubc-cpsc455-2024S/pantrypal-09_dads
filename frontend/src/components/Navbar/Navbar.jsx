import Logo from "./Logo"
import MenuToggle from "./MenuToggle"
import MenuLinks from "./MenuLinks"
import { Flex } from "@chakra-ui/react"
import React from "react"


const Navbar = (props) => {
    const [isOpen, setIsOpen] = React.useState(false)
  
    const toggle = () => setIsOpen(!isOpen)
  
    return (
        <Flex
        as="nav"
        align="center"
        justify="space-between"
        wrap="wrap"
        w="100%"
        mb={8}
        p={8}
        bg={["primary.500", "primary.500", "transparent", "transparent"]}
        color={["black", "black", "primary.700", "primary.700"]}
        {...props}
        boxShadow={'md'}
        borderRadius={'md'}
        >
            <Logo
            color={["black", "black", "primary.500", "primary.500"]}
            />
            <MenuToggle toggle={toggle} isOpen={isOpen} />
            <MenuLinks isOpen={isOpen} />
        </Flex>
    )
}


  
export default Navbar;