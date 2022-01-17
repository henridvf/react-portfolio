import React from 'react';
import {useParams} from "react-router-dom";
import content from '../content/';
import Carrousel from "../components/Carrousel";
import CloseButton from "../components/CloseButton";
import ViewLiveButton from "../components/ViewLiveButton";
import ViewGithubButton from "../components/ViewGithubButton";

export default function Detail() {
    const params = useParams();
    const project = content.portfolio.projects.find(project => project.id === +params.id);

    if (!project) {
        return <p>No project with that identifier.</p>;
    }

    return (
        <div className="min-h-screen relative bg-gray-100">
            <div
                className="h-9/10 w-11/12 sm:w-2/3 p-5 absolute inset-x-0 bottom-0 mx-auto bg-white rounded-t-2xl
                border border-gray-300">
                <div className="flex flex-row justify-between">
                    <h1 className="font-Oswald text-2xl">{project.title}</h1>
                    <CloseButton/>
                </div>
                <p className="my-3 text-gray-500">{project.desc}</p>
                <hr/>
                <div className="my-4 text-xs text-gray-500">
                    TECH USED
                </div>
                <div className="flex flex-wrap content-between justify-between items-center mb-4">
                    <div>
                        {project.techs.map(tech => <span
                            className="mr-3 py-3 px-3 border rounded-md bg-white border-gray-300 text-sm text-gray-500">
                            {tech}</span>)}
                    </div>
                    <div className="flex mt-4 md:mt-0 gap-2">
                        {project.url && <ViewLiveButton url={project.url}/>}
                        {project.github && <ViewGithubButton url={project.github}/>}
                    </div>
                </div>
                <Carrousel project={project}/>
            </div>
        </div>
    )
}
