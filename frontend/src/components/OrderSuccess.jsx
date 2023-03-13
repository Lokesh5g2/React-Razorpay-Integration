import { Box, Heading, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { useSearchParams } from "react-router-dom";

const OrderSuccess = () => {
    const searchQuery = useSearchParams()[0];
  document.title = "Thank you!";

  return (
    <Box>
    <VStack h="100vh" justifyContent={"center"}>
      {searchQuery.get("reference")?<React.Fragment><Heading textTransform={"uppercase"}>order successful</Heading>
        <Text>Ref No: {searchQuery.get("reference")}</Text></React.Fragment>:
        <a href="/">Goto Home</a>
      }
        
      </VStack>
    </Box>
  );
}

export default OrderSuccess
