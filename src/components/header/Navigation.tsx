import { BsCart3 } from "react-icons/bs";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { TbTruckDelivery } from "react-icons/tb";
import { BiSearchAlt2 } from "react-icons/bi";
import React from 'react'
import logo from '../../assets/svg/logo.svg'
import Container from '../../utils'
import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const Navigation: React.FC = () => {
    const { i18n } = useTranslation()

    const changeLanguage = (e: React.ChangeEvent<HTMLSelectElement>) => {
        i18n.changeLanguage(e.target.value)
    }
    return (
        <div>
            <Container>
                <div className='flex flex-col'>
                    <NavLink to='/products' className='w-full text-center bg-black py-1'>
                        <span className='text-white '>Get 15% off selected items when you spend £60 with code: YAY</span>
                    </NavLink>
                    <div className='py-2 text-center text-sm bg-[rgb(230,230,230)]'>
                        <NavLink to='/'>
                            <span className='pr-2 border-r border-r-[rgb(200,200,200)]'>Download the app for for up to 20% off plus a FREE gift from Made by Mitchell worth £16*!</span>
                            <span className='pl-2'>FREE delivery over £25 OR spend £60 for FREE next day delivery</span>
                        </NavLink>
                    </div>
                    <div className='flex w-full max-w-[1366px] mx-auto justify-between items-center py-8 px-2'>
                        <NavLink to='/'>
                            <img src={logo} alt="" />
                        </NavLink>
                        <form className="flex w-full max-w-[880px] items-center gap-3 border border-[rgb(230,230,230)] border-double p-3 rounded-full">
                            <label htmlFor="search"><BiSearchAlt2 className="text-xl" /></label>
                            <input className="outline-none" type="text" name="search" id="search" placeholder="Search products, brands" />
                        </form>
                        <div className="flex items-center gap-8">
                            <select
                                id="language-select"
                                defaultValue={i18n.language}
                                onChange={changeLanguage}
                                className='outline-none bg-transparent transition-all duration-300 hover:text-black hover:outline-double'
                            >
                                <option value="uz">UZ | UZS</option>
                                <option value="ru">RU | RUB</option>
                                <option value="en">EN | GBD</option>
                            </select>
                            <NavLink to='/delivery'>
                                <TbTruckDelivery className="text-2xl" />
                            </NavLink>
                            <NavLink to='/profile'>
                                <CgProfile className="text-2xl" />
                            </NavLink>
                            <NavLink to='/liked'>
                                <BsCart3 className="text-2xl" /> {/* //Todo change icon  */}
                            </NavLink>
                            <NavLink to='/cart'>
                                <MdOutlineFavoriteBorder className="text-2xl" />
                            </NavLink>
                        </div>
                    </div>
                    <div className="container mx-auto flex justify-evenly py-2">
                        <NavLink className='transition-all hover:border-b hover:border-b-black' to='/products'>
                            Gifting
                        </NavLink>
                        <NavLink className='transition-all hover:border-b hover:border-b-black' to='/products'>
                            Offers
                        </NavLink>
                        <NavLink className='transition-all hover:border-b hover:border-b-black' to='/products'>
                            By BEAUTY BAY
                        </NavLink>
                        <NavLink className='transition-all hover:border-b hover:border-b-black' to='/products'>
                            New & Trending
                        </NavLink>
                        <NavLink className='transition-all hover:border-b hover:border-b-black' to='/products'>
                            Brands
                        </NavLink>
                        <NavLink className='transition-all hover:border-b hover:border-b-black' to='/products'>
                            Makeup
                        </NavLink>
                        <NavLink className='transition-all hover:border-b hover:border-b-black' to='/products'>
                            Skincare
                        </NavLink>
                        <NavLink className='transition-all hover:border-b hover:border-b-black' to='/products'>
                            Haircare
                        </NavLink>
                        <NavLink className='transition-all hover:border-b hover:border-b-black' to='/products'>
                            Fragrance
                        </NavLink>
                        <NavLink className='transition-all hover:border-b hover:border-b-black' to='/products'>
                            Body Care
                        </NavLink>
                        <NavLink className='transition-all hover:border-b hover:border-b-black' to='/products'>
                            Wellness
                        </NavLink>
                        <NavLink className='transition-all hover:border-b hover:border-b-black' to='/products'>
                            Tools & Accessories
                        </NavLink>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Navigation
