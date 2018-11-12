import React from 'react';
import Header from 'components/Header';
import Footer from 'components/Footer';
import Information from 'components/Information';
import Menu from 'components/Menu';

const Shop = () => (
    <div>
        <div className='wrapper'>
            <Header />
            <Menu />
            <div className='layout'>
                <div className='container'>
                    <h1 className='h1 text text_color_grey text_weight_bold'>Главная</h1>
                    <div className='layout'>
                        <Information />
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </div>
);

export default Shop;
