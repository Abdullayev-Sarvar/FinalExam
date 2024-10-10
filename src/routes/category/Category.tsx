import { BiRightArrowAlt } from 'react-icons/bi';
import React, { useState } from 'react';
import { useGetCategoryProductsQuery } from '../../redux/api/productsApi';
import Container from '../../utils';
import { NavLink, useParams } from 'react-router-dom';

type ProductProps = {
  id: number;
  name: string;
  description: string;
  api_featured_image: string;
  product_colors: { hex_value: string; colour_name: string }[];
};

const Category: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const { category } = useParams<{ category: string }>();
  const { data: products = [], isError, isLoading } = useGetCategoryProductsQuery(category || '');

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const filteredProducts = products.filter((product) => {
    return product.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  if (isLoading) {
    return (
      <div className='w-full container h-screen mx-auto flex justify-center items-center'>
        <div className="loader"></div>
      </div>
    );
  }
  if (isError) {
    return (
      <div className='w-full container h-screen mx-auto flex justify-center items-center'>
        Error is here, please try again!
      </div>
    );
  }

  return (
    <div className='text-black py-8'>
      <Container>
        <div className='flex flex-col gap-4'>
          <div className='flex justify-between items-baseline'>
            <h1 className='text-3xl font-bold uppercase'>Category - {category}</h1>
            <div className='flex flex-col'>
              <label htmlFor="searchInput">Search products:</label>
              <input
                id='searchInput'
                type="text"
                value={searchTerm}
                onChange={handleSearch}
                placeholder="Search by name"
                className='border border-gray-400 p-2 rounded-lg bg-transparent px-10 py-2'
              />
            </div>
          </div>
          <div className='grid grid-cols-4 items-baseline gap-6'>
            {filteredProducts && filteredProducts.map((product: ProductProps) => (
              <div key={product.id} className="flex flex-col gap-3 text-black bg-[#F6F6F6] text-center text-opacity-95">
                <NavLink className="overflow-hidden bg-[#F6F6F6]" to={`/details/${product.id}`}>
                  <img width={200} height={200} src={product.api_featured_image} alt={product.name} className="w-full h-auto bg-[#F6F6F6] rounded-xl transition-all hover:scale-110" />
                </NavLink>
                <div className="flex flex-col gap-3 p-2">
                  <h3 className="font-bold text-xl">{product.name}</h3>
                  <p className="text-base">{product.description?.slice(0, 79) + ' ...'}</p>
                  <div className='flex gap-3 py-3'>
                    {product.product_colors && (
                      <div className='flex gap-3 items-center'>
                        {product.product_colors.slice(0, 4).map((color: any, index: number) => (
                          <div key={index} className="relative group">
                            <div
                              className="w-8 h-8 rounded-full"
                              style={{ backgroundColor: color.hex_value }}
                            ></div>
                            <div className="absolute left-0 -top-14 w-max bg-white p-3 text-lg text-black font-bold rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
                              {color.colour_name || 'Unnamed Color'}
                            </div>
                          </div>
                        ))}
                        {product.product_colors.length > 4 && (
                          <div className="text-sm">+{product.product_colors.length - 4} more colors</div>
                        )}
                        {product.product_colors.length === 0 && (
                          <div className="text-sm">No colors available</div>
                        )}
                      </div>
                    )}
                  </div>
                  <button
                    onClick={() => window.location.href = `/details/${product.id}`}
                    className="flex justify-center items-center gap-2 italic font-bold my-5">
                    Shop Now <BiRightArrowAlt />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Category;