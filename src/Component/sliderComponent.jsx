"use client"
import React, { useState } from "react";
import Image from "next/image";

import Slide1 from '@/../public/slide/slide1.png'
import Slide2 from '@/../public/slide/slide2.png'
import Slide3 from '@/../public/slide/slide3.png'
import Slide4 from '@/../public/slide/slide4.png'
import Slide5 from '@/../public/slide/slide5.png'
import Slide6 from '@/../public/slide/slide6.png'
import Slide7 from '@/../public/slide/slide7.png'
import RightArrow from '@/../public/slide/rightArrow.png'

export default function Slider() {
    const slides = [Slide1, Slide2, Slide3, Slide4, Slide5, Slide6, Slide7]
    const [currentImage, setCurrentImage] = useState(0)

    const changeImage = (val) => {
        if (val === 1) {
            if ((currentImage + 1) == slides.length) setCurrentImage(0)
            else setCurrentImage(prev => prev + 1)
        }
        else {
            if (currentImage == 0) setCurrentImage(slides.length - 1)
            else setCurrentImage(prev => prev - 1)
        }
    }

    return (
        <div>
            <h4 className="text-[#FFF2D0] text-center mb-4 md:mb-7 text-[30px] font-[Jomolhari] italic">Gallery</h4>
            <div className="relative overflow-hidden w-full">
                <Image src={slides[currentImage]} className="w-full h-auto" />
                <div
                    className="absolute w-[30px] md:w-[50px] rounded-[100%] h-[30px] md:h-[50px] top-[40%] md:top-[50%] left-[-15px] md:left-[-25px] cursor-pointer md:p-[2px] bg-[#fff] justify-end flex items-center"
                    onClick={() => changeImage(0)}
                >
                    <Image src={RightArrow} className="rotate-180 w-[20px] h-auto md:w-[25px]" />
                </div>
                <div
                    className="absolute w-[30px] md:w-[50px] rounded-[100%] h-[30px] md:h-[50px] top-[40%] md:top-[50%] right-[-15px] md:right-[-25px] cursor-pointer md:p-[2px] bg-[#fff] justify-start flex items-center"
                    onClick={() => changeImage(1)}
                >
                    <Image src={RightArrow} className="w-[20px] h-auto md:w-[25px]" />
                </div>
            </div>
        </div>
    )
}