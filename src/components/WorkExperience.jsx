import React from "react";
import { EXPERIENCES } from "../constants";
import golfPic from "../assets/Golf-Work.jpg";
import AGBuilding from "../assets/AG-Work.png";

const WorkExperience = () => {
    return (
        <div className="border-b border-neutral-100 pb-4">
            <h1 className="mb-8 text-center text-4xl">Work Experience</h1>
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2 lg:p-8 flex items-center">
                    <div className="space-y-6">
                        {EXPERIENCES.slice(0, 2).map((experiences, index) => (
                        <div key={index} className="flex flex-col">
                            <p className="text-sm text-neutral-700">{experiences.year}</p>
                            <h6 className="mb-2 font-bold">
                                {experiences.role} - 
                                <span className="text-sm text-neutral-600"> {experiences.company} </span> 
                                <br></br>
                                <span className="text-sm text-neutral-600">{experiences.description}</span>
                            </h6>
                        </div>
                    ))}
                    </div>
                </div>
                <div className="w-full lg:w-1/2 mt-10">
                    <div className="flex justify-center">
                        <img className="rounded-2xl h-96 w-auto" src={AGBuilding} alt="Analysis Group Building"></img>
                    </div>
                    <div className="flex justify-center">
                        <p className="text-xs w-96 italic">
                            “111 Huntington Avenue.” BXP, 11 Mar. 2024, www.bxp.com/properties/prudential-center/111-huntington-avenue.
                            <br></br>
                            Analysis Group. @analysisgroup. Company Logo. X.
                        </p>
                    </div>
                </div>
                    <div className="flex flex-wrap mt-12">
                    <div className="w-full lg:w-1/2">
                            <div className="flex justify-center">
                                <img className="rounded-2xl h-auto w-96 mt-8" src={golfPic} alt="Golf"></img>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2 lg:p-8 flex items-center">
                            <div className="space-y-6">
                                {EXPERIENCES.slice(2, 4).map((experiences, index) => (
                                    <div key={index} className="flex flex-col">
                                        <p className="text-sm text-neutral-700">{experiences.year}</p>
                                        <h6 className="mb-2 font-bold">
                                            {experiences.role} - 
                                            <span className="text-sm text-neutral-600"> {experiences.company} </span> 
                                            <br></br>
                                            <span className="text-sm text-neutral-600">{experiences.description}</span>
                                        </h6>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    );
};

export default WorkExperience;