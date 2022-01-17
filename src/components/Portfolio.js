import React from 'react';
import content from '../content/';
import LazyLoad from "react-lazyload";
import Project from "./Project";
import BackToTopButton from "./BackToTopButton";

export default function Portfolio() {
    return (
        <div id="portfolio" className="min-h-screen bg-gray-100 flex flex-col items-center justify-center relative">
            <h1 className="text-3xl font-Oswald font-medium mb-3 mt-7">MY PROJECTS</h1>
            <p className="w-11/12 md:max-w-xl font-Roboto text-center mb-5">{content.portfolio.intro}</p>
            <div className="flex flex-wrap gap-3 justify-center">
                {content.portfolio.projects.map((project, index) => {
                    return (
                        <Project key={project.id} project={project}/>
                    )
                })}
            </div>
            <div className="absolute bottom-10">
                <BackToTopButton/>
            </div>
        </div>
    )
};