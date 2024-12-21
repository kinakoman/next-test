import fs from "fs"
import path from "path";
import { pageDataType, pageModuleType } from "./Type";
import MainList from "./components/main/MainList";
import TagList from "./components/main/TagList";
import LatestList from "./components/main/LatestList";

export default async function Home() {
  const tagList: string[] = []

  const PageDataList: pageDataType[] = await getAllPage()

  // 全ページのタグを取得
  PageDataList.forEach((element: pageDataType) => {
    tagList.push(...element.tag)
  });
  // タグの重複を削除してアルファベット順に並び変え
  const tagListSort: string[] = [...new Set(tagList)].sort()

  // data順に並び変えたリストを生成
  const dateDataList: pageDataType[] = PageDataList.concat().sort((a: pageDataType, b: pageDataType) => {
    const dateA = new Date(a.date.year, a.date.month - 1, a.date.day);
    const dateB = new Date(b.date.year, b.date.month - 1, b.date.day);
    return dateB.getTime() - dateA.getTime();
  })

  // latest順に並び変えたリストを生成
  const latestDateList: pageDataType[] = PageDataList.concat().sort((a: pageDataType, b: pageDataType) => {
    const dateA = a.latest ? new Date(a.latest?.year, a.latest.month - 1, a.latest.day) : new Date(0)
    const dateB = b.latest ? new Date(b.latest.year, b.latest.month - 1, b.latest.day) : new Date(0)
    return dateB.getTime() - dateA.getTime();
  })


  return (
    <>
      <MainList pageDataList={dateDataList} />
      <TagList tagList={tagListSort} />
      <LatestList pageDataList={latestDateList} />
    </>
  );
}

const getAllPage = async () => {
  // コンテンツ別の親ディレクトリを取得
  const PathToContents: string = `${process.cwd()}/src/app/contents`
  const ContentsList: string[] = fs.readdirSync(PathToContents)

  // 全ページのディレクトリ名格納用配列
  let AllPage: string[] = []

  ContentsList.forEach((ContentName: string) => {
    const PageList: string[] = fs.readdirSync(path.join(PathToContents, ContentName))
    const PathToPage: string[] = PageList.map((PageName: string) => {
      // コンテンツとページ名をパスとして結合
      return `contents/${ContentName}/${PageName}`
    })
    AllPage.push(...PathToPage)
  });

  // ページリストの順序を反転した上で隠しフォルダ(_付きフォルダ)を除外
  AllPage = AllPage.reverse().filter((element: string) => {
    return !/_/.test(element)
  })

  // ページデータを取得
  // 全ページデータを非同期で取得する
  const PageDataList: pageDataType[] = await Promise.all(AllPage.map((async (PathToPage: string) => {
    // 各ページのpageData.tsxからpageDataをモジュールとして取得
    const pageModule: pageModuleType = await import(`@/app/${PathToPage}/pageData.tsx`)
    // モジュールからPageDataを取得
    const pageData: pageDataType = pageModule.pageData
    // latestが指定されていなければdateをlatestに
    pageData.latest = pageData.latest === undefined ? pageData.date : pageData.latest
    // パスにpageのパスを登録しておく
    pageData.path = PathToPage
    return pageData
  })))

  return PageDataList
}
