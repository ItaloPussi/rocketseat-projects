
import { faker } from "@faker-js/faker";
import { useState } from "react";
import { mockPosts } from "../utils/mock";
import { Post } from "./post";

export function Posts(){
    const [posts, setPosts] = useState(mockPosts())

    function handleDeleteComment(postId: string, commentid: string) {
        setPosts(p => p.map(post => {
            if(post.id === postId){
                return {
                    ...post,
                    comments: post.comments.filter(comment => comment.id !== commentid)
                }
            }
            return post
        }))
    }
     
    function handleLikeComment(postId: string, commentId: string){
        setPosts(p => p.map(post => {
            if(post.id === postId){
                return {
                    ...post,
                    comments: post.comments.map(comment => {
                        if(comment.id === commentId){
                            return {
                                ...comment,
                                likes: comment.currentUserLikedIt ? comment.likes - 1 : comment.likes + 1,
                                currentUserLikedIt: !comment.currentUserLikedIt
                            }
                        }
                        return comment
                    })
                }
            }
            return post
        }))

    }

    function handleAddComment(postId: string, content: string) {
        setPosts(p => p.map(post => {
            if(post.id === postId){
                return {
                    ...post,
                    comments: [
                        {
                            id: faker.string.uuid(),
                            author: {
                                name: "Italo Pussi",
                                avatarUrl: "https://github.com/italopussi.png",
                            },
                            content,
                            publishedAt: new Date(),
                            likes: 0,
                            currentUserLikedIt: false
                        },
                        ...post.comments
                    ]
                }
            }
            return post
        }))
    }


    return (
        <aside className="flex-1">
            {posts.map(post => (
                <Post
                    key={post.id}
                    id={post.id}
                    author={post.author}
                    content={post.content}
                    publishedAt={post.publishedAt}
                    comments={post.comments}
                    onCommentCreation={handleAddComment}
                    onCommentLike={handleLikeComment}
                    onCommentDelete={handleDeleteComment}
                />
            ))}
        </aside>
    )
}