import express from 'express';

import webpack from 'webpack';
import webpackConfig from '../../webpack.config';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';

import React from 'react';
import ReactDOM from 'react-dom/server';
import { RoutingContext, match } from 'react-router';
import { Provider } from 'react-redux';
import createLocation from 'history/lib/createLocation';
import { fetchComponentDataBeforeRender } from '../common/api/fetchComponentDataBeforeRender';

import configureStore from '../common/store/configureStore';
import routes from '../common/routes';
import packagejson from '../../package.json';

const headConfig = {
  title: '<title>MB Portfolio</title>',
  meta: '<meta name="viewport" content="width=device-width, initial-scale=1" />',
  link: '<link type="text/css" rel="stylesheet" href="/static/app.css"/>'
}

const app = express();
const renderFullPage = (html, initialState, head = headConfig) => {
  return `
    <!doctype html>
    <html>
      <head>
        ${head.title}
        ${head.meta}
        ${head.link}
      </head>
      <body class="theme-base-0d">
        <div id="root">${html}</div>
        <script>
          window.__INITIAL_STATE__ = ${JSON.stringify(initialState)};
        </script>
        <script src="https://maps.googleapis.com/maps/api/js"></script>
        <script type="text/javascript" src="/static/bundle.js"></script>
      </body>
    </html>
  `;
}

if(process.env.NODE_ENV !== 'production'){
  const compiler = webpack(webpackConfig);
  app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: webpackConfig.output.publicPath }));
  app.use(webpackHotMiddleware(compiler));
}else{
  app.use('/static', express.static(__dirname + '/../../dist'));
}

app.get('/*', function (req, res) {

  const location = createLocation(req.url);

  match({ routes, location }, (err, redirectLocation, renderProps) => {

    if(err) {
      console.error(err);
      return res.status(500).end('Internal server error');
    }

    if(!renderProps)
      return res.status(404).end('Not found');

    const store = configureStore();

    const InitialView = (
      <Provider store={store}>

          <RoutingContext {...renderProps} />

      </Provider>
    );

    //This method waits for all render component promises to resolve before returning to browser
    fetchComponentDataBeforeRender(store.dispatch, renderProps.components, renderProps.params)
      .then(html => {
        const componentHTML = ReactDOM.renderToString(InitialView);
        const initialState = store.getState();
        if (req.url === '/') res.setHeader('Content-Type', 'text/html');
        else if (req.url == '/static/bundle.js') res.setHeader('Content-Type', 'text/javascript');
        else if (req.url == '/static/app.css') res.setHeader('Content-Type', 'text/css')
        res.status(200).end(renderFullPage(componentHTML,initialState,headConfig))
      })
      .catch(err => {
        console.log(err)
        res.end(renderFullPage("",{},{}))
      });

  });

});

const server = app.listen(process.env.PORT || 3002, function () {
  const host = server.address().address;
  const port = server.address().port;
  console.log('Listening at http://%s:%s', host, port);
});
