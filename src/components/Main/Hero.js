import React,{useState} from "react";
import Slider from "./Slider";
import HeroArticle from "./HeroArticle";
const imageData = require("./ImageData.js");

import image1Desktop from "../../assets/images/desktop-image-hero-1.jpg";
import image1Mobile from "../../assets/images/mobile-image-hero-1.jpg";
import image2Desktop from "../../assets/images/desktop-image-hero-2.jpg";
import image2Mobile from "../../assets/images/mobile-image-hero-2.jpg";
import image3Desktop from "../../assets/images/desktop-image-hero-3.jpg";
import image3Mobile from "../../assets/images/mobile-image-hero-3.jpg";

const images = [
    {
        desktop:image1Desktop,
        mobile:image1Mobile
    },
    {
        desktop:image2Desktop,
        mobile:image2Mobile
    },
    {
        desktop:image3Desktop,
        mobile:image3Mobile
    },

]

const Hero = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction,setDirection] = useState("forward");
    return (  
        <section className="hero">
            <div className="hero__wrapper">
                <Slider images={images} 
                        setCurrentIndex={setCurrentIndex} 
                        currentIndex={currentIndex}
                        setDirection={setDirection}
                />
                <div className="hero__content container">
                    {
                        imageData.map((item,index) => {
                            return(
                                <HeroArticle direction= {direction}
                                             active={index === currentIndex} 
                                             {...item} 
                                             key={index}
                            />
                            )

                        })
                    }
                </div>

            </div>
        </section>
    );
}
 
export default Hero;