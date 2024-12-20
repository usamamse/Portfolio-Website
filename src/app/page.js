"use client";
import React, { useEffect, useState } from "react";

import { IoHomeSharp } from "react-icons/io5";
import { FaPersonCircleQuestion } from "react-icons/fa6";
import { PiReadCvLogoFill } from "react-icons/pi";
import { FaLaptopCode, FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';
import { animate, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { GoCopilot } from "react-icons/go";
import { Skills } from "../../components/Skills";
import { ShootingStars } from "../../components/Shooting-stars";
import { StarsBackground } from "../../components/ui/stars-background";



export default function Home() {
  return (
    <div className="w-full overflow-x-hidden min-h-screen grid lg:grid-cols-[1fr_0.6fr_0.4fr] gap-[20px]">
      <div className="max-w-[600px] w-[90%] mx-auto py-[30px]">

        <Image src="/logo.png" width={120} height={80} className="max-h-[80px] h-full object-contain object-bottom" alt="logo" />

        <div className="flex flex-col justify-center h-[80%]">
          <span className="text-[#4e69e0] font-[600]">Hi, my name is</span>
          <h2 className="bg-clip-text text-transparent text-start bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
            ELMESSAOUDI <br /> Oussama
          </h2>
          <TypeAnimation
            sequence={[
              // Same substring at the start will only be typed out once, initially
              'Full-Stack Web Developper',
              1000, // wait 1s before replacing "Mice" with "Hamsters"
              'Mobile Developper',
              1000, // wait 1s before replacing "Mice" with "Hamsters"
              'Graphic Designer',
              1000,
            ]}
            wrapper="span"
            speed={50}
            style={{ fontSize: '2em', display: 'inline-block', color: 'white' }}
            className="bg-clip-text text-transparent text-start bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight"
            repeat={Infinity}
          />
          <a href="#" className="pl-[5px] text-white border-b border-l border-[#525252] hover:p-[10px] hover:bg-[#5070ff2f] transition-all ease-in-out mr-auto py-[10px] font-[600]">
            Hire me &rarr;
          </a>
        </div>
      </div>
      <div className="w-full h-full flex items-end bg-[#0d0d0e] rounded-b-[90px]">
        <Image src="/123.png" width={800} height={1300} className="w-full max-h-[100vh] object-contain object-bottom" alt="model" />
        <div><a href="www.instagram.com/usamamse" className=" h-[50px] w-[50px] translate-x-[-474px] translate-y-[-550px] flex justify-center items-center z-3 bg-[#0d0d0e] rounded-full border border-white"><FaInstagram className="text-white h-[30px] w-[30px]" /></a></div>
        <div><a href="www.instagram.com/usamamse" className=" h-[50px] w-[50px] translate-x-[-524px] translate-y-[-490px] flex justify-center items-center z-3 bg-[#0d0d0e] rounded-full border border-white"><FaLinkedin className="text-white h-[30px] w-[30px]" /></a></div>
        <div><a href="www.instagram.com/usamamse" className=" h-[50px] w-[50px] translate-x-[-574px] translate-y-[-430px] flex justify-center items-center z-3 bg-[#0d0d0e] rounded-full border border-white"><FaFacebook className="text-white h-[30px] w-[30px]" /></a></div>



      </div>

      <div className="w-[90%] mx-auto py-[30px] flex flex-col items-center z-2">

        <div className=" pt-[11px] w-[90%] mx-auto py-[30px] flex flex-col items-center z-2 text-black">
          <a href="#" className="bg-white max-w-[130px] w-full h-[40px] flex justify-center items-center border border-l border-[#333333] text-black font-[600] rounded-[30px] mx-auto pb-[2px]">
            Download CV
          </a>
        </div>
        <div className="pt-[11px] pt-[-5px] w-[90%] translate-y-[-30px] mx-auto py-[30px] flex flex-col items-center z-2"><a href="#" className="max-w-[130px] w-full h-[40px] flex justify-center items-center border border-l border-[#333333] text-white font-[600] rounded-[30px] mx-auto pb-[2px]">
          Hire Me
        </a></div>



        <p className="max-w-xl mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-star mt-[20px] translate-y-[-40px]">
          "I’m driven by an unrelenting passion for technology, where hardware and software converge to create something extraordinary.
          Whether it’s programming microcontrollers, crafting seamless web and mobile applications, or designing interfaces that resonate, I thrive on turning complexity into simplicity.
          To me, every circuit, pixel, and line of code is a canvas for innovation—where precision meets creativity, and ideas come to life."
        </p>
        <Skills className="z-3" />
      </div>

      <div>
      </div>
    </div>
  );
}

