interface CommentFormProps {
    newComment: string
    onNewCommentChange: (value: string) => void
    onComment: () => void
}

export function CommentForm({newComment, onNewCommentChange, onComment}: CommentFormProps) {
    function onSubmit(event: React.FormEvent) {
        event.preventDefault()
        onComment()
    }

    const isNewCommentEmpty = newComment.length === 0

    return (
        <form 
            className='border-gray-700 border-t w-full mt-6 pt-6 flex flex-col gap-4'
            onSubmit={onSubmit}
        >
            <strong className='text-gray-200 leading-relaxed'>Deixe seu feedback</strong>
            <textarea 
                className='w-full bg-gray-900 resize-none border-0 h-24 p-4 rounded-lg text-gray-200 leading-snug outline-0 ring-0 focus:border-green-300 focus:border'
                placeholder='Deixe um comentário'
                value={newComment}
                onChange={event => onNewCommentChange(event.target.value)}
                required
            />

            <button 
                type='submit'
                className='py-4 px-6 mt-4 rounded-lg border-0 bg-green-500 text-gray-200 font-bold cursor-pointer max-lg:w-full w-fit transition-colors hover:bg-green-300 group-focus disabled:opacity-80 disabled:hover:bg-green-500 disabled:cursor-not-allowed'
                disabled={isNewCommentEmpty}
            >
                Publicar
            </button>
        </form>
    )
}