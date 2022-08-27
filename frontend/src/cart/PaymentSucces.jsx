import React from "react"
import { Box, VStack, Flex , Image,Text ,Button   } from "@chakra-ui/react";
import { Spinner } from '@chakra-ui/react'
import { useNavigate } from "react-router"


export const PaymentSuccess=()=>{
    const navigate = useNavigate();
    const [success,setsuccess] = React.useState(false)
    setTimeout(() => {
        setsuccess(true)
      }, 2000);

      setTimeout(() => {
        navigate("/");
      }, 4000);

    return( 
        <Box w="100%" align="center">
            {
                success==false ? <Box w="100%" h="500px"><Spinner
                thickness='4px'
                mt="250px"
                speed='0.65s'
                emptyColor='gray.200'
                color='blue.500'
                size='xl'
              /></Box> : <Image mt="50px" w="60%" h="400px" src="https://cdn.dribbble.com/users/335541/screenshots/7102045/media/5b7237fe7bbfa31531d6e765576f1bc4.jpg?compress=1&resize=400x300&vertical=top" alt="" />
            }        

        </Box>
    )
}
