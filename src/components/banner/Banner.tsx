import React from 'react'
import { NavLink } from 'react-router-dom';
import Container from '../../utils';
import BannerFirst from '../../assets/imgs/banner-1.png'

const Banner: React.FC = () => {
    return (
        <div className='w-full h-screen my-4 py-8'>
            <Container>
                <div className='w-full h-full relative px-2'>
                    <img width={950} height={550} src={BannerFirst} alt="" />
                    <div className='absolute top-40 left-3/4 -translate-x-80'>
                        <div className='px-10 py-10 flex flex-col gap-2 w-full min-w-[500px] text-white text-center bg-[#481A2A] '>
                            <strong className='text-4xl italic font-extrabold'>Colours of the cosmos</strong>
                            <span>
                                Your ethereal side is calling. Go beyond with the new By BEAUTY BAY Celestial Charms Collection.
                            </span>
                            <NavLink className='mt-5' to='/products'>
                                <button className='py-3 px-16 rounded-xl bg-white text-black'>Shop Now</button>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Banner