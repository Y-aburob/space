import '../css/Home.css'
import Nav from './Nav';

export default function Home() {
    return (  

        <div className='flex flex-col overflow-hidden main lg:gap-52'>
            <Nav />
            <div className='flex flex-col items-center justify-center gap-24 lg:flex-row lg:justify-between lg:items-center lg:pl-[100px] lg:pr-[100px] xl:pr-[200px]'>
                <div className={`text-[#D0D6F9] spaceTitle text-center flex flex-col gap-7 mt-12 lg:text-left `}>
                    <h2 className='lg:text-[24px]'>SO, YOU WANT TO TRAVEL TO</h2>
                    <h1 className={`text-white text-7xl font-[500] tracking-wide spaceTtitle lg:text-[87px]`}>SPACE</h1>
                    <p className='max-w-[320px] sm:max-w-[512px] m-auto text-[15px] lg:text-[17px]'>
                        Let’s face it; if you want to go to space, you might as well
                        genuinely go to outer space and not hover kind of on
                        the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!
                    </p>
                </div>
                
                <div className=' circle relative rounded-full w-[144px] h-[144px] flex justify-center items-center sm:w-[202px] sm:h-[202px] lg:w-[242px] lg:h-[242px]'>
                    <h1 className='text-[#0B0D17] h-full w-full rounded-full text-center relative cursor-pointer'><span className='absolute -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2'>EXPLORE</span></h1>
                </div>
            </div>
        </div>
    );
}

