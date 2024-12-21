import Link from "next/link";

type LinkInType = {
    link: string,
    title: string
}
export default function LinkIn({ link, title }: LinkInType) {
    return (
        <div style={{ backgroundColor: "#ffffff", height: "60px", width: "100%", border: "solid 2px", borderColor: "rgba(0,0,0,0.5)", borderRadius: "10px", marginTop: "15px", position: "relative", display: "flex", padding: "0 20px", overflow: "hidden", }}>
            <Link href={`/contents/${link}`} style={{ display: "block", height: "100%", width: "100%", position: "absolute" }}>
                <div style={{ padding: "0 20px", fontSize: "12px", backgroundColor: "#00aaff", position: "absolute", left: "0px", borderRadius: "0 0 5px 5px", textAlign: "center", display: "flex", justifyContent: "center", color: "white", fontWeight: "bold" }}>リンク</div>
                <p style={{ width: "100%", height: "30px", overflow: "hidden", whiteSpace: "nowrap", fontSize: "20px", position: "absolute", bottom: "8px" }}>
                    {title}
                </p>
            </Link>
        </div>
    )
}