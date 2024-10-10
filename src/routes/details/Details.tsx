import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import Container from '../../utils';
import { useParams } from 'react-router-dom';
import { useDetailsProductQuery } from '../../redux/api/productsApi';
import { addFavorite, removeFavorite } from '../../redux/slice/favoriteSlice';
import { addToCart, removeFromCart } from '../../redux/slice/cartSlice';
import { notification } from 'antd';
import { SmileOutlined, FrownOutlined } from '@ant-design/icons';
import { HiOutlineEmojiSad } from 'react-icons/hi';
import { BiHeart } from "react-icons/bi";
import { BsFillSuitHeartFill } from "react-icons/bs";

type Currency = 'USD' | 'UZS' | 'EUR' | 'GBP' | 'RUB';

type ConversionRates = {
  [key: string]: number;
  USD: number;
  UZS: number;
  EUR: number;
  GBP: number;
  RUB: number;
};


const Details: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { data: product, isError, isLoading } = useDetailsProductQuery(id!);
  const favorites = useSelector((state: RootState) => state.favorite.favorites);
  const cart = useSelector((state: RootState) => state.cart.products);
  const selectedCurrency = useSelector((state: RootState) => state.currency.selectedCurrency) as Currency;
  const conversionRates = useSelector((state: RootState) => state.currency.conversionRates) as ConversionRates;
  const dispatch = useDispatch();
  const [api, contextHolder] = notification.useNotification();
  const [selectedColor, setSelectedColor] = useState<any>(null);

  const isFavorite = (productId: number) => {
    return favorites.some((item: any) => item.id === productId);
  };

  const isInCart = (productId: number) => {
    return cart.some((item: any) => item.id === productId);
  };

  const handleFavoriteClick = (product: any) => {
    if (isFavorite(product.id)) {
      dispatch(removeFavorite(product.id));
      api.open({
        message: 'Removed from Favorites',
        description: `You have removed ${product.name} from favorites.`,
        icon: <HiOutlineEmojiSad style={{ color: '#ff4d4f' }} />,
      });
    } else {
      dispatch(addFavorite(product));
      api.open({
        message: 'Added to Favorites',
        description: `You have added ${product.name} to favorites.`,
        icon: <SmileOutlined style={{ color: '#108ee9' }} />,
      });
    }
  };

  const handleCartClick = (product: any) => {
    if (isInCart(product.id)) {
      dispatch(removeFromCart(product.id));
      api.open({
        message: 'Removed from Cart',
        description: `You have removed ${product.name} from your cart.`,
        icon: <FrownOutlined style={{ color: '#ff4d4f' }} />,
      });
    } else {
      dispatch(addToCart(product));
      api.open({
        message: 'Added to Cart',
        description: `You have added ${product.name} to your cart.`,
        icon: <SmileOutlined style={{ color: '#108ee9' }} />,
      });
    }
  };

  const handleColorSelect = (color: any) => {
    setSelectedColor(color);
  };

  const convertPrice = (price: number, currency: string) => {
    return (price * conversionRates[currency]).toFixed(2);
  };

  if (isLoading) {
    return <div className="w-full container h-screen mx-auto flex justify-center items-center"><div className="loader"></div></div>;
  }
  if (isError) {
    return <div className="w-full container h-screen mx-auto flex justify-center items-center">Error is here, please try again</div>;
  }
  if (!product) {
    return (
      <div className="w-full container h-screen mx-auto flex justify-center items-center">
        Product not found.
      </div>
    );
  }

  return (
    <div className='text-black'>
      {contextHolder}
      <Container>
        <div className="flex justify-between items-start gap-6 my-10">
          <div className='flex flex-col gap-4 w-[800px]'>
            <div className='border-b border-b-gray-200 pb-7'>
              <h1 className="text-3xl font-bold pb-5">{product.name}</h1>
              <span className='text-xl'>Brand: <b className='uppercase'>{product.brand}</b></span>
              <br />
              <span className='text-xl '>Category: <b className='uppercase'>{product.product_type}</b></span>
              <br />
              <span className='text-xl '>Product Type: <b className='uppercase'>{product.product_type}</b></span>
            </div>

            <p className="text-base">{product.description}</p>

            {/* Display product colors */}
            {product.product_colors && product.product_colors.length > 0 && (
              <div className="flex flex-wrap gap-4 border-y border-y-gray-200 py-6">
                {product.product_colors.map((color: any, index: number) => (
                  <div key={index} className="relative group flex flex-col items-center">
                    <div
                      className={`w-8 h-8 rounded-full border border-gray-300 ${selectedColor === color ? 'ring-2 ring-blue-500' : ''}`}
                      style={{ backgroundColor: color.hex_value }}
                      title={color.colour_name || 'Unnamed Color'}
                      onClick={() => handleColorSelect(color)}
                    ></div>

                    {/* Dropdown that appears on hover */}
                    <div
                      className="absolute -top-12 -right-20 w-max bg-white p-2 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ zIndex: 1000 }}
                    >
                      <p className="text-lg font-medium text-gray-700">{color.colour_name || 'Unnamed Color'}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            <div className="flex justify-between items-end">
              <div className='text-xl font-semibold'>
                Price: ${convertPrice(Number(product.price), selectedCurrency)} {selectedCurrency ? selectedCurrency : 'N/A'}
              </div>
              <button
                className="text-4xl "
                onClick={() => handleFavoriteClick(product)}
              >
                {isFavorite(product.id) ? <BsFillSuitHeartFill style={{ color: '#ff4d4f' }} /> : <BiHeart />}
              </button>
            </div>

            <button
              className={`mt-6 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all ${selectedColor ? '' : 'opacity-50 cursor-not-allowed'}`}
              onClick={() => selectedColor && handleCartClick(product)}
              disabled={!selectedColor}
            >
              {isInCart(product.id) ? 'Remove from Cart' : 'Add to Cart'}
            </button>
          </div>
          <img
            src={product.api_featured_image}
            alt={product.name}
            width={600}
            height={600}
            className="w-[600px] h-[600px] object-fill rounded-lg"
          />
        </div>
      </Container>
    </div>
  );
};

export default Details