import favicon from '../images/favicon.ico';

const metaAssets = () => {
  return [
    { charset: 'utf-8' },
    { name: 'description', content: 'This is the shop on react + redux' },
    { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }
  ];
};

const linkAssets = () => {
  const links = [
    { rel: 'icon', href: favicon },
    { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto+Condensed', type: 'text/css' },
    { rel: 'stylesheet', href: '/assets/styles/main.css' }
  ];
  return links;
};

export const title = 'Shop - on react';
export const meta = metaAssets();
export const link = linkAssets();
