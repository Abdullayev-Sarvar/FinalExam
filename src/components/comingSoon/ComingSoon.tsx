import React from 'react'
import { FiArrowRight } from 'react-icons/fi'
import ComingSoonImage from '../../assets/imgs/comingSoon.png'
import Container from '../../utils'

const ComingSoon: React.FC = () => {
    return (
        <div>
            <Container>
                <div className="flex items-center justify-between p-10">
                    <div className="w-1/2 ">
                        <img src={ComingSoonImage} alt="Beauty Bay Boxes" className="object-cover w-full h-full" />
                    </div>
                    <div className="w-1/2 pl-10 bg-white p-10 text-white h-[300px] ml-[0px]">
                        <h1 className="text-4xl font-bold text-black mb-4">IT'S NEVER TOO EARLY...</h1>
                        <p className="text-lg text-gray-600 mb-6">
                            Our BEAUTY BAY festive boxes are on their way. Be the first to hear when they land and join our waitlist.
                        </p>
                        <span className="text-lg font-bold text-black flex items-center">
                            COMING SOON <FiArrowRight className="ml-2" />
                        </span>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default ComingSoon