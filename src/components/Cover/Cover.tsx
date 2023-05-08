import Btn_Ordena from "../Btn_Ordena/Btn_Ordena";
import React from "react";
import Slider from "react-slick";
import SliderRef from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai"

import "./Cover.css"

const Cover = () => {
    const slider = React.useRef<SliderRef>(null)

    const settings = {
        dots: false,
        infinite: true,
        speed: 600,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5500,
        cssEase: "linear",
        fade: true,
        pauseOnHover: true,
        arrows: false
    };

    return (
        <div className="slider">
            <Slider ref={slider} {...settings}>
                {imagenesCover.map((slide, index) => (
                    <div key={index}>
                        <img src={slide.image} alt={slide.title} />
                        <div className="slide-overlay"></div>
                        <div className="message">
                            <h2>{slide.evento}</h2>
                            <h1>
                                {slide.slogan.split(' ').slice(0, -1).join(' ')}{' '}
                                <span className="last-word">{slide.slogan.split(' ').pop()}</span>
                            </h1>
                            <h3>{slide.message}</h3>
                            <Btn_Ordena />
                        </div>
                    </div>
                ))}
            </Slider>
            <button className="prevBtn" onClick={() => slider?.current?.slickPrev()}><AiFillCaretLeft /></button>
            <button className="nextBtn" onClick={() => slider?.current?.slickNext()}><AiFillCaretRight /></button>
        </div>
    );
}

export default Cover

const imagenesCover = [
    {
        image: "https://www.elpanaderodeeugui.com/wp-content/uploads/2019/12/panaderia-01.jpg",
        title: "imagen_1",
        evento: "Dia de la Madre",
        slogan: "Celebra con Cardanni",
        message: "en este laskdlaka celebra saocmamsanas y nosotros, porque te queremos 1"
    },
    {
        image: "https://www.namesnack.com/images/namesnack-bakery-business-names-4568x3401-2020105.jpeg?crop=21:16,smart&width=420&dpr=2",
        title: "imagen_2",
        evento: "Navidad",
        slogan: "Para la Familia",
        message: "en este laskdlaka celebra saocmamsanas y nosotros, porque te queremos 2"
    },
    {
        image: "https://peruretail.sfo3.cdn.digitaloceanspaces.com/wp-content/uploads/La-Panader%C3%ADa-del-Country-scaled.jpg",
        title: "imagen_3",
        evento: "San Valentin",
        slogan: "Enamoralos con Cardanni",
        message: "en este laskdlaka celebra saocmamsanas y nosotros, porque te queremos 3"
    }
]