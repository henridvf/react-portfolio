import LazyLoad from "react-lazyload";
import React from "react";
import {useNavigate} from "react-router-dom";

export default function Project(props) {
    let navigate = useNavigate();
    return (
        <div className="bg-white shadow-lg rounded-md cursor-pointer" onClick={event => {
            navigate(`/project/${props.project.id}`);
        }}>
            <div className="flex flex-row gap-2">
                <div className="flex-none h-28">
                    {/*<LazyLoad height={100} once>*/}
                        <img src={props.project.img1} alt={props.project.alt} className="h-full" loading="lazy"/>
                    {/*</LazyLoad>*/}
                </div>
                <div className="flex-initial w-64 mr-1">
                    <h3 className="font-Oswald">{props.project.title}</h3>
                    <p className="text-gray-600 text-sm font-Roboto">{props.project.desc}</p>
                </div>
            </div>
        </div>
    )
};
