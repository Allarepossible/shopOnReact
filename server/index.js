import qs from 'qs';
import path from 'path';
import Express from 'express';
import React from 'react';
// import {createStore} from 'redux';
// import {Provider} from 'react-redux';
import {renderToString} from 'react-dom/server';
//
// import {fetchCounter} from '../api/counter';
// import counterApp from '../src/reducers';
import Home from '../src/client/components/Home';

const app = Express();
const port = 8080;

app.use(Express.static('public'));
app.get('/', (req, res) => {
    const content = renderToString(<Home />);

    const html = `
        <html>
          <head>
            <title>Redux Shop</title>
          </head>
          <body>
            <div id="root">${content}</div>
            
            <script src="bundle.js"></script>
          </body>
        </html>
    `;

    res.send(html);
});

// app.get('/', function(req, res){
//     res.send('hello world!')
// });
//
// const handleRender = (req, res) => {
//     fetchCounter(apiResult => {
//         // Read the counter from the request, if provided
//         const params = qs.parse(req.query);
//         const products = parseInt(params.counter, 10) || apiResult || 0;
//         // Compile an initial state
//         const preloadedState = {products};
//
//         // Create a new Redux store instance
//         const store = createStore(counterApp, preloadedState)
//
//         // Render the component to a string
//         const html = renderToString(
//             <Provider store={store}>
//                 <App />
//             </Provider>
//         );
//
//         // Grab the initial state from our Redux store
//         const finalState = store.getState()
//         // Send the rendered page back to the client
//         res.send(renderFullPage(html, finalState));
//     });
// }
//
// function renderFullPage(html, preloadedState) {
//     return `
//         <!doctype html>
//         <html>
//           <head>
//             <title>Redux Shop</title>
//           </head>
//           <body>
//             <div id="root">${html}</div>
//             <script>
//               window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
//             </script>
//             <script src="/static/bundle.js"></script>
//           </body>
//         </html>
//     `;
// }
//
// app.use(handleRender);

app.listen(port, () => {
    console.log('server run!!!!!!!!!!!');
})
