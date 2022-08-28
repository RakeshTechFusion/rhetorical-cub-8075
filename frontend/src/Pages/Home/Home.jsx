import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import ImageSlider from './ImageSlider';
import Slider from './Slider';
import Products from './Products';
import axios from 'axios';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './imageSlider.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper';
import { Box, Img } from '@chakra-ui/react';

const arr = [
  'https://d32baadbbpueqt.cloudfront.net/Homepage/70252059-0efb-40b0-b659-6d27afafa0ee.jpg',
  'https://d32baadbbpueqt.cloudfront.net/Homepage/bef74d73-5ede-43c7-8bef-f6208f7dd615.jpg',
  'https://d32baadbbpueqt.cloudfront.net/Homepage/ae9f9040-e1f1-4c94-bd8d-c05be3ce5fe2.gif',
  'https://d32baadbbpueqt.cloudfront.net/Homepage/9f159288-063a-4ca4-926a-7fd43c13d370.jpg',
  'https://d32baadbbpueqt.cloudfront.net/549c6869-246f-4dba-8cde-7a6798f866ec.jpg',
  'https://d32baadbbpueqt.cloudfront.net/fc27be93-0882-45d7-aef9-0ad461636eae.jpg',
  'https://d32baadbbpueqt.cloudfront.net/Homepage/32e53a7b-879e-4c34-a5bc-b95c85ee4a9e.jpg',
  'https://d32baadbbpueqt.cloudfront.net/Homepage/85bc9b9b-d8b3-4fa1-a1b0-a77ca9428664.jpg',
];

const tips = [
  'https://d32baadbbpueqt.cloudfront.net/Homepage/11b811a4-2faa-4985-98f0-01af9f2df943.jpg',
  'https://d32baadbbpueqt.cloudfront.net/Homepage/fb9d5eba-b79a-4e38-b01d-fb6cab221874.jpg',
  'https://d32baadbbpueqt.cloudfront.net/Homepage/2cf0052d-e531-4f6e-9b00-e31f3642f0b3.jpg',
];

const hotDeals = [
  'https://d32baadbbpueqt.cloudfront.net/Homepage/55788463-1185-4aaa-8897-dff418d9743f.jpg',
  'https://d32baadbbpueqt.cloudfront.net/Homepage/84f0d36c-381f-4c62-8702-b0059b13094a.jpg',
  'https://d32baadbbpueqt.cloudfront.net/Homepage/0b0876e2-a751-4ee2-b6cd-1c25a0da8d56.jpg',
  'https://d32baadbbpueqt.cloudfront.net/Homepage/6afa4207-78f4-4934-8d82-75859f611225.jpg',
  'https://d32baadbbpueqt.cloudfront.net/Homepage/67bfc57a-5c05-443e-8e6f-1a96ef49f00f.jpg',
  'https://d32baadbbpueqt.cloudfront.net/Homepage/e4f6c286-358b-43f1-8f53-c26aa0718c57.jpg',
  'https://d32baadbbpueqt.cloudfront.net/Homepage/215bf1f7-3bd1-4ea7-967c-a9aeae4cc901.jpg',
  'https://d32baadbbpueqt.cloudfront.net/Homepage/ae700fcf-b911-452c-a916-f9994a15d20c.gif',
  'https://d32baadbbpueqt.cloudfront.net/Homepage/0b0876e2-a751-4ee2-b6cd-1c25a0da8d56.jpg',
];

const newLaunched = [
  'https://d32baadbbpueqt.cloudfront.net/Homepage/f25612b8-b6b8-4d08-8704-def43067c472.jpg',
  'https://d32baadbbpueqt.cloudfront.net/Homepage/a9cd0d51-c6e6-4d0c-a75c-94ddcc3c1b08.jpg',
  'https://d32baadbbpueqt.cloudfront.net/Homepage/6985f902-c3fe-4a20-bc76-1658a9109fd1.jpg',
  'https://d32baadbbpueqt.cloudfront.net/Homepage/730cf92b-3d4a-4d08-bed8-db88e7911f32.jpg',
];

export const Home = () => {
  const [Data, setData] = useState([]);

  useEffect(() => {
    axios
      .get('https://sugarcosmeticsclone.herokuapp.com/product')
      .then((data) => setData(data.data))
      .catch((e) => console.log(e));
  }, []);
  return (
    <Box>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className='mySwiper'>
        {arr.map((elm, index) => (
          <SwiperSlide key={index}>
            <Img mb={10}  className='Imageslider_img' src={elm} alt='slider images' />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className='ProductsDiv_First_home'>
        <h3 className='allHeads_home'>BESTSELLERS</h3>
        <Products arr={Data} type='lips' />
      </div>
      <div className='TopPicks_home'>
        <h2 className='allHeads_home'>HOT DEALS</h2>
        <Slider arr={hotDeals} />
      </div>
      <div className='Justin'>
        <h2 className='allHeads_home'>JUST-IN</h2>
        <Products arr={Data} type='eyes' />
      </div>
      <h2 className='allHeads_home'>VINEETA's FAVOURITE MAKEUP KIT</h2>
      <div className='AIR_KISS_POWDER_VIDEO_HOME'>
        <iframe
          height='440'
          src='https://www.youtube.com/embed/-_17JnSzUs0'
          title='YouTube video player'
          frameBorder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen></iframe>
      </div>
      <h2 className='ReferFriends_home'>REFER YOUR FRIENDS</h2>
      <div className='referImage_home'>
        <img
          src='https://d32baadbbpueqt.cloudfront.net/Homepage/5bd42d33-5894-4c9e-b7e8-ca4ceca79945.jpg'
          alt='refer image'
        />
      </div>
      
      <div className='newlyLaunched_home'>
        <h2 className='allHeads_home'>NEWLY LAUNCHED</h2>
        <ImageSlider arr={newLaunched} />
      </div>
      <div className='superSaver_home'>
        <h2 className='allHeads_home'>SUPER SAVER</h2>
        <Products arr={Data} type='face' />
      </div>

      <div className='Gifting_home'>
        <h2 className='allHeads_home'>GIFTING</h2>
        <Products arr={Data} type='face brushes' />
      </div>
      <div className='beautyTips_home'>
        <h2 className='allHeads_home'>QUICK BEAUTY TIPS WITH SUGAR</h2>
        <ImageSlider arr={tips} />
      </div>
      <div>
        <h2 className='allHeads_home'>THIS OR THAT</h2>
        <div className='ThisOrThat_home'>
          <img
            src='https://d32baadbbpueqt.cloudfront.net/87e180d8-98a5-44d4-88f2-4af24327cd7c.jpg'
            alt='altofFace'
          />
          <img
            src='https://d32baadbbpueqt.cloudfront.net/38a305ba-a808-4ade-ba72-fc55f5bc6183.jpg'
            alt='GODDESS'
          />
        </div>
      </div>

      <div>
        <h2 className='allHeads_home'>SUGAR BEAUTY BLOG</h2>
        <Slider arr={hotDeals} />
      </div>
      <div>
        <h2 className='allHeads_home'>SKINCARE BASICS</h2>
        <Products arr={Data} type='moisturizer' />
      </div>
      </Box>
      );
    };
    
    // <h2 className='AIR_KISS_POWDER_HOME'>AIR KISS POWDER LIPSTICK</h2>