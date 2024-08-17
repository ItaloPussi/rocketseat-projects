import logo from '../assets/logo.svg'

export function Header(){
    return (
        <div className="max-lg:h-20 h-25 bg-gray-800 flex items-center justify-center gap-4 py-5">
            <img src={logo} alt="logo" className="max-lg:w-12 w-16"/>
            <h3 className='text-gray-200 font-bold text-2xl'>Ignite Feed</h3>
        </div>
    )
}