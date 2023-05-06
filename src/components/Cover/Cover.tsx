// import Btn_Ordena from "../Btn_Ordena/Btn_Ordena";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./Cover.css"

const Cover = () => {

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
    };

    return (
        <div className="slider">
            <Slider {...settings}>
                {imagenesCover.map((slide, index) => (
                    <div key={index}>
                        <img src={slide.image} alt={slide.title} />
                        <div className="message">{slide.message}</div>
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default Cover

const imagenesCover = [
    {
        image: "https://via.placeholder.com/1920x600.png?text=Image+1",
        title: "imagen_1",
        message: "hola imagen 1"
    },
    {
        image: "https://via.placeholder.com/1920x600.png?text=Image+2",
        title: "imagen_2",
        message: "hola imagen 2"
    },
    {
        image: "https://via.placeholder.com/1920x600.png?text=Image+3",
        title: "imagen_3",
        message: "hola imagen 3"
    }
]



      // <section className={style.cover}>
        //     <article>
        //         <h1>Cardanni</h1>
        //         <h5>Para las Madres</h5>
        //         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam distinctio nobis possimus placeat commodi odit repudiandae nulla magni expedita sint optio est aperiam ullam totam, culpa mollitia consectetur molestiae dolorem?</p>

        //         <Btn_Ordena />
        //     </article>
        // </section>