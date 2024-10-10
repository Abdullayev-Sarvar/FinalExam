import { BiRightArrowAlt } from "react-icons/bi";
import React from 'react'
import Container from '../../utils'

const BeautyBy = () => {
    return (
        <div className="my-10">
            <Container>
                <div className='flex flex-col gap-8 text-center text-black'>
                    <div className="w-full flex justify-center items-center">
                        <div className="w-full h-[2px] bg-[#9A9A9A]"></div>
                        <img className="bg-transparent" width={300} height={150} src="https://images.ctfassets.net/eoaaqxyywn6o/6i336sZ2TOseIYGXoA5znL/c510c196cea2b8ce229459518ba135f4/Site_Category_Carousel-_BY_BB_LOGO.png" alt="" />
                        <div className="w-full h-[2px] bg-[#9A9A9A]"></div>
                    </div>
                    <span className="px-8 text-lg">Looking for five-star formulas, minus the price tag? From skincare essentials to makeup must-haves and results-driven haircare, By BEAUTY BAY has everything you need to discover your next best obsession.</span>
                    <div className="flex justify-center">
                        <button className="flex justify-center items-center gap-2 italic font-medium rounded-xl text-white bg-black py-4 px-10">Shop Now <BiRightArrowAlt /></button>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default BeautyBy