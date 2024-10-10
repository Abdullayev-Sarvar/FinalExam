import { BiRightArrowAlt } from "react-icons/bi"; 
import React from 'react'
import Container from '../../utils'
import { useGetProductsQuery } from '../../redux/api/productsApi'
import { NavLink } from 'react-router-dom'

const Healthy = () => {
  const { data: products, isLoading, isError } = useGetProductsQuery(undefined);

  const handleShopNowClick = (productType: string) => {
    setTimeout(() => {
      window.location.href = `/brands/${productType}`
    }, 2000); 
  };

  if (isLoading) {
    return <div className="w-full container h-screen mx-auto flex justify-center items-center"><div className="loader"></div></div>
  }
  if (isError) {
    return <div className="w-full container h-screen mx-auto flex justify-center items-center">Error is here, please try again</div>
  }
  return (
    <div>
      <Container>
        <div className='flex justify-between items-baseline gap-4'>
          {products && products.slice(82, 86).map((product) => (
            <div key={product.id} className='flex flex-col gap-3 text-black bg-[#F6F6F6] text-center text-opacity-95'>
              <NavLink className='overflow-hidden bg-[#F6F6F6]' key={product.id} to={`/details/${product.id}`}>
                <img width={200} height={200} src={product.api_featured_image} alt={product.name} className="w-full h-auto bg-[#F6F6F6] rounded-xl transition-all hover:scale-110" />
              </NavLink>
              <div className='flex flex-col gap-3 p-4'>
                <h3 className="font-bold text-xl">{product.name}</h3>
                <p className="text-base">{product.description.slice(0, 79) + ' ...'} </p>
                <button className="flex justify-center items-center gap-2 italic font-bold my-5" onClick={() => handleShopNowClick(product.product_type)}>Shop Now <BiRightArrowAlt /></button>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}

export default Healthy