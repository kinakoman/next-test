import { pageDataType } from "@/app/Type"
import React from "react"

type ContentsType = {
    pageData: pageDataType,
    children: React.ReactNode
}

export default function Contents({ pageData, children }: ContentsType) {
    return (
        <div className={`max-w-[720px] w-11/12 sm:w-10/12 mx-auto pt-8 pb-16 target-toc`} >
            <h1 className={"font-bold text-2xl sm:text-4xl w-full"}>{pageData.title}</h1>
            <div className="w-full mt-5">
                <div className="flex flex-wrap gap-y-1 gap-x-3 items-center">
                    {pageData.tag.map((element: string) => {
                        return (
                            <div key={`tagofpage${element}-${pageData.id}`} className="text-xs sm:text-sm leading-4 opacity-70 border-solid border border-black p-0.5 rounded-sm">
                                <p># {element}</p>
                            </div>
                        )
                    })}
                </div>
                <div className="mt-2.5 opacity-50 text-base sm:text-lg">最終更新日:{pageData.date.year}年{pageData.date.month}月{pageData.date.day}日</div>
            </div>
            {children}
        </div>
    )
}