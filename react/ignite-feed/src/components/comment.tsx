import clsx from "clsx"
import { ThumbsUp, Trash } from "lucide-react"
import { useFormattedDate } from '../hooks/useFormattedDate'
import { CommentProps } from "../interfaces/commentProps"
import { Avatar } from "./avatar"

interface CommentExtraProps extends CommentProps {
    onCommentLike: () => void
    onCommentDelete: () => void
}

export function Comment({content, author, publishedAt, likes, currentUserLikedIt, onCommentLike,onCommentDelete}: CommentExtraProps) {
    const { displayDate, relativeToNowDisplayDate} = useFormattedDate(publishedAt)

    return (
        <div className="flex gap-4 mb-8">
            <Avatar avatarUrl={author.avatarUrl} showBorder={false} />

            <div className="flex-1 ">
                <div className="flex flex-col p-4 gap-4 bg-gray-750 rounded-lg">
                    <header className="flex justify-between items-center">
                        <div className="flex flex-col">
                            <strong className="text-gray-200 leading-relaxed text-sm">{author.name}</strong>
                            <time title={displayDate} dateTime={publishedAt.toISOString()} className='text-xs text-gray-400 leading-relaxed'>
                                {relativeToNowDisplayDate}
                            </time>
                        </div>

                        <button title="Deletar" className="rounded-md" onClick={onCommentDelete}>
                            <Trash className="text-gray-400 w-6 h-6 hover:text-red-500" />
                        </button>
                    </header>
                    <p className="text-gray-300 text-sm">{content}</p>
                </div>
                <footer className="mt-4">
                    <button 
                        className={clsx(
                            "bg-transparent border-0 flex items-center gap-2 text-gray-500 hover:text-green-300",
                            currentUserLikedIt && "text-green-300"
                        )}
                        onClick={onCommentLike}
                    >
                        <ThumbsUp />
                        Aplaudir <span className="before:py-0 before:px-1 before:mr-2 before:content-['\2022']">{likes}</span>
                    </button>
                </footer>    
            </div>
        </div>
    )
}