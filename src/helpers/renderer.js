import React from 'react';
import {renderToString} from 'react-dom/server';
import {StaticRouter} from 'react-router-dom';
import {renderRoutes} from 'react-router-config';
import serialize from 'serialize-javascript';
import {Provider} from 'react-redux';
import {Helmet} from 'react-helmet';
import {ThemeProvider} from 'styled-components';

import theme from '../theme';
import Routes from '../client/Routes';

export default (req, store, context) => {
    const content = renderToString(
        <ThemeProvider theme={theme}>
            <Provider store={store}>
                <StaticRouter location={req.path} context={context}>
                    <div>{renderRoutes(Routes)}</div>
                </StaticRouter>
            </Provider>
        </ThemeProvider>
    );

    const helmet = Helmet.renderStatic();

    return `
        <html>
          <head>
            <link rel='shortcut icon' href='/api/images/favicon.ico'>
            ${helmet.title.toString()}
            ${helmet.meta.toString()}
          </head>
          <body>
            <div id="root">${content}</div>
            <script>
              window.INITIAL_STATE = ${serialize(store.getState())}
            </script>
            <script src="/bundle.js"></script>
          </body>
        </html>
    `;
};
