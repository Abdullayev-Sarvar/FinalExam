import { BsFillCartXFill, BsFillCartPlusFill, BsFillSuitHeartFill } from "react-icons/bs";
import { BiHeart } from "react-icons/bi";
import React, { useState } from 'react';
import Container from '../../utils';
import { useGetProductsQuery } from '../../redux/api/productsApi';
import { RootState } from '../../redux/store';
import fiveStars from "../../assets/svg/five_star_rating.svg";
import { SmileOutlined, FrownOutlined } from '@ant-design/icons';
import { Button, notification } from 'antd';
import { HiOutlineEmojiSad } from "react-icons/hi";
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, removeFavorite } from '../../redux/slice/favoriteSlice';
import { addToCart, removeFromCart } from '../../redux/slice/cartSlice';

const Products = () => {
    const { data: products, isLoading, isError } = useGetProductsQuery(undefined);
    const favorites = useSelector((state: RootState) => state.favorite.favorites);
    const cart = useSelector((state: RootState) => state.cart.products);
    const dispatch = useDispatch();
    const [api, contextHolder] = notification.useNotification();
    const [searchTerm, setSearchTerm] = useState('');

    const isFavorite = (productId: number) => favorites.some((item: any) => item.id === productId);

    const isInCart = (productId: number) => cart.some((item: any) => item.id === productId);

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

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    if (isLoading) {
        return <div className="w-full container h-screen mx-auto flex justify-center items-center"><div className="loader"></div></div>;
    }
    if (isError) {
        return <div className="w-full container h-screen mx-auto flex justify-center items-center">Error is here, please try again</div>;
    }

    const filteredProducts = products?.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className='text-black my-16'>
            <Container>
                <div className='flex flex-col items-baseline gap-4'>
                    <div className="w-full flex justify-between my-8">
                        <h1 className="text-4xl font-bold">Products shop now!</h1>
                        <label htmlFor="search" className="sr-only" >Products search:</label>
                        <input
                            type="text"
                            id="search"
                            name="search"
                            autoComplete="off"
                            placeholder="Search by name"
                            className="w-96 px-4 py-2 bg-transparent border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={searchTerm}
                            onChange={handleSearch}
                        />
                    </div>
                    <div className='grid grid-cols-4 gap-6'>
                        {contextHolder}
                        {filteredProducts && filteredProducts.slice(100, 160).map((product) => (
                            <div key={product.id} className="flex flex-col overflow-hidden border-x border-x-gray-200">
                                <NavLink className='w-[400px] h-[400px]' to={`/details/${product.id}`}>
                                    <img width={400} height={400} src={product.api_featured_image} alt={product.name} />
                                </NavLink>
                                <div className="flex flex-col gap-2 p-3">
                                    <h3 className="font-bold text-xl pt-2">{product.name.slice(0, 10)}</h3>
                                    <span className="text-base">{product.description.slice(0, 20)}</span>
                                    <div className='flex items-center gap-3'>
                                        <img width={100} height={26} src={fiveStars} alt="" />
                                        <b>4.7</b>
                                    </div>
                                    <div className='flex justify-between items-center gap-2'>
                                        <strong className='text-xl'>${product.price}</strong>
                                        <div className='flex gap-5'>
                                            <Button className="text-2xl" type="link" onClick={() => handleFavoriteClick(product)}>
                                                {isFavorite(product.id) ? <BsFillSuitHeartFill color="red" /> : <BiHeart />}
                                            </Button>
                                            <Button className="text-2xl" type="link" onClick={() => handleCartClick(product)}>
                                                {isInCart(product.id) ? <BsFillCartXFill color="red" /> : <BsFillCartPlusFill />}
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Products;