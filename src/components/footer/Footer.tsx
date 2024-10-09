import { BsYoutube, BsPinterest, BsFacebook, BsInstagram, BsArrowRight } from "react-icons/bs"; 
import { FaTiktok } from "react-icons/fa"; 
import { AiFillTwitterCircle } from "react-icons/ai"; 
import React from 'react'
import { NavLink } from 'react-router-dom'
import Container from '../../utils'
import beautyBay from '../../assets/imgs/beautyBay.jpg'
import PayPal from '../../assets/svg/paypal.svg'
import Visa from '../../assets/svg/visa.svg'
import MasterCard from '../../assets/svg/mastercard.svg'
import klarna from '../../assets/svg/klarna.svg'
import maestro from '../../assets/svg/maestro.svg'
import amex from '../../assets/svg/amex.svg'
import applepay from '../../assets/svg/applepay.svg'

const Footer: React.FC = () => {
    return (
        <div className='bg-[#F6F6F6]'>
            <Container>
                <div className='flex flex-col px-4'>
                    <div className='flex justify-between items-start'>
                        <img width={400} height={55} src={beautyBay} alt="Big Logo" />
                        <div className='flex justify-between gap-10 mt-16'>
                            <ul className='flex flex-col gap-1'>
                                <b className='font-black pb-2'>Help & Information</b>
                                <li>
                                    Delivery & Returns
                                </li>
                                <li>
                                    Contact Us & FAQ's
                                </li>
                                <li>
                                    Haul Pass
                                </li>
                                <li>
                                    Gift Cards
                                </li>
                                <li>
                                    About Us
                                </li>
                                <li>
                                    Careers
                                </li>
                                <li>
                                    Affiliates
                                </li>
                                <li>
                                    Student Discount
                                </li>
                            </ul>
                            <ul className='flex flex-col gap-1'>
                                <b className='font-black pb-2'>Legal</b>
                                <li>
                                    Terms & Condition
                                </li>
                                <li>
                                    TRIBE Terms
                                </li>
                                <li>
                                    Website Terms of Use
                                </li>
                                <li>
                                    Privacy
                                </li>
                                <li>
                                    Anti-Slavery
                                </li>
                                <li>
                                    Cookies
                                </li>
                                <li>
                                    Manage Preferences
                                </li>
                            </ul>
                            <div className='w-[300px] flex flex-col gap-1'>
                                <b className='text-2xl font-black italic pb-2'>Want More from Beauty Bay?</b>
                                <span className='text-sm'>Let’s stay in touch! We promise to send you the latest news,
                                    offers, and the freshest beauty drops, straight to your inbox.
                                </span>
                                <form className="flex gap-2 my-2 py-2 border-b border-b-black">
                                    <input className="w-full text-black outline-none" type="email" placeholder="Your email" />
                                    <button><BsArrowRight className="text-3xl" /></button>
                                </form>
                                <div className="flex justify-between gap-1 text-3xl my-3">
                                    <NavLink to='https://www.facebook.com/BEAUTYBAYcom/'>
                                        <BsFacebook />
                                    </NavLink>
                                    <NavLink to='https://www.instagram.com/beautybaycom/'>
                                        <BsInstagram />
                                    </NavLink>
                                    <NavLink to='https://x.com/BEAUTYBAY'>
                                        <AiFillTwitterCircle />
                                    </NavLink>
                                    <NavLink to='https://www.tiktok.com/@beautybay/'>
                                        <FaTiktok />
                                    </NavLink>
                                    <NavLink to='https://www.pinterest.co.uk/beautybay/'>
                                        <BsPinterest />
                                    </NavLink>
                                    <NavLink to='https://www.youtube.com/beautybay/'>
                                        <BsYoutube />
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='w-full flex flex-col justify-center'>
                        <span className='text-center mt-20'>
                            Copyright © 2024 BEAUTY BAY Ltd.
                            <br />
                            Registered office address Level 12, 5 Exchange Quay, M5 3EF. Registered in England, company registration number 6427672, VAT number GB 927197591.
                        </span>
                        <div className='flex justify-evenly gap-4 mt-4 py-4'>
                            <img width={80} src={PayPal} alt="" />
                            <img width={80} src={klarna} alt="" />
                            <img width={80} src={applepay} alt="" />
                            <img width={80} src={Visa} alt="" />
                            <img width={80} src={amex} alt="" />
                            <img width={80} src={MasterCard} alt="" />
                            <img width={80} src={maestro} alt="" />
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Footer