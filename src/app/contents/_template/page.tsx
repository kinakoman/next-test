import type { Metadata } from "next";
import { pageData } from "./pageData";
import Contents from '@/app/components/contents/Contents'
import Section from '@/app/components/contents/Section'
import Text from '@/app/components/contents/Text'
// import SubSection from '@/app//components/contents/SubSection'
// import CodeBox from '@/app/components/contents/CodeBox'
// import ImageSet from '@/app/components/contents/ImageSet'

export const metadata: Metadata = {
    title: `${pageData.title} | きなこの部屋`
}

export default function Page() {
    return (
        <>
            <Contents pageData={pageData}>
                <Section title="はじめに">
                    <Text>テキスト</Text>
                </Section>
                {/* <Section title="セクション名">
                    <SubSection>サブセクションタイトル</SubSection>
                    <Text>
                        本文のテキストが本文のテキストで本文のテキストが本文のテキスト
                        本文のテキストが本文のテキストで本文のテキストが本文のテキスト
                        <CodeIn>
                            {`console.log`}
                        </CodeIn>
                        本文のテキストが本文のテキストで本文のテキストが本文のテキスト
                        本文のテキストが本文のテキストで本文のテキストが本文のテキスト
                    </Text>
                    <LinkIn link={"PythonInstall"} title={"ページのタイトルページのタイトルページのタイトル"}></LinkIn>
                    <CodeBox lang={"javascript"} comment={"コードの例"}>{`console.log("test")`}</CodeBox>
                    <ImageSet alt="テスト画像" height={200} width={200} image={image} />
                </Section> */}
            </Contents>
        </>
    )
}
