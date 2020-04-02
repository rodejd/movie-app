import React, {Component} from 'react';
import Movie from "./Movie";
import Slider from 'react-slick';
import './Carousel.css';
import img1 from "./img/img1.jpg";
import {Button} from 'reactstrap';




function Bus (props){
    console.log(props);

    const img = img1;

    const settings = {
        dots:true,
        infinite: true,
        speed:200,
        slidesToShow:1,
        slidesToScroll:1,
        autoplay:true,
        autoplaySpeed:5000
    }
       return(
           <div>
               <Slider
                   {...settings} className="carousel"
               >
                   <div className='image-wrap'>
                       <img src={img1} alt="media04"/>
                       <Button color="danger">hi</Button>
                   </div>
                   <Button color="danger">hi</Button>
               </Slider>

               <Button color="danger">hi</Button>
           </div>
       );
}

export default Bus;