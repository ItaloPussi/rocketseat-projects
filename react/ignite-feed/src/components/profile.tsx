import { PencilLine } from 'lucide-react'
import { Avatar } from './avatar'
import { Presentation } from './presentation'

interface ProfileProps {
    name: string
    role: string
    cover: string
    avatarUrl: string
}

export function Profile({name, role, cover, avatarUrl}: ProfileProps) {
    return (
        <aside className="w-[297px] max-lg:w-full bg-gray-800 h-fit rounded-lg overflow-hidden ">
            <img src={cover} alt="cover" className='w-full h-[72px] object-cover'/>

            <div className='flex flex-col items-center mt-[-32px]'>
                <Avatar avatarUrl={avatarUrl} />
                <div className='mb-4' />
                <Presentation name={name} role={role} />
            </div>

            <footer className='border-t border-gray-700 mt-6 p-8 pt-6'>
                <a className='bg-transparent text-green-500 border-green-500 border h-[50px] round-lg px-6 font-bold no-underline flex justify-center items-center hover:bg-green-300 hover:text-gray-200 transition-colors gap-[10px]' href="#">
                    <PencilLine size={20}/>
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    )
}