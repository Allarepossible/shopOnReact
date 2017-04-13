import React from 'react';
import Page from '../pages/Page';
import AppContainer from '../containers/App';
import { title, meta, link } from './assets';

import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import Menu from '../components/navigation/Menu';

const App = props => (
  <Page title={title} meta={meta} link={link}>
      <div>
          <div className='wrapper'>
              <Header />
              <Menu />
              <div className='layout'>
                  <AppContainer {...props} />
              </div>
          </div>
          <Footer />
      </div>
  </Page>
);

export default App;

