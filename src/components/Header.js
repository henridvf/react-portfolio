import React from 'react';
import content from '../content/';
import {Link as ScrollLink} from 'react-scroll';

export default function Header() {
    return (
        <div className="min-h-screen flex bg">
            <div className="w-10/12 mx-auto my-60">
                <div>
                    <h1 className="text-white text-4xl font-Oswald font-medium">{content.header.greeting}</h1>
                    <h2 className="text-blue-500 text-2xl font-Roboto">{content.header.title}</h2>
                    <ScrollLink to="portfolio" smooth={true}>
                        <button className="text-white font-Oswald font-medium bg-red-500 hover:bg-red-600 rounded p-1 px-6 mt-3">
                            MY WORK
                        </button>
                    </ScrollLink>
                </div>
            </div>
        </div>)
}