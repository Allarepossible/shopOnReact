import React from 'react';

const HomePage = () => (
    <div>
        <span>Hello my dear friend!! Today I'm fine</span>
        <button onClick={() => {console.log('clicked')}}>Click me!</button>
    </div>
);

export default {
    component: HomePage,
};
