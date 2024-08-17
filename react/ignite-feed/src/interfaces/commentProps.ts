export interface CommentProps {
    id: string
    author: {
        name: string
        avatarUrl: string
    }
    content: string
    publishedAt: Date
    likes: number
    currentUserLikedIt: boolean
}

export interface CommentPropsWithoutContent extends Omit<CommentProps, 'content'> {}