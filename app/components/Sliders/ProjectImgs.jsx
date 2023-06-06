'use client'
import React from 'react'


import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Navigation, EffectFade , Pagination} from "swiper";

import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
const ProjectImgs = ({data}) => {
  return (
    <Swiper
    dir="rtl"
    className={`inline project-img-slider w-[600px] max-[600px]:w-[350px]`}
    navigation
    effect=""
    speed={300}
    slidesPerView={1}
    modules={[Navigation, EffectFade, Pagination]}
    pagination
  >
    {data.map((img) => (
      <SwiperSlide className="mx-auto swiper-container" key={img.id}>
          <img src={img.img} alt="project img صور المشروع"  className="w-full h-full rounded-lg" />
      </SwiperSlide>
    ))}
  </Swiper>
  )
}

export default ProjectImgs