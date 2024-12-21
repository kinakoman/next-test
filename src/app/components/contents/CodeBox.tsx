import SyntaxHighlighter from 'react-syntax-highlighter';
import { vs2015 } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import React from 'react';


type CodeBoxType = {
    lang: string,
    comment: string,
    children: string
}

export default function CodeBox({ lang, comment, children }: CodeBoxType) {
    return (
        <>
            <div className='w-full mt-8 mx-auto leading-6'>
                <div className='h-8 bg-gray-700 pl-2.5 text-sm leading-8 text-white overflow-x-auto whitespace-nowrap font-mono rounded-t-md' >{comment}</div>
                <SyntaxHighlighter language={lang} style={vs2015} customStyle={{ lineHeight: "1.5", fontSize: "15px", padding: "10px", borderRadius: "0 0 6px 6px", overflowX: "auto" }}>
                    {children}
                </SyntaxHighlighter>
            </div>
        </>
    )
}