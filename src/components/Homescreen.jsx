import React from 'react';
import Navbar from './Navbar';
import Banner from './Banner';
import Product from './Product';
import News from './News';
import Inpirasi from './Inpirasi-terkini';
import ProductDigital from './Product-digital';
import ContactUs from './Contact-us';
import FindUs from './Find-us';
import Footer from './Footer';
import LayananNasabah from './Layanan-nasabah';

function Homescreen(){
return <div id="homescreen">
    <Navbar />
    <Banner />
    <Product />
    <News />
    <Inpirasi />
    <ProductDigital />
    <ContactUs />
    <FindUs />
    <Footer />

    <LayananNasabah />
</div>;
}

export default Homescreen;