import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

// Import Swiper JS
import { Pagination, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: AVTR1,
    name: "Test",
    review: "Lorem ipsum dolor sit amet, consectetur adip"
  },
  {
    avatar: AVTR2,
    name: "Test",
    review: "Lorem ipsum dolor sit amet, consectetur adip"
  },
  {
    avatar: AVTR3,
    name: "Test",
    review: "Lorem ipsum dolor sit amet, consectetur adip"
  },
  {
    avatar: AVTR4,
    name: "Test",
    review: "Lorem ipsum dolor sit amet, consectetur adip"
  },
]

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Bewertungen von Kunden</h5>
      <h2>Referenzen</h2>

      <Swiper className="container testimonials__container"
        modules={[Pagination, Navigation]}
        navigtion
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({avatar, name, review}, index) => {
          return (
          
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt="Avatar" />
              </div>
              <h5 className="client__name">{name}</h5>
                <small className="client__review">
                  {review}
                </small>
            </SwiperSlide>
          
          )})}
      </Swiper>

    </section>
  )
}

export default Testimonials