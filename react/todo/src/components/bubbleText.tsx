interface BubbleTextProps {
    text: string
}

export function BubbleText({text}: BubbleTextProps){
    return (
        <span className="flex text-gray-200 bg-gray-400 px-2 py-[1px] rounded-[999px] text-sm">
            {text}
        </span>
    )
}