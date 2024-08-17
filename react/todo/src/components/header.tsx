import logo from '../assets/logo.svg'

export function Header(){
    return (
        <div className="bg-gray-700 h-[200px] flex items-center justify-center">
            <img src={logo} alt="Todo" className='w-[126px] h-12' />
        </div>
    )
}