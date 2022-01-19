import React from 'react';
import content from "../content";
import BackToTopButton from "./BackToTopButton";
import CopyMailTo from "react-copy-mailto";

export default function AboutMe() {
    return (
        <div id="aboutme"
             className="min-h-screen w-5/6 sm:w-3/5 mx-auto flex flex-col justify-center text-center sm:text-left relative">
            <h1 className="text-3xl font-Oswald font-medium mb-5 mt-7">ABOUT ME</h1>
            <div className="flex gap-4 flex-col items-center sm:flex-row sm:items-start">
                <img src="./assets/images/hdvf.png" alt="" className="rounded-lg w-32 h-32 shrink-0"/>
                <div className="font-Roboto text-gray-500 text-center sm:text-left">
                    <h2 className="text-xl">{content.aboutme.header}</h2>
                    <p className="text-blue-500 text-sm font-medium mt-2">Henri von Franquemont</p>
                    <p className="text-sm">Full-stack Developer</p>
                </div>
            </div>
            <p className="mt-4 font-Roboto">{content.aboutme.para1}</p>
            <p className="mt-4 font-Roboto">{content.aboutme.para2}</p>
            <p className="mt-4 ">{content.aboutme.para3}</p>
            <CopyMailTo email="henridvf@gmail.com" defaultTooltip="Click to copy" copiedTooltip="Copied!"
                        containerStyles={{width: 100}}>
                <div
                    className="py-1.5 mt-2 bg-gray-300 uppercase text-xs text-center text-gray-700 rounded-full">Email
                </div>
            </CopyMailTo>
            <div className="absolute sm:bottom-10 -bottom-4 self-center">
                <BackToTopButton/>
            </div>
        </div>

    );
};