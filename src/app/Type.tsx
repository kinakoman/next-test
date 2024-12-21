export type pageDataType = {
    title: string,
    tag: string[],
    date: dateType
    latest?: dateType,
    path?: string,
    id?: string
}

export type tagListType={
    tagList:string[]
}


export type dateType = {
    year: number,
    month: number,
    day: number
}

export type pageModuleType = {
    pageData: pageDataType
}

export type pageDataListType = {
    pageDataList: pageDataType[],
}