interface PresentationProps {
    name: string
    role: string
}

export function Presentation({name, role}: PresentationProps) {
    return (
        <>
            <strong className='font-bold text-gray-200 leading-[1.6]'>{name}</strong>
            <span className='text-sm text-gray-400'>{role}</span>
        </>
    )
}