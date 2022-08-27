import React,{ useEffect } from "react";
import { Box, VStack, Flex , Image,Text ,Button   } from "@chakra-ui/react";
import { MdDelete } from "react-icons/md";
import { IoIosArrowBack } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios"


export const SingleProduct=({setTotalprice,totalprice,elm,setCartProds})=>{

    // useEffect(() => {
    //     setTotalprice((state) => state + (elm.product.price * elm.quantity))
    //   }, [])

    //   const deleteprod=()=>{
    //         axios.delete(`url/cart/${elm.id}`)
    //         .then((res)=>{
    //             setTotalprice((state) => state - (elm.product.price * elm.quantity));
    //             setCartProds((state) => state.filter((elm) => elm._id != elm._id))
    //         })
    //         .catch((err)=> console.log(err))
    //   }
    

    return( 
            <Flex mt="0.5rem"  w="100%" backgroundColor="#fff">
                    <Box backgroundColor="#fff" h="110px" w="100%">
                        <Flex p="0.5rem" w="100%"> 
                            <Flex h="100px" w="60%" >
                                <Box w="25%"  p="5px 15px">
                                    <Image h="100%" w="100%" borderRadius="0.25rem" src='https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-matte-as-hell-crayon-mini-lipstick-12-baby-houseman-28220228632659_584be809-56c3-4baf-b90b-8db9e95b2afe.jpg?v=1659698252' alt=''/>
                                </Box>
                                <Box w="70%">
                                    <Box fontSize="12px" fontWeight="550" color="#575555" textAlign="left" ml="5px" mt="5px">
                                        <Text mb="2px">Matte As Hell Crayon Mini Lipstick - 12 Baby Houseman</Text>
                                    </Box>
                                    <Flex ml="5px" textAlign="left" fontSize="10px" fontWeight="500" color="#575555" gap="5px">
                                        <Box>
                                        <Image h="15px" w="15px" borderRadius="0.25rem" src='https://in.sugarcosmetics.com/desc-images/Wishlist.svg' alt=''/>
                                        </Box>
                                        <Box>Save to Wishlist</Box>
                                    </Flex>
                                </Box>
                            </Flex>
                            <Box w="40%" textAlign="right" mt="1.5rem" >               
                                <Flex fontSize="12px"  gap="20px">
                                        <Box  w="1em" h="1em" color="black" fontSize="16px" verticalAlign="middle"><MdDelete/></Box>
                                        <Flex justifyContent="space-around" gap="5px">
                                            <Box position="relative" borderRadius="50%" w="19px" h="19px" fontSize="18px" backgroundColor="black" color="white" >
                                                <Box fontSize="13px" w="100%" h="100%" position="absolute" pb="10px" pr="7px">-</Box>
                                            </Box>
                                            <Box>3</Box>
                                            <Box position="relative" borderRadius="50%" w="19px" h="19px" fontSize="18px" backgroundColor="black" color="white" >
                                                <Box fontSize="13px" w="100%" h="100%" position="absolute" pb="7px" pr="5px">+</Box>
                                            </Box>
                                        </Flex>
                                        <Flex>
                                            <Text textDecoration="underline" fontWeight="400" >3</Text>
                                            <Text>×</Text>
                                            <Text textDecoration="line-through" >1599=</Text>
                                            <Text color="#fc2779" >₹199</Text>
                                        </Flex>
                                </Flex>
                            </Box>
                        </Flex>
                    </Box>
                </Flex>
        
    )
}
