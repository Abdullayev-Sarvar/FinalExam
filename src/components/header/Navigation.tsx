import { BsCart3 } from "react-icons/bs";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { TbTruckDelivery } from "react-icons/tb";
import { BiSearchAlt2 } from "react-icons/bi";
import React from 'react'
import logo from '../../assets/svg/logo.svg'
import Container from '../../utils'
import { NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../redux/store';
import { setCurrency } from '../../redux/slice/currensySlice';

const Navigation: React.FC = () => {
    const dispatch = useDispatch();
    const cartProductsCount = useSelector((state: RootState) => state.cart.products.length);
    const likedProductsCount = useSelector((state: RootState) => state.favorite.favorites.length);

    const handleCurrencyChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        dispatch(setCurrency(event.target.value));
    };
    return (
        <div className="text-black">
            <Container>
                <div className='flex flex-col'>
                    <NavLink to='/products' className='w-full text-center bg-black py-1'>
                        <span className='text-white '>Get 15% off selected items when you spend £60 with code: YAY</span>
                    </NavLink>
                    <div className='py-2 text-center text-sm bg-[rgb(230,230,230)]'>
                        <NavLink to='/'>
                            <span className='pr-2 border-r border-r-[rgb(200,200,200)]'>Download the app for up to 20% off plus a FREE gift from Made by Mitchell worth £16*!</span>
                            <span className='pl-2'>FREE delivery over £25 OR spend £60 for FREE next day delivery</span>
                        </NavLink>
                    </div>
                    <div className='flex w-full max-w-[1366px] mx-auto justify-between items-center py-8 px-2'>
                        <NavLink to='/'>
                            <img src={logo} alt="Logo" />
                        </NavLink>
                        <form className="flex w-full max-w-[880px] items-center gap-3 border border-[rgb(230,230,230)] border-double p-3 rounded-full">
                            <label htmlFor="search"><BiSearchAlt2 className="text-xl" /></label>
                            <input className="outline-none bg-transparent" type="text" name="search" id="search" placeholder="Search products, brands" />
                        </form>
                        <div className="flex items-center gap-8">
                            <select className="outline-none bg-transparent" name="currency" id="currency" onChange={handleCurrencyChange}>
                                <option value="USD">USD</option>
                                <option value="UZS">UZS</option>
                                <option value="EUR">EUR</option>
                                <option value="GBP">GBP</option>
                                <option value="RUB">RUB</option>
                            </select>
                            <NavLink to='/delivery'>
                                <TbTruckDelivery className="text-2xl" />
                            </NavLink>
                            <NavLink to='/profile'>
                                <CgProfile className="text-2xl" />
                            </NavLink>
                            <NavLink to='/cart' className="relative">
                                <BsCart3 className="text-2xl" />
                                {cartProductsCount > 0 && (
                                    <span className="absolute -top-3 -right-3 bg-red-500 text-white rounded-full text-sm px-2">
                                        {cartProductsCount}
                                    </span>
                                )}
                            </NavLink>
                            <NavLink to='/liked' className="relative">
                                <MdOutlineFavoriteBorder className="text-2xl" />
                                {likedProductsCount > 0 && (
                                    <span className="absolute -top-3 -right-3 bg-red-500 text-white rounded-full text-sm px-2">
                                        {likedProductsCount}
                                    </span>
                                )}
                            </NavLink>
                        </div>
                    </div>
                    <div className="container mx-auto flex justify-evenly text-lg py-2">
                        <NavLink className='transition-all hover:border-b hover:border-b-black' to={`/category/blush`}>
                            Blush
                        </NavLink>
                        <NavLink className='transition-all hover:border-b hover:border-b-black' to={`/category/bronzer`}>
                            Bronzer
                        </NavLink>
                        <NavLink className='transition-all hover:border-b hover:border-b-black' to={`/category/eyebrow`}>
                            Eyebrow
                        </NavLink>
                        <NavLink className='transition-all hover:border-b hover:border-b-black' to={`/category/eyeliner`}>
                            Eyeliner
                        </NavLink>
                        <NavLink className='transition-all hover:border-b hover:border-b-black' to={`/category/eyeshadow`}>
                            Eyeshadow
                        </NavLink>
                        <NavLink className='transition-all hover:border-b hover:border-b-black' to={`/category/foundation`}>
                            Foundation
                        </NavLink>
                        <NavLink className='transition-all hover:border-b hover:border-b-black' to={`/category/lip_liner`}>
                            Lip Liner
                        </NavLink>
                        <NavLink className='transition-all hover:border-b hover:border-b-black' to={`/category/lipstick`}>
                            Lipstick
                        </NavLink>
                        <NavLink className='transition-all hover:border-b hover:border-b-black' to={`/category/mascara`}>
                            Mascara
                        </NavLink>
                        <NavLink className='transition-all hover:border-b hover:border-b-black' to={`/category/nail_polish`}>
                            Nail Polish
                        </NavLink>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Navigation
