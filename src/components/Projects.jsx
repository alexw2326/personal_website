import React from "react";
import { PROJECTS } from "../constants";

const Projects = () => {
    return (
        <div className="border-b border-neutral-100 pb-4">
            <h1 className="mb-8 text-center text-4xl">Projects</h1>
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2 lg:p-8 flex items-center">
                    <div className="space-y-10">
                        {PROJECTS.map((projects, index) => (
                            <div key={index} className="flex flex-col">
                                <p className="mb-2 text-sm text-neutral-700">{projects.title}</p>
                                {projects.image}
                                <h6 className="italic text-sm mb-2">
                                    {projects.description}
                                </h6>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;