import React from "react";
import { Box, VStack, Flex , Image,Text ,Button   } from "@chakra-ui/react";
import { MdDelete } from "react-icons/md";

export const Cart = () => {
  return (
    <VStack w="100%" mt="1.5rem" mr="1rem" ml="1rem" borderRadius="20px" boxShadow='md'>
      <Flex w="100%" direction={["column","column","row"]}>
        <Flex w="50%" direction="column" border="1px solid red" ml="1rem" mr="1rem">
            <Flex w="100%" mt="1rem" fontSize="14px" color="#575555" border="1px solid green" justifyContent="space-between">
                <Flex gap="10px"> 
                    <Box>
                        <Image src='https://in.sugarcosmetics.com/desc-images/shopping_cart.svg' alt='' w="20px"/>
                    </Box>
                    Order Summary
                </Flex>
                <Box textDecoration="underline">Cart Total : Rs. 2796.00</Box>
            </Flex>
            <Flex mt="0.5rem" border="1px solid red" w="100%">
                <Box backgroundColor="rgb(250,249,249)" h="110px" w="100%">
                    <Flex p="0.5rem" w="100%"> 
                        <Flex h="100px" w="60%" >
                            <Box w="25%"  p="5px 15px">
                                <Image h="100%" w="100%" borderRadius="0.25rem" src='https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-matte-as-hell-crayon-mini-lipstick-12-baby-houseman-28220228632659_584be809-56c3-4baf-b90b-8db9e95b2afe.jpg?v=1659698252' alt=''/>
                            </Box>
                            <Box w="70%">
                                <Box fontSize="12px" fontWeight="550" color="#575555" textAlign="left" ml="5px" mt="5px">
                                    <Text mb="2px">Matte As Hell Crayon Mini Lipstick - 12 Baby Houseman</Text>
                                </Box>
                                <Box ml="5px" textAlign="left" fontSize="10px" fontWeight="500" color="#fc2779">BONUS UNLOCKED</Box>
                            </Box>
                        </Flex>
                        <Box w="40%" textAlign="right" mt="1.5rem">
                            <Button border="1px solid #dee2e6" backgroundColor="#faf9f9">
                                <Flex fontSize="12px">
                                    <Text textDecoration="underline" fontWeight="400" >+Add Item </Text>
                                    <Text> (</Text>
                                    <Text textDecoration="line-through" >1599</Text>
                                    <Text color="#fc2779" >₹199)</Text>
                                </Flex>
                            </Button>
                        </Box>
                    </Flex>
                </Box>
            </Flex>
            <Flex mt="0.5rem" border="1px solid red" w="100%">
                <Box backgroundColor="rgb(250,249,249)" h="110px" w="100%">
                    <Flex p="0.5rem" w="100%"> 
                        <Flex h="100px" w="60%" >
                            <Box w="25%"  p="5px 15px">
                                <Image h="100%" w="100%" borderRadius="0.25rem" src='https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-matte-as-hell-crayon-mini-lipstick-12-baby-houseman-28220228632659_584be809-56c3-4baf-b90b-8db9e95b2afe.jpg?v=1659698252' alt=''/>
                            </Box>
                            <Box w="70%">
                                <Box fontSize="12px" fontWeight="550" color="#575555" textAlign="left" ml="5px" mt="5px">
                                    <Text mb="2px">Matte As Hell Crayon Mini Lipstick - 12 Baby Houseman</Text>
                                </Box>
                                <Box ml="5px" textAlign="left" fontSize="10px" fontWeight="500" color="#fc2779">BONUS UNLOCKED</Box>
                            </Box>
                        </Flex>
                        <Box w="40%" textAlign="right" mt="1.5rem">
                            <Button border="1px solid #dee2e6" backgroundColor="#faf9f9">
                                <Flex fontSize="12px">
                                    <Text textDecoration="underline" fontWeight="400" >+Add Item </Text>
                                    <Text> (</Text>
                                    <Text textDecoration="line-through" >1599</Text>
                                    <Text color="#fc2779" >₹199)</Text>
                                </Flex>
                            </Button>
                        </Box>
                    </Flex>
                </Box>
            </Flex>
            <Flex mt="0.5rem" border="1px solid red" w="100%">
                <Box backgroundColor="rgb(250,249,249)" h="110px" w="100%">
                    <Flex p="0.5rem" w="100%"> 
                        <Flex h="100px" w="60%" >
                            <Box w="25%"  p="5px 15px">
                                <Image h="100%" w="100%" borderRadius="0.25rem" src='https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-matte-as-hell-crayon-mini-lipstick-12-baby-houseman-28220228632659_584be809-56c3-4baf-b90b-8db9e95b2afe.jpg?v=1659698252' alt=''/>
                            </Box>
                            <Box w="70%">
                                <Box fontSize="12px" fontWeight="550" color="#575555" textAlign="left" ml="5px" mt="5px">
                                    <Text mb="2px">Matte As Hell Crayon Mini Lipstick - 12 Baby Houseman</Text>
                                </Box>
                                <Box ml="5px" textAlign="left" fontSize="10px" fontWeight="500" color="#fc2779">BONUS UNLOCKED</Box>
                            </Box>
                        </Flex>
                        <Box w="40%" textAlign="right" mt="1.5rem">
                            <Button border="1px solid #dee2e6" backgroundColor="#faf9f9">
                                <Flex fontSize="12px">
                                    <Text textDecoration="underline" fontWeight="400" >+Add Item </Text>
                                    <Text> (</Text>
                                    <Text textDecoration="line-through" >1599</Text>
                                    <Text color="#fc2779" >₹199)</Text>
                                </Flex>
                            </Button>
                        </Box>
                    </Flex>
                </Box>
            </Flex>
            {/* cart */}
            <Text>cart</Text>
            <Flex w="100%" border="1px solid black" backgroundColor="#fff" direction="column">
                <Flex mt="0.5rem" border="1px solid red" w="100%" backgroundColor="#fff">
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
                            <Box w="40%" textAlign="right" mt="1.5rem" border="1px solid red">               
                                <Flex fontSize="12px" border="1px solid red" gap="20px">
                                        <Box  w="1em" h="1em" color="black" fontSize="16px" verticalAlign="middle"><MdDelete/></Box>
                                        <Flex justifyContent="space-around" gap="5px">
                                            <Box position="relative" borderRadius="50%" w="19px" h="19px" fontSize="18px" backgroundColor="black" color="white" >
                                                <Box fontSize="13px" w="100%" h="100%" position="absolute" pb="7px" pr="7px">-</Box>
                                            </Box>
                                            <Box>3</Box>
                                            <Box position="relative" borderRadius="50%" w="19px" h="19px" fontSize="18px" backgroundColor="black" color="white" >
                                                <Box fontSize="13px" w="100%" h="100%" position="absolute" pb="7px" pr="7px">+</Box>
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
                <Flex mt="0.5rem" border="1px solid red" w="100%" backgroundColor="#fff">
                    <Box backgroundColor="rgb(250,249,249)" h="110px" w="100%">
                        <Flex p="0.5rem" w="100%"> 
                            <Flex h="100px" w="60%" >
                                <Box w="25%"  p="5px 15px">
                                    <Image h="100%" w="100%" borderRadius="0.25rem" src='https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-matte-as-hell-crayon-mini-lipstick-12-baby-houseman-28220228632659_584be809-56c3-4baf-b90b-8db9e95b2afe.jpg?v=1659698252' alt=''/>
                                </Box>
                                <Box w="70%">
                                    <Box fontSize="12px" fontWeight="550" color="#575555" textAlign="left" ml="5px" mt="5px">
                                        <Text mb="2px">Matte As Hell Crayon Mini Lipstick - 12 Baby Houseman</Text>
                                    </Box>
                                    <Box ml="5px" textAlign="left" fontSize="10px" fontWeight="500" color="#fc2779">BONUS UNLOCKED</Box>
                                </Box>
                            </Flex>
                            <Box w="40%" textAlign="right" mt="1.5rem">
                                <Button border="1px solid #dee2e6" backgroundColor="#faf9f9">
                                    <Flex fontSize="12px">
                                        <Text textDecoration="underline" fontWeight="400" >+Add Item </Text>
                                        <Text> (</Text>
                                        <Text textDecoration="line-through" >1599</Text>
                                        <Text color="#fc2779" >₹199)</Text>
                                    </Flex>
                                </Button>
                            </Box>
                        </Flex>
                    </Box>
                </Flex>
            </Flex>
        </Flex>
        <Flex w="50%" direction="row" ml="1rem" mr="1rem"  border="1px solid red" >
            B
        </Flex>
      </Flex>
    </VStack>
  );
};
