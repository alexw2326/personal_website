import React from "react";
import { EXPERIENCES } from "../constants";

const WorkExperience = () => {
    return (
        <div className="border-b border-neutral-100 pb-4">
                    <h1 className="mb-8 text-center text-4xl">Work Experience</h1>
                    <div className="flex flex-wrap">
                        <div className="w-full lg:w-1/2 lg:p-8 flex items-center">
                            <div className="space-y-10">
                                {EXPERIENCES.map((experiences, index) => (
                                    <div key={index} className="flex flex-col">
                                        <p className="mb-2 text-sm text-neutral-700">{experiences.year}</p>
                                        <h6 className="mb-2 font-bold">
                                            {experiences.role} - 
                                            <span className="text-sm text-neutral-600"> {experiences.company}, </span> 
                                            <span className="text-sm text-neutral-600">{experiences.description}</span>
                                        </h6>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
    );
};

export default WorkExperience;