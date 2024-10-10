import { BsInstagram } from "react-icons/bs";
import React from 'react'
import Container from '../../utils';
import girl1 from '../../assets/imgs/girl1.png'
import girl2 from '../../assets/imgs/girl2.png'
import girl3 from '../../assets/imgs/girl3.png'
import girl4 from '../../assets/imgs/girl4.png'
import girl5 from '../../assets/imgs/girl5.png'
import girl6 from '../../assets/imgs/girl6.png'
import girl7 from '../../assets/imgs/girl7.png'

const Community: React.FC = () => {
  return (
    <div className='my-8 mt-12 py-10 pt-20 text-black'>
      <Container>
        <div className='flex justify-between items-center my-6'>
          <div className="flex flex-col gap-5 w-[400px]">
            <h3 className="flex items-center gap-2 text-3xl"><BsInstagram /> <span className="font-black italic uppercase">Our Community</span></h3>
            <span className="text-base">Show us your latest looks using <span className="font-black italic">#BEAUTYBAYhaul</span> for a chance to appear on our homepage.</span>
          </div>
          <div className='w-full max-w-[800px]'>
            <div className="carousel flex gap-2 rounded-md">
              <div className="carousel-item">
                <img
                  src={girl1}
                  width={210}
                  height={210}
                  alt="Girl" />
              </div>
              <div className="carousel-item">
                <img
                  src={girl2}
                  width={210}
                  height={210}
                  alt="Girl" />
              </div>
              <div className="carousel-item">
                <img
                  src={girl3}
                  width={210}
                  height={210}
                  alt="Girl" />
              </div>
              <div className="carousel-item">
                <img
                  src={girl4}
                  width={210}
                  height={210}
                  alt="Girl" />
              </div>
              <div className="carousel-item">
                <img
                  src={girl5}
                  width={210}
                  height={210}
                  alt="Girl" />
              </div>
              <div className="carousel-item">
                <img
                  src={girl6}
                  width={210}
                  height={210}
                  alt="Girl" />
              </div>
              <div className="carousel-item">
                <img
                  src={girl7}
                  width={210}
                  height={210}
                  alt="Girl" />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Community