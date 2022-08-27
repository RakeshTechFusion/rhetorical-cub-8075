import React, { useRef, useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import './imageSlider.css'

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper'
import { Box } from '@chakra-ui/react'

export default function MainSlider({ arr }) {
  
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
        className="mySwiper"
      >
        {arr.map((elm, index) => (
          <SwiperSlide key={index}>
            <img className="mainslider_img" src={elm} alt="slider images" />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  )
}
