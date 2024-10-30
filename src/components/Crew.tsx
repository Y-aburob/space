import '../css/Crew.css'
import Nav from './Nav';
import douglas from '../assets/crew/image-douglas-hurley.png'
import mark from '../assets/crew/image-mark-shuttleworth.png'
import victor from '../assets/crew/image-victor-glover.png'
import ansari from '../assets/crew/image-anousheh-ansari.png'
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { div } from 'framer-motion/client';

export default function Crew() {

    const [currentId, setCurrentId] = useState('0')
    
    const crewList = ([
        {
        name: 'Douglas Hurley',
        style: 'Commander',
        description: 'Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.',
        src: douglas,
        id: '0'
        },
        {
        name: 'MARK SHUTTLEWORTH',
        style: 'Mission Specialist',
        description: 'Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.',
        src: mark,
        id: '1'
        },
        {
        name: 'Victor Glover',
        style: 'PILOT',
        description: 'Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.',
        src: victor,
        id: '2'
        },
        {
        name: 'Anousheh Ansari',
        style: 'Flight Engineer',
        description: 'Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.',
        src: ansari,
        id: '3'
        },
    ])
    

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentId((prevId) => (((parseInt(prevId) + 1) % crewList.length).toString() ));
        }, 3000);

        return () => clearInterval(intervalId);
    }, []);

    return (  
        < >
            <div className='mainCrew'>
                <Nav />
                <h1 className="text-xl font-light tracking-wider text-center text-white mt-7 word-spacing sm:text-left sm:ml-7 lg:ml-32">MEET YOUR CREW</h1>
                
                <div className='flex flex-col items-center justify-center p-4 mt-20 lg:h-screen lg:mt-0 lg:pb-3'>
                    
                    <AnimatePresence>
                    {crewList.map((crews, index) => (
                        <>
                        {crews.id === currentId&& (
                            <motion.div transition={{duration: 2}} initial={{opacity: 0}} animate={{opacity: 1}} key={index} className={`container flex flex-col items-center justify-center lg:pl-20 lg:flex-row lg:justify-start lg:gap-40`}>
                                <div className='text text-[#D0D6F9] text-center lg:text-left flex flex-col lg:justify-between lg:self-end lg:gap-[120px] pb-4'>
                                    <div>
                                        <h2 className='text-2xl text-white opacity-50 spaceTtitleCrew lg:text-4xl'>{crews.style}</h2>
                                        <h1 className='text-3xl text-white spaceTtitleCrew lg:text-5xl'>{crews.name}</h1>
                                        <p className='mt-10 max-w-[327px] sm:max-w-[512px] lg:max-w-[539px] text-[16px] lg:text-[20px]'>
                                            {crews.description}
                                        </p>
                                    </div>

                                    <div className='flex justify-center gap-4 mt-12 lg:justify-start'>
                                        <input onChange={(e) => setCurrentId(e.target.id)} className='hidden slider' type="radio" name="crew" id="0" /><label className={`label transition-all duration-500 bg-white w-4 h-4 rounded-full cursor-pointer ${currentId === '0'? 'opacity-100' : 'opacity-40'}`} htmlFor='0'></label>
                                        <input onChange={(e) => setCurrentId(e.target.id)} className='hidden slider' type="radio" name="crew" id="1" /><label className={`label transition-all duration-500 bg-white w-4 h-4 rounded-full cursor-pointer ${currentId === '1'? 'opacity-100' : 'opacity-40'}`} htmlFor='1'></label>
                                        <input onChange={(e) => setCurrentId(e.target.id)} className='hidden slider' type="radio" name="crew" id="2" /><label className={`label transition-all duration-500 bg-white w-4 h-4 rounded-full cursor-pointer ${currentId === '2'? 'opacity-100' : 'opacity-40'}`} htmlFor='2'></label>
                                        <input onChange={(e) => setCurrentId(e.target.id)} className='hidden slider' type="radio" name="crew" id="3" /><label className={`label transition-all duration-500 bg-white w-4 h-4 rounded-full cursor-pointer ${currentId === '3'? 'opacity-100' : 'opacity-40'}`} htmlFor='3'></label>
                                    </div>
                                </div>
                                
                                <div className='imgs max-w-[400px] text-center mt-10'>
                                    <img src={crews.src} className='lg:h-[520px]' alt="" />
                                </div>
                            </motion.div>
                        )}
                        </>
                        ))}
                    </AnimatePresence>
                    
                </div>
            </div>
        </>
    );
}