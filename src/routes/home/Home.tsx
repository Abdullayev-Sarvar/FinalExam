import React from 'react';
import Banner from '../../components/banner/Banner';
import BrandsHome from '../../components/brandsHome/BrandsHome';
import ComingSoon from '../../components/comingSoon/ComingSoon';
import HomeProducts from '../../components/homeProducts/HomeProducts';
import BeautyBy from '../../components/beautyby/BeautyBy';
import Healthy from '../../components/healthy/Healthy';
import Events from '../../components/events/Events';
import Edited from '../../components/edited/Edited';
import Community from '../../components/communty/Community';

const Home: React.FC = () => {
  return (
    <>
      <Banner />
      <ComingSoon />
      <BrandsHome />
      <HomeProducts />
      <BeautyBy />
      <Healthy />
      <Events />
      <Edited />
      <Community />
    </>
  );
};

export default Home;
