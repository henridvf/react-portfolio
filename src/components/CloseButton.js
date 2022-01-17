import React from 'react';
import { XCircleIcon } from '@heroicons/react/outline';
import {HashLink} from "react-router-hash-link";

export default function CloseButton() {
    return <HashLink to="/#portfolio" className="bg-transparent hover focus:outline-none" aria-label="Close">
        <XCircleIcon className="h-10 w-10 text-gray-300 hover:text-blue-400"/>
    </HashLink>
}