import { tagListType } from "@/app/Type"
import { v4 as uuidv4 } from "uuid"
export default function TagList({ tagList }: tagListType) {
    return (
        <>
            <div>
                {tagList.map((element: string) => {
                    return (
                        <div key={uuidv4()}>{element}</div>
                    )
                })}
            </div>
        </>
    )
}