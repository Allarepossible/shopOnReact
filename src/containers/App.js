import React, { PropTypes } from 'react';

import Breadcrumbs from '../components/navigation/Breadcrumbs';
import Information from '../components/Information';

const App = ({ children }) => {
    return (
        <div className='container'>
            <Breadcrumbs />
            <h1 className='h1 text text_color_grey text_weight_bold'>Главная</h1>
            <div className='layout'>
                {children}
                <Information />
            </div>
        </div>
    );
};

App.propTypes = {
    children: PropTypes.object
};

export default App;
