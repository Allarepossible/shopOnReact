import React, { PropTypes } from 'react';

import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import Menu from '../components/navigation/Menu';
import Breadcrumbs from '../components/navigation/Breadcrumbs';
import Information from '../components/Information';

const App = ({ children }) => {
    return (
        <div>
            <div className='wrapper'>
                <Header />
                <Menu />
                <div className='layout'>
                    <div className='container'>
                        <Breadcrumbs />
                        <h1 className='h1 text text_color_grey text_weight_bold'>Главная</h1>
                        <div className='layout'>
                            {children}
                            <Information />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

App.propTypes = {
    children: PropTypes.object
};

export default App;
