type CodeInType = {
    children: string
}
export default function CodeIn({ children }: CodeInType) {
    return (
        <span className="font-mono">{children}</span>
    )
}