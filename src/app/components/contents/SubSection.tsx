import { v4 as uuidv4 } from "uuid"
import React from "react"

type SubSectionType = {
    children: React.ReactNode
}

export default function SubSection({ children }: SubSectionType) {
    return (
        <h3 className="mt-4 sm:mt-8 font-bold text-lg sm:text-xl" id={uuidv4()}>
            ・{children}
        </h3>
    )
}