import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
// import "swiper/css/pagination";
const Testimonials = () => {
    const SwiperCardRender = () => {
        return (
            <div className="testimonial-card">
                <div className="top">
                    <img src="./images/profile.jpg" alt="profile" />
                    <h2>Ram Singh</h2>
                </div>
                <p>
                    Voluptate aliquip laboris amet commodo quis aute incididunt
                    elit id reprehenderit cillum in elit. Non ex voluptate
                    nostrud sit incididunt non quis. Nisi commodo sint in sunt
                    fugiat aute labore ut ad excepteur duis. Eiusmod consequat
                </p>
            </div>
        );
    };
    const SwiperRender = () => {
        return (
            <>
                <Swiper
                    slidesPerView={2.5}
                    spaceBetween={30}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <SwiperCardRender />
                    </SwiperSlide>
                    <SwiperSlide>
                        <SwiperCardRender />
                    </SwiperSlide>
                    <SwiperSlide>
                        <SwiperCardRender />
                    </SwiperSlide>
                    <SwiperSlide>
                        <SwiperCardRender />
                    </SwiperSlide>
                    <SwiperSlide>
                        <SwiperCardRender />
                    </SwiperSlide>
                    <SwiperSlide>
                        <SwiperCardRender />
                    </SwiperSlide>
                    <SwiperSlide>
                        <SwiperCardRender />
                    </SwiperSlide>
                    <SwiperSlide>
                        <SwiperCardRender />
                    </SwiperSlide>
                    <SwiperSlide>
                        <SwiperCardRender />
                    </SwiperSlide>
                </Swiper>
            </>
        );
    };

    return (
        <section id="Testimonials">
            <div className="title">
                <h1>Testimonials</h1>
                <p>What our clients say about us</p>
            </div>
            <div className="swipers">
                <SwiperRender />
            </div>
        </section>
    );
};

export default Testimonials;
