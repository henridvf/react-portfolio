import React from 'react';
import {Link as ScrollLink} from "react-scroll";
import { ArrowCircleUpIcon } from '@heroicons/react/outline';

export default function BackToTopButton() {
    return <ScrollLink to="navigation" smooth={true}>
        <button className="font-Oswald text-2xl mr-4" aria-label="Back to top">
            <ArrowCircleUpIcon className="h-10 w-10 text-blue-500 hover:text-red-500"/>
        </button>
    </ScrollLink>
}