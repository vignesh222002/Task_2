"use client"
import React from "react";
import Image from "next/image";

import RoomImage from '@/../public/image/room.png'
import HomeImage from '@/../public/card/home.png'
import RupeeImage from '@/../public/card/rupee.png'
import SizeImage from '@/../public/card/Size.png'
import VectorImage from '@/../public/card/Vector.png'

export default function Product() {
    const products = [
        { image: RoomImage },
        { image: RoomImage },
        { image: RoomImage }
    ]

    return (
        <>
            <div className="flex justify-center w-full">
                <div className="md:max-w-[900px]">
                    <h3 className="text-[#fff] text-[34px] md:text-[45px] md:text-center">
                        CHOOSE THE
                        <span className="text-[24px] md:text-[55px] text-[#FFF2D0] italic"> Lifestyle </span>
                        YOU DESIRE
                    </h3>
                    <p className="text-[#DFDFDF] md:text-[#fff] text-[15px] md:text-[24px] font-[400] md:font-[550] font-sans text-justify md:tracking-wider mt-4">Presenting a diverse collection of residences, thoughtfully crafted to suit your aspirations. At Embassy Lake Terraces, the choice is yours to embrace.</p>
                </div>
            </div>

            {/* Cards */}
            <div className="flex flex-col md:flex-row justify-evenly items-center gap-5">
                {products?.map((item, index) => (
                    <div key={index} className="pb-4 bg-[#fff]">
                        <div className="">
                            <div className="relative">
                                <Image src={item?.image} />
                                <button className="absolute top-5 left-5 bg-[#B27E02] text-[14px] font-sans font-[600] text-[#FFF2D0] rounded-[2px] px-5 py-1">
                                    New Launched
                                </button>
                            </div>

                            <div className="flex justify-center my-3">
                                <div className="w-[80%]">
                                    <h3 className="text-[35px] font-sans font-[500]">Tangled Up In Green</h3>
                                    <p className="text-[#7E7E7E] font-sans">Doddaballapura Main Road, STRR, Devanahalli</p>
                                    <div className="flex items-stretch mt-8">
                                        <div className="w-2/5 flex justify-start items-start gap-2">
                                            <div className="border-2 border-[#B27E02] w-[45px] h-[45px] p-1">
                                                <Image src={RupeeImage} className="w-full h-full" />
                                            </div>
                                            <div className="">
                                                <div className="text-[#B27E02] font-sans font-[500]">Price</div>
                                                <div className="text-[14px] text-[#6B6B6B] font-[500] mt-[-2px] font-sans">1.5 Cr*</div>
                                            </div>
                                        </div>
                                        <div className="w-1/5 flex justify-center">
                                            <div className="h-full w-[2px] bg-[#EEEEEE]"></div>
                                        </div>
                                        <div className="w-2/5 flex justify-start items-start gap-2">
                                            <Image src={SizeImage} className="w-[45px] h-[45px]" />
                                            <div className="">
                                                <div className="text-[#B27E02] font-sans font-[500]">Type</div>
                                                <div className="text-[14px] text-[#6B6B6B] font-[500] mt-[-2px] font-sans">Apartments</div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="w-full h-[2px] bg-[#EEEEEE] my-5"></div>

                                    <div className="flex items-stretch mb-5">
                                        <div className="w-2/5 flex justify-start items-start gap-2">
                                            <Image src={VectorImage} className="w-[45px] h-[45px]" />
                                            <div className="">
                                                <div className="text-[#B27E02] font-sans font-[500]">Plot Size</div>
                                                <div className="text-[14px] text-[#6B6B6B] font-[500] mt-[-2px] font-sans">1,500 - 2,400</div>
                                            </div>
                                        </div>
                                        <div className="w-1/5 flex justify-center">
                                            <div className="h-full w-[2px] bg-[#EEEEEE]"></div>
                                        </div>
                                        <div className="w-2/5 flex justify-start items-start gap-2">
                                            <Image src={HomeImage} className="w-[45px] h-[45px]" />
                                            <div className="">
                                                <div className="text-[#B27E02] font-sans font-[500]">Configuration</div>
                                                <div className="text-[14px] text-[#6B6B6B] font-[500] mt-[-2px] font-sans">2/3/4/5/6 Bed</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex justify-between gap-5 px-3">
                                <button className="w-1/2 bg-[#fff] text-[#B27E02] text-[14px] font-sans font-[600] rounded-[5px] border-2 border-[#B27E02] outline-none py-3">
                                    View More
                                </button>
                                <button className="w-1/2 bg-[#B27E02] text-[14px] font-sans font-[600] text-[#FFF2D0] rounded-[5px] border-none outline-none py-3">
                                    Schedulr Site Visit
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}