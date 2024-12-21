import React from "react"
type TextType = {
    children: React.ReactNode
}

export default function first({ children }: TextType) {
    return (
        <div className="mt-4 sm:mt-8 text-base sm:text-lg">
            {children}
        </div>
    )
}