

import logo from '../assets/logo.png';

interface NavbarProps {
  coin: number;
}

export default function Navbar({coin} : NavbarProps){
    return (
        <nav className='bg-yellow-50 px-10 py-5'>
            <div className='flex items-center justify-between text-2xl font-semibold text-black'>
                <img src={logo} alt="Logo" />
                <ul className='flex gap-8'>
                    <li className='hover:text-blue-400'><a href="/">Home</a></li>
                    <li className='hover:text-blue-400'><a href="/">Fixture</a></li>
                    <li className='hover:text-blue-400'><a href="/">Players</a></li>
                    <li className='hover:text-blue-400'><a href="/">Schedule</a></li>
                </ul>
                <button className='rounded-lg border border-white px-4 py-2 text-lg font-semibold text-black'>
                    {coin} Coin
                </button>
            </div>
            <div></div>
        </nav>
    );
}
