import React from 'react';

import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import Menu from '../components/navigation/Menu';
import Breadcrumbs from '../components/navigation/Breadcrumbs';
import Information from '../components/Information';

const Shop = () => {
    return (
        <div>
            <div className='wrapper'>
                <Header />
                <Menu />
                <div className='main_content'>
                    <div className='container'>
                        <Breadcrumbs />
                        <h1 className='main_head_text'>Главная</h1>
                        <div className='layout'>
                            <Information />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Shop;
