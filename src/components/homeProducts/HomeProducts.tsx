import React from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Button, notification } from 'antd';
import { BsFillCartXFill, BsFillCartPlusFill, BsFillSuitHeartFill } from "react-icons/bs";
import { BiHeart } from "react-icons/bi";
import { SmileOutlined, FrownOutlined } from '@ant-design/icons';
import Container from '../../utils';
import { addFavorite, removeFavorite } from '../../redux/slice/favoriteSlice';
import { addToCart, removeFromCart } from '../../redux/slice/cartSlice';
import { useGetProductsQuery } from '../../redux/api/productsApi';
import { RootState } from '../../redux/store';
import fiveStars from "../../assets/svg/five_star_rating.svg";
import { HiOutlineEmojiSad } from "react-icons/hi";

type Currency = 'USD' | 'UZS' | 'EUR' | 'GBP' | 'RUB';

interface ConversionRates {
  USD: number;
  UZS: number;
  EUR: number;
  GBP: number;
  RUB: number;
}

const HomeProducts = () => {
  const { data: products, isLoading, isError } = useGetProductsQuery(undefined);
  const favorites = useSelector((state: RootState) => state.favorite.favorites);
  const cart = useSelector((state: RootState) => state.cart.products);
  const selectedCurrency = useSelector((state: RootState) => state.currency.selectedCurrency) as Currency;
  const conversionRates = useSelector((state: RootState) => state.currency.conversionRates) as ConversionRates;
  const dispatch = useDispatch();
  const [api, contextHolder] = notification.useNotification();

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

  const convertPrice = (price: number, currency: Currency, rates: ConversionRates): string => {
    const rate = rates[currency];
    if (typeof rate !== 'number') {
      throw new Error(`Rate for currency ${currency} is not a number`);
    }
    return (price * rate).toFixed(2);
  };

  if (isLoading) {
    return <div className="w-full container h-screen mx-auto flex justify-center items-center"><div className="loader"></div></div>;
  }
  if (isError) {
    return <div className="w-full container h-screen mx-auto flex justify-center items-center"><div className="loader"></div></div>;
  }

  return (
    <div className='text-black my-8'>
      <Container>
        {contextHolder}

        <div className='flex flex-col gap-6'>
          <div className='flex justify-center py-5'>
            <h2 className='italic font-bold text-4xl'>
              Flying off the shelves
            </h2>
          </div>
          <div className="relative">
            <div className="carousel flex items-baseline gap-5 carousel-center rounded-box border-b-2 border-gray-300 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-200 py-6">
              {products && products.slice(200, 208).map((product: any) => (
                <div key={product.id} className="carousel-item flex flex-col overflow-hidden">
                  <NavLink className='bg-[#F5F5F5] w-[400px] h-[500px]' to={`/details/${product.id}`}>
                    <img width={400} height={500} src={product.api_featured_image} alt={product.name} />
                  </NavLink>
                  <h3 className="font-bold text-xl pt-2">{product.name.slice(0, 10)}</h3>
                  <span className="text-base">{product.description.slice(0, 20)}</span>
                  <div className='flex items-center gap-3'>
                    <img width={100} height={26} src={fiveStars} alt="" />
                    <b>4.7</b>
                  </div>
                  <div className='flex justify-between items-center gap-2'>
                    <strong className='font-bold text-xl'>
                      {convertPrice(Number(product.price), selectedCurrency, conversionRates)} {selectedCurrency}
                    </strong>
                    <div className='flex gap-5'>
                      <Button className='text-2xl' onClick={() => handleFavoriteClick(product)} icon={isFavorite(product.id) ? <BsFillSuitHeartFill className='text-red-600'/> : <BiHeart />} />
                      <Button className='text-2xl' onClick={() => handleCartClick(product)} icon={isInCart(product.id) ? <BsFillCartXFill className='text-red-600'/> : <BsFillCartPlusFill />} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HomeProducts;