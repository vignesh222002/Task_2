"use client"
import React from "react";
import Image from "next/image";

import RoomImage from  '@/../public/image/room.png'
import AssetImage from  '@/../public/image/asset.png'

export default function Asset() {

    return (
        <>
            <div className="md:flex md:items-stretch md:gap-10">
                <div className="md:w-1/2">
                    <Image className="w-full" src={AssetImage} />
                </div>
                <div className="md:w-1/2 flex flex-col gap-7 justify-between">
                    <div className=" flex flex-col gap-2 md:gap-10">
                        <div className="">
                            <h3 className="text-[#fff] text-[35px] md:text-[45px] mt-3 md:mt-0">
                                Unparalleled Security & 
                                <br /> 
                                <span className="text-[26px] md:text-[55px] text-[#FFF2D0] italic">Maintenances</span>
                            </h3>
                            <p className="text-[#DFDFDF] md:text-[#fff] text-[15px] md:text-[24px] font-[400] md:font-[550] font-sans text-justify md:tracking-wider">Enjoy peace of mind with our single-door lock-out system complemented by an integrated multi-layered security system, all managed by professionals for a truly hassle-free living experience.</p>
                        </div>
                        <div className="">
                            <h3 className="text-[#fff] text-[35px] md:text-[45px] mt-3 md:mt-0">
                                Prime Location with  
                                <br /> 
                                Enhanced 
                                <span className="text-[26px] md:text-[55px] text-[#FFF2D0] italic"> Connectivity</span>
                            </h3>
                            <p className="text-[#DFDFDF] md:text-[#fff] text-[15px] md:text-[24px] font-[400] md:font-[550] font-sans text-justify md:tracking-wider">Located in a prime luxury destination, these residences offer convenient access to essential services and unparalleled connectivity to Bangalore's Airport (BIAL) and CBD.</p>
                        </div>
                    </div>
                    <div className="">
                        <button className="bg-[#FFF2D0] text-[14px] md:text-[20px] font-sans text-[#B27E02] rounded-[10px] md:rounded-[20px] px-3 py-1 md:px-5 md:py-2">
                            Enquire Now
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}