import React from "react"
import { Box, Heading } from "@chakra-ui/react"

export default function Logo(props) {
  return (
    <Box {...props}>
      <Heading size="lg" fontWeight="bold">
        pantrypal
      </Heading>
    </Box>
  )
}