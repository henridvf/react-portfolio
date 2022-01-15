import React from 'react';
import content from '../content/';
import {Link as ScrollLink} from 'react-scroll';

export default function Navigation() {
    return (
        <div
            style={{
                background: '#1c1c1c',
            }}
        >
            <div className="w-10/12 flex items-center justify-between mx-auto py-3 text-white">
                <h1 className="text-3xl font-Oswald">{content.nav.logo}{' '}
                    <span className="w-5 h-3 bg-red-500 inline-block rounded-lg"/><span
                        className="w-3 h-3 bg-blue-500 inline-block rounded-full ml-2"/></h1>
                <div>
                    {content.nav.links.map((link, index) => {
                        return <ScrollLink to={link.to} smooth={true}>
                            <button className="font-Oswald text-2xl mr-4">{link.text}</button>
                        </ScrollLink>
                    })}
                </div>
            </div>
        </div>
    )
}