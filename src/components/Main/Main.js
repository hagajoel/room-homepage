import React from "react";
import Hero from "./Hero";
import ProductSection from "./ProductSection";


const Main = () => {
    return (
        <main className="main">
            <div className="main__wrapper">
                <Hero/>
                <ProductSection/>
            </div>
        </main>
    );
}
 
export default Main;