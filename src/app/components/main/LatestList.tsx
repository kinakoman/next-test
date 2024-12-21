import { pageDataListType, pageDataType } from "@/app/Type"
import { v4 as uuidv4 } from "uuid"

export default function LatestList({ pageDataList }: pageDataListType) {
    pageDataList.forEach((element: pageDataType) => {
        element.id = uuidv4()
    });
    return (
        <>
            <div>
                {pageDataList.map((element: pageDataType) => {
                    return (
                        <div key={element.id}>{element.latest ? `${element.latest.year}+${element.latest.month}+${element.latest.day}` : "000000000"}</div>
                    )
                })}
            </div>
        </>
    )
}