import React from "react";
import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/headshot.jpg";


const Hero = () => {
    return <div className="border-b border-neutral-100 pb-4 lg:mb-35">
        <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2">
                <div className="flex flex-col items-center lg:items-start">
                    <h1 className="pb-8 text-4xl font-thin tracking-tight
                    lg:text-6xl">
                        Alexandria Wright
                    </h1>
                    <span className="bg-gradient-to-r from-blue-300 via-slate-500
                    to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent">
                        Computer Science Student
                    </span>
                    <p className="my-2 max-w-xl py-6 font-light whitespace-pre">
                        {HERO_CONTENT}
                    </p>
                </div>
            </div>
            <div className="w-full lg:w-1/2">
                <div className="flex justify-center">
                    <img className="rounded-2xl" src={profilePic} alt="Alexandria Wright"></img>
                </div>
            </div>
        </div>
    </div>
};

export default Hero;