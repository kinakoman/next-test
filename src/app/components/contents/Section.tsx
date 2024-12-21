import { v4 as uuidv4 } from "uuid"
import React from "react"
type SectionType = {
    title: string,
    children: React.ReactNode
}

export default function Section({ title, children }: SectionType) {
    const id: string = uuidv4()
    return (
        <div className="w-full mt-8 sm:mt-12">
            <h2 className="text-xl sm:text-2xl font-bold border-b-2 border-solid border-black" id={id}>{title}</h2>
            {children}
        </div>
    )
}