import React from 'react'
import Container from '../../utils'
import { NavLink } from 'react-router-dom'
import { useGetProductsQuery } from '../../redux/api/productsApi'

const Edited = () => {
    const { data: products, isLoading, isError } = useGetProductsQuery(undefined);

    if (isLoading) {
        return <div className="w-full container h-screen mx-auto flex justify-center items-center"><div className="loader"></div></div>
    }
    if (isError) {
        return <div className="w-full container h-screen mx-auto flex justify-center items-center"><div className="loader"></div></div>
    }
    return (
        <div className='my-12 text-black'>
            <Container>
                <div className='flex flex-col gap-8'>
                    <div className='flex flex-col items-center gap-6'>
                        <img width={112} height={25} src="https://images.ctfassets.net/eoaaqxyywn6o/5Vukic1DKqF8l35OlJ3mYE/3862179c4693d4a147859af325a1bf08/EDITEDLOGO_Full_2.svg" alt="" />
                        <span>Discover the latest and greatest in beauty, including tutorials, trends, reviews and advice.</span>
                    </div>
                    <div className="relative">
                        <div className="carousel flex gap-3 carousel-center rounded-box border-b-2 border-gray-300 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-200 py-4">
                            {products && products.slice(100, 108).map((product) => (
                                <div key={product.id} className="carousel-item flex flex-col gap-3 p-2">
                                    <NavLink to={`/details/${product.id}`}>
                                        <img src={product.api_featured_image} alt={product.name} className="w-full h-auto" />
                                    </NavLink>
                                    <h3 className="font-bold text-xl">{product.name}</h3>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='flex justify-center mt-6'>
                        <NavLink to='/products'>
                            <button className='border border-gray-300 rounded-xl py-3 px-12'>Read More</button>
                        </NavLink>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Edited