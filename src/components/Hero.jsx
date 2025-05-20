import React from "react";
import { HERO_CONTENT, HERO_CONTENT2, HERO_CONTENT3 } from "../constants";
import profilePic from "../assets/headshot.jpg";


const Hero = () => {
    return (
        <div className="border-b border-neutral-100 pb-4 lg:mb-35">
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2">
                    <div className="flex flex-col items-center lg:items-start">
                        <h1 className="pb-8 text-4xl font-thin tracking-tight lg:text-6xl">
                            Alexandria Wright
                        </h1>
                        <span className="bg-gradient-to-r from-blue-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent">
                            Computer Science Student
                        </span>
                        <div className="block lg:hidden py-4">
                            <img className="rounded-2xl max-w-xs sm:max-w-sm md:max-w-md" src={profilePic} alt="Alexandria Wright"/>
                        </div>
                        <p className="my-2 max-w-xl py-6 font-light">
                            {HERO_CONTENT}
                            <br />
                            {HERO_CONTENT2}
                            <br />
                            {HERO_CONTENT3}
                        </p>
                    </div>
                </div>
                <div className="hidden w-full lg:flex lg:w-1/2 justify-center items-center">
                    <img className="rounded-2xl max-w-xs md:max-w-sm lg:max-w-md w-full h-auto" src={profilePic} alt="Alexandria Wright" />
                </div>
            </div>
        </div>
    );
};

export default Hero;