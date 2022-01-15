import React from 'react';
import {useParams} from "react-router-dom";
import content from '../content/';
import Carrousel from "../components/Carrousel";
import {HashLink} from "react-router-hash-link";

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
                    <span
                        className="p-2 rounded-full text-gray-500 border border-gray-300 flex align-center w-max
                        cursor-pointer active:bg-gray-300 transition duration-300 ease">
                        <HashLink to="/#portfolio" className="bg-transparent hover focus:outline-none">
                              <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="times"
                                   className="w-4 h-4" role="img" xmlns="http://www.w3.org/2000/svg"
                                   viewBox="0 0 352 512">
                                <path fill="currentColor"
                                      d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z">
                                </path>
                              </svg>
                        </HashLink>
                    </span>
                </div>
                <p className="my-3 text-gray-500">{project.desc}</p>
                <hr/>
                <div className="my-4 text-xs text-gray-500">
                    TECH USED
                </div>
                <div className="mb-4">
                    {project.techs.map(tech => <span
                        className="mr-3 py-3 px-3 border rounded-md bg-white border-gray-300 text-sm text-gray-500">
                        {tech}</span>)}
                </div>
                <Carrousel project={project}/>
            </div>
        </div>
    )
}
