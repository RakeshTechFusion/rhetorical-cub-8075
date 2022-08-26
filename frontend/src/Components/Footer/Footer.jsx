// import React from 'react';
// import { Box, Flex, Image } from '@chakra-ui/react';

// export const Footer = () => {
//   return (
//     <Box bg={'black'} pos={'static'} top='0'>
//       <Image
//         src='https://sugarcosmetics.com/Footer_sugar_icon.png'
//         boxSize={'28'}
//         m='auto'
//       />
//       <Flex></Flex>
//     </Box>
//   );
// };
import './Footer.css';
import {
  FaFacebookF,
  FaInstagram,
  FaPinterest,
  FaTumblr,
  FaYoutube,
  FaTwitter,
} from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';
import { BsPhone } from 'react-icons/bs';
import {
  Box,
  Button,
  Flex,
  Icon,
  Img,
  Input,
  Link,
  Text,
} from '@chakra-ui/react';

const ViaLink = [
  {
    icon: <FaFacebookF />,
    link: 'https://www.facebook.com/trySUGAR/',
  },
  {
    icon: <FaInstagram />,
    link: 'https://www.instagram.com/trysugar/?hl=en',
  },
  {
    icon: <FaPinterest />,
    link: 'https://www.pinterest.com/sugarcosmetics/',
  },
  {
    icon: <FaTumblr />,
    link: 'https://sugarcosmetics-blog.tumblr.com/',
  },
  {
    icon: <FaYoutube />,
    link: 'https://www.youtube.com/channel/UCKVqnev2idvmUNKc2b91B8g',
  },
  {
    icon: <FaTwitter />,
    link: 'https://twitter.com/trySUGAR',
  },
];

const Footer = () => {
  return (
    <Box className='app__footer' bg={'black'}>
      <Box>
        <Img
          m={'auto'}
          src='https://in.sugarcosmetics.com/Footer_sugar_icon.png'
          alt=''
          w={'32'}
        />
        <Flex className='footer__icons' gap={'5'} justify={'center'}>
          {ViaLink.map((e, i) => {
            return (
              <Link href={e.link} target='_blank' key={i} fontSize={'2xl'} color={'grey'}>
                {e.icon}
              </Link>
            );
          })}
        </Flex>
      </Box>

      <Flex className='footer__second-line' justify={'space-evenly'}>
        <Box className='footer__newsletter'>
          <Text className='footer__newsletter-title'>
            subscribe to our newsletter
          </Text>

          <Flex className='footer__input'>
            <Input type='text' placeholder='Your email address' />
            <Button>sign up</Button>
          </Flex>
        </Box>
        <Box className='footer__apps'>
          <Text>get the new sugar app today</Text>
          <Box className='footer__apps-info'>
            <Text>Tap into a better shopping experience</Text>
            <Box className='footer-apps-img'>
              <Img
                src='https://in.sugarcosmetics.com/playstore.png'
                alt=''
                width={'100px'}
                height={'35px'}
              />
              <Img
                src='https://in.sugarcosmetics.com/apple-store.png'
                alt=''
                width={'100px'}
                height={'35px'}
              />
            </Box>
          </Box>
        </Box>
      </Flex>

      <Box className='footer__information'>
        <Text>information</Text>
        <Box className='footer__information-details'>
          <Text>Stores</Text>
          <Text>Terms & Conditions</Text>
          <Text>Returns</Text>
          <Text>FAQs</Text>
          <Text>About Us</Text>
        </Box>
      </Box>

      <Box className='footer__information'>
        <Text>Get in touch</Text>
        <Box className='footer__information-details'>
          <Box>
            <Text className='title'>
              <BsPhone /> Call us at
            </Text>
            <Text>1800-209-9933</Text>
            <Text>Monday to Friday : 9 AM to 7 PM</Text>
          </Box>
          <Box>
            <Text className='title'>Support</Text>
            <Text>hello@sugarcosmatics.com</Text>
          </Box>
          <Box>
            <Text className='title'>Careers</Text>
            <Text>We're hiring!</Text>
          </Box>
          <Box>
            <Text className='title'>PRESS & MEDIA</Text>
            <Text>pr@sugarcosmatics.com</Text>
          </Box>
          <Box>
            <Text className='title'>INFLUENCER COLLAB</Text>
            <Text>JOIN US</Text>
          </Box>
        </Box>
      </Box>

      <hr />

      <Text className='copyright'>
        Copyright © 2022 SUGAR Cosmetics. All rights reserved.
      </Text>
    </Box>
  );
};

export default Footer;
