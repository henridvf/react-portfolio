import React from 'react';
import content from "../content";

export default function AboutMe() {
    return (
        <div id="aboutme" className="min-h-screen flex flex-col items-center justify-center">
            <h1 className="text-3xl font-Oswald text-left font-medium mb-3 mt-7">ABOUT ME</h1>
            <h2 className="text-2xl font-Roboto text-gray-500">{content.aboutme.header}</h2>
            <p className="w-11/12 md:max-w-xl font-Roboto text-left mb-5">{content.aboutme.narrative}</p>
        </div>
    );
};