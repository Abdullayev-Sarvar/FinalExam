import { BiRightArrowAlt } from "react-icons/bi"; 
import React from 'react';
import Container from '../../utils';
import { useGetProductsQuery } from '../../redux/api/productsApi';
import { NavLink } from 'react-router-dom';

const Events: React.FC = () => {
  const { data: products, isLoading, isError } = useGetProductsQuery(undefined);

  if (isLoading) {
    return (
      <div className="w-full container h-screen mx-auto flex justify-center items-center">
        <div className="loader"></div>
      </div>
    );
  }
  if (isError) {
    return (
      <div className="w-full container h-screen mx-auto flex justify-center items-center">
        Error is here, please try again
      </div>
    );
  }

  return (
    <div className="text-black my-8">
      <Container>
        <div className="flex justify-evenly items-end gap-4">
          {products && products.slice(150, 152).map((product) => (
            <div key={product.id} className='flex flex-col gap-3 text-center text-black border-b border-b-gray-300'>
              <NavLink className='overflow-hidden' key={product.id} to={`/brands/${product.product_type}`}>
                <img width={600} height={600} src={product.api_featured_image} alt={product.name} className="w-full h-auto rounded-xl transition-all hover:scale-110" />
              </NavLink>
              <h3 className="font-bold text-xl">{product.name}</h3>
              <p className="text-base">{product.description.slice(0, 58)} ...</p>
              <button 
              onClick={() => window.location.href = `/brands/${product.product_type}`}
              className='font-bold italic py-3 px-16 rounded-xl bg-white text-black flex justify-center items-center gap-3'
              >Shop Now <BiRightArrowAlt /></button>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Events;