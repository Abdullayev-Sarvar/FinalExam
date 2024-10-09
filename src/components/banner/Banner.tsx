import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/zoom';
import 'swiper/css/autoplay';
import Container from '../../utils';
import { useGetProductsQuery } from '../../redux/api/productsApi';

const Banner: React.FC = () => {
    const { data: products } = useGetProductsQuery(undefined);
    return (
        <div className='w-full h-screen bg-green-400'>
            <Container>
                <Swiper
                    spaceBetween={50}
                    slidesPerView={1}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false
                    }}
                    zoom={true}
                    effect="fade"
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    style={{ width: '50%', height: '100%' }} 
                >
                    {products &&
                        products?.map((product) => (
                            <SwiperSlide key={product.id}>
                                <img className='w-full h-full object-fill' src={product.image_link} alt="Product Image" />
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
                yufgyuguy
            </Container>
        </div>
    )
}

export default Banner