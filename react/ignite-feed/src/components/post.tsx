import { useState } from 'react';
import { useFormattedDate } from '../hooks/useFormattedDate';
import { PostProps } from '../interfaces/postProps';
import { formatText } from '../utils/formatText';
import { Avatar } from "./avatar";
import { Comment } from './comment';
import { CommentForm } from './commentForm';
import { Presentation } from './presentation';

interface PostExtraProps extends PostProps {
    onCommentCreation: (postId: string, content: string) => void
    onCommentLike: (postId: string, commentId: string) => void
    onCommentDelete: (postId: string, commentId: string) => void
}

export function Post({id, author, content, publishedAt, comments, onCommentCreation, onCommentLike, onCommentDelete}: PostExtraProps) {
    const [commentContent, setCommentContent] = useState('')

    const { displayDate, relativeToNowDisplayDate} = useFormattedDate(publishedAt)

    return (
        <article className="rounded-lg bg-gray-800 p-10 gap-6 flex flex-col mb-8">
            <header className='flex gap-4 items-center max-lg:flex-col'>
                <div className='flex gap-4 items-center'>
                    <Avatar avatarUrl={author.avatarUrl}  />
                    <div className='flex-col flex max-lg:items-center'>
                        <Presentation name={author.name} role={author.role} />
                    </div>
                </div>
                <time title={displayDate} dateTime={publishedAt.toISOString()} className='text-sm text-gray-400 flex-1 text-right'>
                    {relativeToNowDisplayDate}
                </time>
            </header>
            <div className='text-gray-200 leading-relaxed'>
                {formatText(content)}
            </div>

           <CommentForm 
               newComment={commentContent}
               onNewCommentChange={setCommentContent}
               onComment={() => {
                    onCommentCreation(id, commentContent)
                    setCommentContent('')
               }}
           />
            <div className='mt-8'>
                {comments.map(comment => (
                    <Comment 
                        key={comment.id} 
                        id={comment.id}
                        author={comment.author} 
                        content={comment.content} 
                        publishedAt={comment.publishedAt} 
                        likes={comment.likes}
                        currentUserLikedIt={comment.currentUserLikedIt}
                        onCommentLike={() => onCommentLike(id, comment.id)}
                        onCommentDelete={() => onCommentDelete(id, comment.id)}
                    />
                ))}
            </div>
        </article>
    )
}