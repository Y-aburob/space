import Nav from "./Nav";
import '../css/Destination.css'
import moon from '../assets/destination/image-moon.png'
import mars from '../assets/destination/image-mars.png'
import europa from '../assets/destination/image-europa.png'
import titan from '../assets/destination/image-titan.png'
import { useState } from "react";

export default function Destination() {

    const [currentId, setCurrentId] = useState('0')

    const destinationList = ([
        {name: 'MOON', 
        description: 'See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.',
        distance: '384,400 km',
        time: '3 DAYs',
        src: moon,
        id: '0'
        },
        {name: 'MARS', 
        description: 'Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!',
        distance: '225 MIL. km',
        time: '9 months',
        src: mars,
        id: '1'
        },
        {name: 'EUROPA', 
        description: 'The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.',
        distance: '628 MIL. km',
        time: '3 years',
        src: europa,
        id: '2'
        },
        {name: 'TITAN', 
        description: 'The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.',
        distance: '1.6 BIL. km',
        time: '7 years',
        src: titan,
        id: '3'
        },
    ])


    return (  
        < >
            <div className="relative min-h-screen h-[200vh] lg:h-[123vh] lg:overflow-hidden overflow-hidden sm:overflow-visible banner">
                <Nav />
                <h1 className="text-xl tracking-wider text-center text-white mt-7 word-spacing sm:text-left sm:ml-7 lg:ml-32">PICK YOUR DESTINATION</h1>
                {destinationList.map((planet, index) => (
                    <div key={index} className={`absolute top-32 left-1/2 -translate-x-1/2 text-[#D0D6F9] flex flex-col justify-center items-center p-[24px] mt-16 text-center transition-all duration-1000 ${currentId === planet.id? 'opacity-100 ':'opacity-0 '}`}>
                    <div className="flex flex-col items-center gap-20 justify-normal lg:flex-row">
                        <div className={`w-[226px] h-[226px] turn relative flex justify-center items-center lg:w-[460px] lg:h-[460px] ${planet.name} lg:before:!top-[23px] lg:before:!h-[88%]`}>
                            <img className="" src={planet.src} alt="" />
                        </div>
                        
                        <div className="flex flex-col gap-7">
                            
                            <div className="lg:text-left">
                                <form className={`flex justify-center tracking-wide gap-9 lg:justify-start`}>
                                    <input  onChange={(e) => setCurrentId(e.target.id)} name='planets' type="radio" className="hidden text-lg" id="0"/><label id="0"  className={`cursor-pointer md:p-3 planets moon`} htmlFor="0">MOON</label>
                                    <input  onChange={(e) => setCurrentId(e.target.id)} name='planets' type="radio" className="hidden text-lg" id="1"/><label id="1"  className="cursor-pointer md:p-3 planets mars" htmlFor="1">MARS</label>
                                    <input  onChange={(e) => setCurrentId(e.target.id)} name='planets' type="radio" className="hidden text-lg" id="2"/><label id="2"  className="cursor-pointer md:p-3 planets europa" htmlFor="2">EUROPA</label>
                                    <input  onChange={(e) => setCurrentId(e.target.id)} name='planets' type="radio" className="hidden text-lg" id="3"/><label id="3"  className="cursor-pointer md:p-3 planets titan" htmlFor="3">TITAN</label>
                                </form>
                                <div className="flex flex-col items-center justify-center gap-8 mt-16 lg:items-start">
                                    <h1 className={`transition-all duration-500 tracking-widest text-white letterSpacing text-7xl spaceTtitle ${currentId === planet.id? 'opacity-100 translate-x-0':'opacity-0 translate-x-1/2'}`}>{planet.name}</h1>
                                    <p className={`text-[18px] max-w-[500px]`}>
                                        {planet.description}
                                    </p>
                                </div>
                            </div>
                            <hr className="bg-white opacity-50" />
                            
                            <div className="flex flex-col items-center justify-center gap-6 lg:flex-row lg:gap-20 lg:justify-start lg:text-left">
                                <div className="flex flex-col gap-3">
                                    <p className="">AVG. DISTANCE</p>
                                    <h2 className={`text-3xl text-white spaceTtitles`}>{planet.distance}</h2>
                                </div>
                                <div className="flex flex-col gap-3">
                                    <p>Est. travel time</p>
                                    <h2 className="text-3xl text-white spaceTtitles">{planet.time}</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                ))}
            </div>
        </>
    );
}

