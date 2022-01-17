import React from 'react';
import {ExternalLinkIcon} from '@heroicons/react/outline';

export default function ViewLiveButton(props) {
    return <div className="">
        <a href={props.url} target="_blank" className="w-18 py-1.5 px-3 border rounded-md bg-white
        border-blue-300 text-blue-500 text-xs uppercase flex gap-1">
            <ExternalLinkIcon className="h-3.5 w-3.5"/><span>visit</span>
        </a>
    </div>
}