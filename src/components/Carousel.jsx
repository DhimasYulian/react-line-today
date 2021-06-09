import React from 'react'
import Carousel from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const CustomCarousel = (props) => {
    const options = {
        speed: 700,
        slidesToShow: props.show,
        slidesToScroll: 1,
        initialSlide: 0,
        infinite: true,
        dots: false,
        autoplay: props.autoplay ? true: false,
        autoplaySpeed: 5000,
        cssEase: "linear",
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: props.show,
                slidesToScroll: 1,
                infinite: true,
              }
            },
            {
              breakpoint: 600,
              settings: {
                arrows: props.duo ? true : false,
                slidesToShow: props.show,
                slidesToScroll: 1,
                initialSlide: true
              }
            },
            {
              breakpoint: 480,
              settings: {
                arrows: props.duo ? true : false,
                slidesToShow: props.show,
                slidesToScroll: 1
              }
            }
          ]
      };
    return (
        <Carousel {...options}>
            {props.children}
        </Carousel>
    )
}

export default CustomCarousel
