import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { removeFavorite } from '../../redux/slice/favoriteSlice';
import Container from '../../utils';
import { NavLink } from 'react-router-dom';
import fiveStars from '../../assets/svg/five_star_rating.svg';
import { BiHeart } from 'react-icons/bi';
import { BsFillSuitHeartFill, BsFillCartXFill, BsFillCartPlusFill } from 'react-icons/bs';
import { Button, notification } from 'antd';
import { addToCart, removeFromCart } from '../../redux/slice/cartSlice';
import { SmileOutlined, FrownOutlined } from '@ant-design/icons';


type Currency = 'USD' | 'UZS' | 'EUR' | 'GBP' | 'RUB';

type ConversionRates = {
  [key: string]: number;
  USD: number;
  UZS: number;
  EUR: number;
  GBP: number;
  RUB: number;
};

interface PriceDisplayProps {
  price?: number;
  currency?: Currency;
  conversionRates?: ConversionRates;
}

interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
  api_featured_image: string;
}

const Liked: React.FC<PriceDisplayProps> = () => {
  const dispatch = useDispatch();
  const favorites = useSelector((state: RootState) => state.favorite.favorites);
  const selectedCurrency = useSelector((state: RootState) => state.currency.selectedCurrency) as Currency;
  const conversionRates = useSelector((state: RootState) => state.currency.conversionRates) as ConversionRates;
  const cart = useSelector((state: RootState) => state.cart);
  const [api, contextHolder] = notification.useNotification();
  const [searchTerm, setSearchTerm] = useState('');

  const convertPrice = (price: number, currency: Currency, rates: ConversionRates) => {
    if (!rates || !rates[currency]) return price;
    return (price * rates[currency]).toFixed(2);
  };

  const isFavorite = (productId: number) => {
    return favorites.some((item: Product) => item.id === productId);
  };

  const isInCart = (productId: number) => {
    return cart.products.some((item: any) => item.id === productId);
  };

  const handleFavoriteClick = (product: Product) => {
    dispatch(removeFavorite(product.id));
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

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const filteredProducts = favorites.filter((product: any) => {
    return product.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div className="text-black my-6 py-6">
      <Container>
        <div className='flex flex-col gap-8'>
          <div className='flex justify-between items-center'>
            <div>
              <h3 className="flex items-center gap-2 text-3xl"><BiHeart /> <span className="font-black italic uppercase">Liked Products</span></h3>
              <span className="text-lg">Show us your latest looks using <span className="font-black italic">#BEAUTYBAYhaul</span> for a chance to appear on our homepage.</span>
            </div>
            <div className='flex flex-col'>
              <label htmlFor="searchByLiked">
                Search by name:
              </label>
              <input
                id="searchByLiked"
                className="outline-none border border-gray-300 rounded-lg w-[400px] h-[50px] p-2 bg-transparent transition-all duration-300 ease-in-out hover:shadow-md focus:outline-2 focus:outline-rose-500 focus:border-none focus:outline-double"
                type="text"
                placeholder="Search by name"
                value={searchTerm}
                onChange={handleSearch}
              />
            </div>
          </div>
          {contextHolder}
          <div className="grid grid-cols-4 gap-4">
            {filteredProducts && filteredProducts.length > 0 ? (filteredProducts.map((product: Product) => (
              <div key={product.id} className="carousel-item flex flex-col overflow-hidden">
                <NavLink className="bg-[#F5F5F5] w-[400px] h-[500px]" to={`/details/${product.id}`}>
                  <img width={400} height={500} src={product.api_featured_image} alt={product.name} />
                </NavLink>
                <h3 className="font-bold text-xl pt-2">{product.name.slice(0, 10)}</h3>
                <span className="text-base">{product.description.slice(0, 20)}</span>
                <div className="flex items-center gap-3">
                  <img width={100} height={26} src={fiveStars} alt="Rating" />
                  <b>4.7</b>
                </div>
                <div className="flex justify-between items-center gap-2">
                  <strong className="font-bold text-xl">
                    {convertPrice(Number(product.price), selectedCurrency, conversionRates)} {selectedCurrency}
                  </strong>
                  <div className="flex gap-5">
                    <Button
                      className="text-2xl"
                      onClick={() => handleFavoriteClick(product)}
                      icon={isFavorite(product.id) ? <BsFillSuitHeartFill className="text-red-600" /> : <BiHeart />}
                    />
                    <Button
                      className="text-2xl"
                      onClick={() => handleCartClick(product)}
                      icon={isInCart(product.id) ? <BsFillCartXFill className="text-red-600" /> : <BsFillCartPlusFill />}
                    />
                  </div>
                </div>
              </div>
            ))) : (
              <div className="text-center text-lg py-12">
                No Liked Products, go like products!
              </div>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Liked;