import clsx from "clsx";

interface AvatarProps {
    avatarUrl: string;
    showBorder?: boolean;
}

export function Avatar({avatarUrl, showBorder = true}: AvatarProps) {
    return (
        <img src={avatarUrl} className={clsx(
            "w-12 h-12 box-content rounded-lg ", 
            showBorder && "border-gray-900 border-4 outline-2 outline-green-500 outline",
            !showBorder && "w-14 h-14"
        )} />
    )
}