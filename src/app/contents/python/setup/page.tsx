import type { Metadata } from "next";
import { pageData } from "./pageData";
import Contents from '@/app/components/contents/Contents'
import Section from '@/app/components/contents/Section'
import SubSection from '@/app//components/contents/SubSection'
import Text from '@/app/components/contents/Text'
import CodeBox from '@/app/components/contents/CodeBox'
import ImageSet from '@/app/components/contents/ImageSet'
import image1 from "./image1.jpg"

export const metadata: Metadata = {
    title: `${pageData.title} | きなこの部屋`
}

export default function Page() {
    return (
        <>
            <Contents pageData={pageData}>
                <Section title="始めに">
                    <Text>この記事ではUbuntuでのPython実行環境の構築方法について紹介します。Pythonの仮想環境にはAnacondaを利用し、インストールから
                        コード実行までの流れをまとめています。
                    </Text>
                </Section>
                <Section title="Anacondaのインストール">
                    <SubSection><a href="https://www.anaconda.com/download" style={{ textDecoration: "underline", color: "#12BFEE", fontWeight: "normal" }}>(https://www.anaconda.com/download)</a>にアクセスし、
                        Anacondaのインストーラーをダウンロードする。</SubSection>
                    <Text>今回はターミナルからwgetコマンドで直接インストーラーをダウンロードします。また、Anacondaのインストールはホームディレクトリの
                        直下に行うものとします。以下に示すインストーラーのリンクは2024年10月19日時点で最新のものです。</Text>
                    <CodeBox lang={"shell"} comment={"ホームディレクトリで実行"}>{`~$ wget https://repo.anaconda.com/archive/Anaconda3-2024.06-1-Linux-x86_64.sh`}</CodeBox>
                    <SubSection>bashコマンドでインストーラーを実行する。</SubSection>
                    <CodeBox lang={"shell"} comment={"ホームディレクトリで実行"}>{`~$ bash Anaconda3-2024.06-1-Linux-x86_64.sh`}</CodeBox>
                    <Text>利用規約が自動的にコマンドラインに展開されるので読み進めた後yesで同意します。
                        インストールする場所を聞かれますが、今回は何も入力せずEnterで進みます。また、「You can undo this by running {`'`}conda init --reverse $SHELL{`'`}?」にもyesを入力します。</Text>
                    <SubSection>インストールしたAnacondaを確認する。</SubSection>
                    <CodeBox lang={"shell"} comment={"lsコマンドで確認"}>
                        {`~$ ls
Anaconda3-2024.06-1-Linux-x86_64.sh  anaconda3`}
                    </CodeBox>
                    <Text>anaconda3のフォルダ生成されていればインストールは成功しています。</Text>
                    <Text>インストーラーはもう必要ないので削除しておきます。</Text>
                    <CodeBox lang={"shell"} comment={"rmコマンドで削除"}>
                        {`~$ rm Anaconda3-2024.06-1-Linux-x86_64.sh`}
                    </CodeBox>

                </Section>
                <Section title="コマンドラインでのAnacondaの操作">
                    <SubSection>パスを通す。</SubSection>
                    <Text>Anacondaの操作にはcondaコマンドを利用しますが、インストールが完了しただけではUbuntuのコマンドラインでcondaコマンドは使えません。
                        よって、パスを通してコマンドを使用可能な状態にします。
                    </Text>
                    <CodeBox lang={"shell"} comment={"ホームディレクトリで実行"}>
                        {`~$ echo 'export PATH=$PATH:/anaconda3/bin' >> ~/.bashrc`}
                    </CodeBox>
                    <Text>.bashrcファイルの更新をコマンドラインに適用します。</Text>
                    <CodeBox lang={"shell"} comment={"ホームディレクトリで実行"}>
                        {`~$ source .bashrc`}
                    </CodeBox>
                    <Text>パスの開通に成功していればコマンドラインのユーザー名の左に(base)が追加され、Anacodaを実行可能状態になっています。</Text>
                    <CodeBox lang={"shell"} comment={"(base)が付けば仮想環境に入っている"}>
                        {`(base) user@DESKTOP:~$`}
                    </CodeBox>
                    <SubSection>condaコマンドで仮想環境に入る。</SubSection>
                    <Text>デフォルトではcondaのオートアクティベイトが適用適用されているため、オートアクティベイトを停止しコマンドから起動するようにします。</Text>
                    <CodeBox lang={"shell"} comment={"オートアクティベイトをオフにする"}>
                        {`~$ conda config --set auto_activate_base false`}</CodeBox>
                    <Text>ターミナルを再起動すると、オートアクティベイトが機能せず(base)が付かなくなります。</Text>
                    <Text>仮想環境にコマンドで入るにはacivateを利用します。</Text>
                    <CodeBox lang={"shell"} comment={"仮想環境に入る"}>
                        {`~$ conda activate`}</CodeBox>
                    <Text>仮想環境から出るにはdeactivateを利用します。</Text>
                    <CodeBox lang={"shell"} comment={"仮想環境から出る"}>
                        {`~$ conda deactivate`}</CodeBox>
                </Section>
                <Section title="pipコマンドの利用">
                    <Text>condaがactivate状態の時はpipコマンドで仮想環境内のPythonパッケージを管理できます。</Text>
                    <CodeBox lang={"shell"} comment={"モジュールのインストール"}>{`~$ pip install moduleName`}</CodeBox>
                    <CodeBox lang={"shell"} comment={"モジュールのアップグレード"}>{`~$ pip install -U moduleName`}</CodeBox>
                    <CodeBox lang={"shell"} comment={"インストール済みのモジュールの確認"}>{`~$ pip list`}</CodeBox>
                </Section>
                <Section title="VS Codeのセッティング">
                    <Text>Pythonの拡張機能をインストールします。</Text>
                    <ImageSet alt="拡張機能Python" height={200} width={600} image={image1} />
                </Section>
                <Section title="コマンドラインでの.pyファイルの実行">
                    <Text>仮想環境内でPythonファイルを実行できます。</Text>
                    <SubSection>.pyファイルの作成</SubSection>
                    <Text>Pythonの作業ディレクトリを用意し、Pythonファイルを作成します。</Text>
                    <CodeBox lang={"python"} comment={"sample/sample.py"}>{`import numpy as np
x=30
print("x=",x)
y=np.sin(np.pi*30/180)
print("y=",y)`}</CodeBox>
                    <SubSection>.pyファイルの実行</SubSection>
                    <Text>コマンドラインでpython3コマンドで.pyファイルを実行できます。</Text>
                    <CodeBox lang={"shell"} comment={"ターミナルで実行"}>
                        {`sample$ python3 sample.py
x= 30
y= 0.49999999999999994`}
                    </CodeBox>
                </Section>
            </Contents>
        </>
    )
}
