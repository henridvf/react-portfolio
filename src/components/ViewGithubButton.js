import React from 'react';
import {CodeIcon} from "@heroicons/react/outline";

export default function ViewGithubButton(props) {
    return <div className="">
        <a href={props.url} target="_blank" className="w-22 py-1.5 px-3 border rounded-md bg-white
        border-blue-300 text-blue-500 text-xs uppercase flex gap-1">
            <CodeIcon className="h-3.5 w-3.5"/><span>GitHub</span>
        </a>
    </div>
}