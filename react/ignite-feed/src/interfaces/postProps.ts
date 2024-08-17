import { CommentProps } from "./commentProps"

export interface PostProps {
    id: string
    author: {
        name: string
        avatarUrl: string
        role: string
    },
    content: string
    publishedAt: Date
    comments: CommentProps[]
}

export interface PostPropsWithoutContentAndComments extends Omit<PostProps, 'comments'|'content'> {}