import React from "react";
import GradPhoto from "../assets/Grad.jpg";
import { EDUCATION } from "../constants";

const Education = () => {
    return (
        <div className="border-b border-neutral-100 pb-4">
            <h1 className="mb-8 text-center text-4xl">Education</h1>
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2 lg:p-8">
                    <div className="flex items-center justify-center">
                        <img className="rounded-2xl max-w-full h-auto" src={GradPhoto} alt="Graduation" />
                    </div>
                </div>
                <div className="w-full lg:w-1/2 lg:p-8 flex items-center">
                    <div className="space-y-10">
                        {EDUCATION.map((education, index) => (
                            <div key={index} className="flex flex-col">
                                <p className="mb-2 text-sm text-neutral-700">{education.dates}</p>
                                <h6 className="mb-2 font-bold">
                                    {education.name} - 
                                    <span className="text-sm text-neutral-600"> {education.type}, </span> 
                                    <span className="text-sm text-neutral-600">{education.location}</span>
                                </h6>
                                <h6 className="italic text-sm mb-2">
                                    {education.degree}
                                </h6>
                                <p className="mb-2">
                                    <span className="font-semibold">Honors: </span>{education.honors}
                                    <br />
                                    <span className="font-semibold">Activities: </span>{education.activities}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Education;