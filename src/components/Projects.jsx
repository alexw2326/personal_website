import React from "react";
import { PROJECTS } from "../constants";

const Projects = () => {
    return (
        <div className="border-b border-neutral-100 pb-4">
            <h1 className="mb-8 text-center text-4xl">Projects</h1>
            <div className="flex flex-wrap">
                <div className="w-full lg:p-8 flex items-center">
                    <div className="space-y-10">
                        {PROJECTS.slice(0,2).map((projects, index) => (
                            <div key={index} className="flex flex-col lg:flex-row items-center lg:items-start space-y-4 lg:space-y-0 lg:space-x-6">
                                <div className="flex-1">
                                    <p className="mb-2 text-sm text-neutral-700">{projects.title}</p>
                                    <h6 className="italic text-sm mb-2">{projects.description}</h6>
                                </div>
                                <img className="rounded-2xl w-80 h-auto lg:w-96" src={projects.image} alt={projects.title} />
                            </div>
                        ))}
                        {PROJECTS.slice(2,3).map((projects, index) => (
                            <div key={index} className="flex flex-col lg:flex-row items-center lg:items-start space-y-4 lg:space-y-0 lg:space-x-6">
                                <div className="flex-1">
                                    <p className="mb-2 text-sm text-neutral-700">{projects.title}</p>
                                    <h6 className="italic text-sm mb-2">{projects.description}</h6>
                                    <img className="rounded-2xl w-80 h-auto lg:w-10/12 items-center justify-center ml-20" src={projects.image} alt={projects.title} />
                                </div>
                            </div>
                        ))}
                        {PROJECTS.slice(3,4).map((projects, index) => (
                            <div key={index} className="flex flex-col lg:flex-row items-center lg:items-start space-y-4 lg:space-y-0 lg:space-x-6">
                                <div className="flex-1">
                                    <p className="mb-2 text-sm text-neutral-700">{projects.title}</p>
                                    <h6 className="italic text-sm mb-2">{projects.description}</h6>
                                </div>
                                <img className="rounded-2xl w-80 h-auto" src={projects.image} alt={projects.title} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;
