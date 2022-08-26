import React from 'react';
import { Box, Flex, Image } from '@chakra-ui/react';

const ViaLink = [
  {
    icon: 'AiFillFacebook',
    link: 'https://www.facebook.com/trySUGAR/',
  },
  {
    icon: 'AiOutlineMail',
    link: 'https://www.facebook.com/trySUGAR/',
  },
  {
    icon: 'AiFillInstagram',
    link: 'https://www.instagram.com/trysugar/?hl=en',
  },
  {
    icon: 'GrFacebookOption',
    link: 'https://www.facebook.com/trySUGAR/',
  },
  {
    icon: 'GrFacebookOption',
    link: 'https://www.facebook.com/trySUGAR/',
  },
  {
    icon: 'GrFacebookOption',
    link: 'https://www.facebook.com/trySUGAR/',
  },
  {
    icon: 'GrFacebookOption',
    link: 'https://www.facebook.com/trySUGAR/',
  },
];

export const Footer = () => {
  return (
    <Box bg={'black'} pos={'static'} top='0'>
      <Image
        src='https://sugarcosmetics.com/Footer_sugar_icon.png'
        boxSize={'28'}
        m='auto'
      />
      <Flex></Flex>
    </Box>
  );
};
