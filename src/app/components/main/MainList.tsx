"use client"
import { pageDataType, pageDataListType } from "@/app/Type"
import { v4 as uuidv4 } from "uuid"
export default function MainList({ pageDataList }: pageDataListType) {
    pageDataList.forEach((element: pageDataType) => {
        element.id = uuidv4()
    });
    return (
        <>
            <div>
                {pageDataList.map((element: pageDataType) => {
                    return (
                        <div key={element.id}>{`${element.date.year}+${element.date.month}+${element.date.day}`}</div>
                    )
                })}
            </div>
        </>
    )
}