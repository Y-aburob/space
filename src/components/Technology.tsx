import '../css/Technology.css'
import launchVehicle from '../assets/technology/image-launch-vehicle-portrait.jpg'
import spacePort from '../assets/technology/image-spaceport-portrait.jpg'
import spaceCapsule from '../assets/technology/image-space-capsule-portrait.jpg'
import Nav from './Nav';
import { useState } from 'react'

export default function Technology() {

        const [currentId, setCurrentId] = useState('0')
        const vehicleList= ([
        {
            name: 'LAUNCH VEHICLE',
            description: "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
            src: launchVehicle,
            id:"0"
        },
        {
            name: 'SPACEPORT',
            description: "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
            src: spacePort,
            id:"1"
        },
        {
            name: 'SPACE CAPSULE',
            description: "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
            src: spaceCapsule,
            id:"2"
        },
    ])
    
    return (

    < >
        <div className="mainTechnology min-h-[200vh] lg:min-h-[140vh] relative overflow-hidden sm:overflow-visible">
            <Nav />
            
            <h1 className="text-xl font-light tracking-wider text-center text-white mt-7 word-spacing sm:text-left sm:ml-7 lg:ml-32">SPACE LAUNCH 101</h1>
            
            {/* <div className='relative w-full h-full'> */}
                {vehicleList.map((vehicle) => (
                <div key={vehicle.id} className={`w-full transition-all absolute left-1/2 -translate-x-1/2 lg:w-full duration-500 mt-20 ${currentId === vehicle.id? 'opacity-100': 'opacity-0'}`}>
                    <div className=' p-5 lg:p-0 lg:absolute lg:right-0 max-h-[450px] lg:w-[540px] lg:max-h-[590px] md:overflow-hidden lg:cursor-pointer'>
                    <img className='object-contain lg:object-cover w-full h-[450px] lg:w-full lg:h-full transition-all duration-500 lg:hover:scale-125' src={vehicle.src} alt="" />
                    </div>
                    
                    <div className='text '>
                        <div className='text-[#D0D6F9] p-7 text-center flex flex-col justify-center items-center lg:justify-start lg:flex-row lg:gap-8 lg:h-[75vh]'>
                            <div className='flex justify-center gap-4 mt-5 lg:justify-start lg:flex-col lg:gap-16'>
                                <input onChange={(e) => setCurrentId(e.target.id)} className='hidden slider' type="radio" name="crew" id="0" /><label className={`label font-bold text-white flex justify-center items-center transition-all duration-500 p-5 md:p-8 border-2 w-6 h-6 rounded-full cursor-pointer hover:bg-white hover:text-black `} htmlFor='0'>1</label>
                                <input onChange={(e) => setCurrentId(e.target.id)} className='hidden slider' type="radio" name="crew" id="1" /><label className={`label font-bold text-white flex justify-center items-center transition-all duration-500 p-5 md:p-8 border-2 w-6 h-6 rounded-full cursor-pointer hover:bg-white hover:text-black `} htmlFor='1'>2</label>
                                <input onChange={(e) => setCurrentId(e.target.id)} className='hidden slider' type="radio" name="crew" id="2" /><label className={`label font-bold text-white flex justify-center items-center transition-all duration-500 p-5 md:p-8 border-2 w-6 h-6 rounded-full cursor-pointer hover:bg-white hover:text-black `} htmlFor='2'>3</label>
                            </div>
                            <div className={`transition-all duration-700 flex flex-col items-center justify-center mt-12 text-center lg:text-left lg:items-start lg:mr-[56%]`}>
                                <h2 className={`text-2xl text-white opacity-50 spaceTtitleCrew lg:text-4xl`}>THE TERMINOLOGY…</h2>
                                <h1 className={`transition-all duration-1000 mt-5 text-3xl text-white spaceTtitleCrew lg:text-5xl ${currentId === vehicle.id? 'opacity-100 translate-x-0': 'opacity-0 translate-x-20'}`}>{vehicle.name}</h1>
                                <p className={`transition-all duration-1000 mt-10 max-w-[327px] sm:max-w-[512px] lg:max-w-[539px] text-[16px] lg:text-[20px] ${currentId === vehicle.id? 'opacity-100 translate-x-0': 'opacity-0 translate-x-20'}`}>
                                    {vehicle.description}
                                </p>
                            </div>

                        </div>
                </div>
                </div>
                ))}
            {/* </div> */}
        </div>
    </>
    );
}