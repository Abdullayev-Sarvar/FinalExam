import React from 'react'
import Container from '../../utils'
import Baylogo from '../../assets/imgs/baylogo.png'
import avene from '../../assets/imgs/avene.png'
import joseon from '../../assets/imgs/joseon.png'
import solde from '../../assets/imgs/solDe.png'
import skin1004 from '../../assets/imgs/skin1004.png'
import Anua from '../../assets/imgs/anua.png'

const BrandsHome: React.FC = () => {
    return (
        <div className='text-black'>
            <Container>
                <div className="p-8 max-w-[1600px] mx-auto">
                    <h1 className="text-4xl font-bold mb-12 text-center ">SHOP BY BRAND</h1>
                    <div className="flex space-x-6 overflow-x-auto scrollbar-hide py-4 bg-white rounded-[50px] cursor-pointer ">
                        {[
                            { img: Baylogo, name: "BY BEAUTY BAY" },
                            { img: avene, name: "AVENE" },
                            { img: solde, name: "SOLDE" },
                            { img: joseon, name: "BEAUTY OF JOSEON" },
                            { img: Anua, name: "ANUA" },
                            { img: skin1004, name: "SKIN1004" },
                        ].map((brand, index) => (
                            <div key={index} className="flex-shrink-0 flex flex-col items-center p-6 rounded-lg transition-all hover:scale-105">
                                <img src={brand.img} alt={brand.name} className="h-[300px] w-auto object-contain" />
                                <h1 className="text-xl font-semibold mt-4 text-gray-800">{brand.name}</h1>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default BrandsHome