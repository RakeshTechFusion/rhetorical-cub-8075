import {
  Box,
  Button,
  Flex,
  Img,
  Input,
  InputGroup,
  InputRightElement,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Stack,
} from "@chakra-ui/react";
import { AiOutlineUser, AiFillHeart } from "react-icons/ai";
import { ImCross } from "react-icons/im";
import { FaUserAlt } from "react-icons/fa";
import { BsFillBagCheckFill } from "react-icons/bs";
import { MdLocalOffer } from "react-icons/md";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const ButtonData = [
  {
    name: "MAKUP",
    onHover: [
      {
        name: "LIPS",
        onHover: [
          "LIPSTICKS",
          "WONDER WOMAN LIPSTICK RANGE",
          "LIP CARE",
          "LIQUID LIP COLOURES",
          "LIP GLISS & LINERS",
          "VALUE SETS",
          "GETTING",
        ],
      },
      {
        name: "FACE",
        onHover: [
          "PRIMERS",
          "COMPACT",
          "FOUNDATION & BB CREAM",
          "CONCELERS & CORRECTORS",
          "BLUSH",
          "HIGHLIGHTERS & CONTOUR",
          "BRONZER",
          "FACE PALETTES",
          "VLUE SETS",
        ],
      },
      {
        name: "EYES",
        onHover: [
          "EYELINERS",
          "KAJAL",
          "EYEBROWS",
          "MASCARA",
          "EYESHADOW PALETTES",
          "VALUE SETS",
        ],
      },
    ],
    route: "/makup",
  },
  {
    name: "BRUSHES",
    onHover: [
      {
        name: "FACE BRUSHES",
        onHover: [
          "Blend Trend Face Brush - 001 Blush",
          "Blend Trend Face Brush - 0003 Countur",
          "Blend Trend Face Brush - 006 Highlighter",
          "Blend Trend Face Brush - 007 Powder",
          "Blend Trend Foundation Brush - 052 Kabuki",
          "Blend Trend Dual Face Brush - 075 Powder + Foundation",
        ],
      },
      {
        name: "EYES BRUSHES",
        onHover: [
          "Blend Trend Eyeshadow Brush - 041 Flat",
          "Blend Trend Eyeshadow Brush - 042 Round",
          "Blend Trend Eyeshadow Brush - 043 Round XI",
          "Blend Trend Dual Eyeshadow Brush - 412 Flat + Round",
          "Blend Trend Dual Eyeshadow Brush - 413 Flat + Round XI",
        ],
      },
    ],
    route: "/brushes",
  },
  {
    name: "SKINCARE",
    onHover: [
      {
        name: "MOSTURIZERS",
        onHover: [],
      },
      {
        name: "SUNSCREEN",
        onHover: [],
      },
      {
        name: "SETTING MISTS",
        onHover: [],
      },
      {
        name: "COFFEE CULTURE RANGE",
        onHover: [],
      },
      {
        name: "SHEET MASK COMBO",
        onHover: [],
      },
      {
        name: "CITRUS GOT REAL RANGE",
        onHover: [],
      },
      {
        name: "AQUAHOLIC RANGE",
        onHover: [],
      },
      {
        name: "MASKS",
        onHover: [],
      },
    ],
    route: "/skincare",
  },
  {
    name: "GIFTING",
    onHover: [
      {
        name: "SUGAR MERCH STATION",
        onHover: [],
      },
      {
        name: "MAKEUP KITS",
        onHover: [],
      },
      {
        name: "BESTSELLERS",
        onHover: [],
      },
      {
        name: "VALUE SETS",
        onHover: [],
      },
      {
        name: "SUGAR SETS",
        onHover: [],
      },
      {
        name: "E-GIFT CARDS",
        onHover: [],
      },
    ],
    route: "/gifting",
  },
  {
    name: "BLOG",
    onHover: [
      {
        name: "FEATURED",
        onHover: [],
      },
      {
        name: "MAKEUP",
        onHover: [],
      },
      {
        name: "SINCARE",
        onHover: [],
      },
    ],
    route: "/blog",
  },
  {
    name: "OFFERS",
    onHover: [],
    route: "/offers",
  },
  {
    name: "STORES",
    onHover: [],
    route: "/stores",
  },
];

export const Navbar = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(true);
  return (
    <Box>
      {show ? (
        <Box bg={"black"} color="white" textAlign={"center"} h={"1.8em"}>
          FREE pore minimizing primer on a spend of Rs.799
          <Button
            position={"absolute"}
            right={"0"}
            mt={"-1"}
            variant={"unstyled"}
            onClick={() => setShow(!show)}
          >
            <ImCross size={12} />
          </Button>
        </Box>
      ) : (
        ""
      )}
      <Flex justify={"space-around"} p="1em">
        <Link to={"/"}>
          <Img
            src="https://media.sugarcosmetics.com/upload/SUGARLogo1.png"
            alt="Logo"
          />
        </Link>
        <InputGroup w={"40em"}>
          <Input borderRadius={"3xl"} />
          <InputRightElement bg={"black"} w={"8em"} borderEndRadius={"3xl"}>
            <Button variant={"unstyled"} color={"white"} w={"100%"}>
              Search
            </Button>
          </InputRightElement>
        </InputGroup>
        <Button onClick={() => navigate("/loginotp")}>
          <Box mr={2}>
            <FaUserAlt size={"18"} />
          </Box>
          Login/Register
        </Button>
        <Flex>
          <Button p={0} variant={"ghost"}>
            <AiFillHeart size={18} />
          </Button>
          <Button p={0} variant={"ghost"} onClick={() => navigate("/cart")}>
            <BsFillBagCheckFill size={18} />
          </Button>
          <Button p={0} variant={"ghost"}>
            <MdLocalOffer size={18} />
          </Button>
        </Flex>
      </Flex>
      <Stack direction={"row"}>
        {ButtonData.map((e, i) => {
          return (
            <Link key={i} to={e.route}>
              <Popover placement="bottom-start">
                <PopoverTrigger>
                  <Button variant={"ghost"}>{e.name}</Button>
                </PopoverTrigger>
                <PopoverContent w={""} fontSize={""}>
                  {e.onHover.map((el, j) => {
                    return (
                      // <Button key={j} fontSize={'13'} variant={'ghost'}>
                      //   {el.name}
                      // </Button>
                      <Popover key={j} placement="auto-end">
                        <PopoverTrigger>
                          <Button variant={"ghost"}>{el.name}</Button>
                        </PopoverTrigger>
                        <PopoverContent w={""}>
                          {el.onHover.map((elem, k) => {
                            return (
                              <Button key={k} variant={"ghost"}>
                                {elem}
                              </Button>
                            );
                          })}
                        </PopoverContent>
                      </Popover>
                    );
                  })}
                </PopoverContent>
              </Popover>
            </Link>
          );
        })}
      </Stack>
    </Box>
  );
};
