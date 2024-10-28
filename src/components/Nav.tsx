import nav from '../assets/shared/icon-hamburger.svg';
import logo from '../assets/shared/logo.svg';
import '../css/Home.css'
import '../css/nav.css'
import { Link } from 'react-router-dom';

export default function Nav() {
    return (  
        < >
            <nav className='nav flex relative z-50 items-center justify-between p-[24px] pl-[8px] pr-0 gap-4 lg:p-[24px] text-white'>
                    <Link className='transition-all duration-1000 hover:rotate-[360deg]' to='/'><img src={logo} alt="" /></Link>
                    <div className='relative list'>
                        <ul className='items-center justify-center hidden gap-10 p-5 pr-10 pl-36 sm:flex'>
                        <li><Link to='/' className='sections'>Home</Link></li>
                        <li><Link to='/destination' className='sections'>DESTINATION</Link></li>
                        <li><Link to='/crew' className='sections'>CREW</Link></li>
                        <li><Link to='/technology' className='sections'>TECHNOLOGY</Link></li>
                        </ul>
                    </div>
                    <button className='inline-block sm:hidden'> <img src={nav} alt="" /></button>
                </nav> 
        </>
    );
}

