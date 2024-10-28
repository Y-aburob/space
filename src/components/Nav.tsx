import { useState } from 'react';
import nav from '../assets/shared/icon-hamburger.svg';
import close from '../assets/shared/icon-close.svg';
import logo from '../assets/shared/logo.svg';
import '../css/Home.css'
import '../css/nav.css'
import { Link } from 'react-router-dom';

export default function Nav() {

    const [click, setClick] = useState(false)
    return (  
        < >
        <div className='z-50 flex justify-between sm:pt-5 nav'>
        <div className=''>
            <nav className={`flex justify-between p-4 w-[100vw] sm:w-fit`}>
                    <Link className='transition-all duration-1000 hover:rotate-[360deg]' to='/'><img src={logo} alt="" /></Link>
                    <button onClick={() => setClick(true)} className='inline-block sm:hidden'> <img src={nav} alt="" /></button>
            </nav> 
        </div>
        <div className={`fixed p-4 top-0 z-50 h-screen w-full text-white text-right backgroundTrans sm:h-fit sm:w-fit sm:static sm:flex sm:justify-center sm:items-center sm:self-center ${click? 'block': 'hidden'}`}>
            <button onClick={() => setClick(false)} className=''> <img src={close} alt="" className={`sm:hidden mt-3`}/></button>
            <ul className='flex flex-col items-center justify-center h-full gap-10 sm:flex-row sm:pl-20 sm:gap-14'>
            <li><Link to='/' className='sections'>Home</Link></li>
            <li><Link to='/destination' className='sections'>DESTINATION</Link></li>
            <li><Link to='/crew' className='sections'>CREW</Link></li>
            <li><Link to='/technology' className='sections'>TECHNOLOGY</Link></li>
            </ul>
        </div>
        {/* <div className='sm:absolute sm:top-[32px] sm:right-0 backgroundTrans blur-md sm:h-[50px] sm:w-[520px]'></div> for blur effect on nav*/}

        </div>
        </>
    );
}


// <nav className='nav flex relative z-50 items-center justify-between p-[24px] pl-[8px] pr-0 gap-4 lg:p-[24px] text-white'>
//         <Link className='transition-all duration-1000 hover:rotate-[360deg]' to='/'><img src={logo} alt="" /></Link>
//         <div className='relative list'>
//             <ul className='items-center justify-center hidden gap-10 p-5 pr-10 pl-36 sm:flex'>
//             <li><Link to='/' className='sections'>Home</Link></li>
//             <li><Link to='/destination' className='sections'>DESTINATION</Link></li>
//             <li><Link to='/crew' className='sections'>CREW</Link></li>
//             <li><Link to='/technology' className='sections'>TECHNOLOGY</Link></li>
//             </ul>
//         </div>
//         <button className='inline-block sm:hidden'> <img src={nav} alt="" /></button>
//     </nav> 