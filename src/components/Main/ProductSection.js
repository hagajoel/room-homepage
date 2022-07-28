import React from "react";
import Article from "./Article";


const articleData =  [
    {
        heading: " About our furniture",
        text: "Our multifunctional collection blends design and function to suit your individual taste. Make each room unique, or pick a cohesive theme that best express your interests and what inspires you. Find the furniture pieces you need, from traditional to contemporary styles or anything in between. Product specialists are available to help you create your dream space."
    }
]


import productImageDark from "../../assets/images/image-about-dark.jpg"
import productImageLight from "../../assets/images/image-about-light.jpg"

const ProductSection = () => {
    return (
        <div className="product">
            <div className="product__wrapper">
                <div className="product__image--dark">
                    <img src={productImageDark} alt="furniture" className="product__image"></img>
                </div>
                <div className="product__image--light">
                    <img src={productImageLight} alt="furniture" className="product__image"></img>
                </div>            
                
                <div className="product__info container">
                    {
                        articleData.map((data,i) => {
                        return (
                                <Article {...data} key={i}/>
                        ) 
                        })
                    }
                </div>
            </div>
            

        </div>
    );
}
 
export default ProductSection;