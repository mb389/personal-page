import express from "express";

import webpack from "webpack";
import webpackConfig from "../../webpack.config";
import webpackDevMiddleware from "webpack-dev-middleware";
import webpackHotMiddleware from "webpack-hot-middleware";

import React from "react";
import ReactDOM from "react-dom/server";
import { RoutingContext, match } from "react-router";
import createLocation from "history/lib/createLocation";

import routes from "..routes";
import packagejson from "../../package.json";

const headConfig = {
  title: "<title>MB</title>",
  meta: '<meta name="viewport" content="width=device-width, initial-scale=1" />',
  link: '<link type="text/css" rel="stylesheet" href="/static/app.css"/>',
};

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
        <script type="text/javascript" src="/static/bundle.js"></script>
      </body>
    </html>
  `;
};

if (process.env.NODE_ENV !== "production") {
  const compiler = webpack(webpackConfig);
  app.use(
    webpackDevMiddleware(compiler, {
      noInfo: true,
      publicPath: webpackConfig.output.publicPath,
    })
  );
  app.use(webpackHotMiddleware(compiler));
} else {
  app.use("/static", express.static(__dirname + "/../../dist"));
}

app.get("/*", function (req, res) {
  const location = createLocation(req.url);

  match({ routes, location }, (err, redirectLocation, renderProps) => {
    if (err) {
      console.error(err);
      return res.status(500).end("Internal server error");
    }

    if (!renderProps) return res.status(404).end("Not found");

    const componentHTML = ReactDOM.renderToString(
      <RoutingContext {...renderProps} />
    );

    if (req.url === "/") res.setHeader("Content-Type", "text/html");
    else if (req.url == "/static/bundle.js")
      res.setHeader("Content-Type", "text/javascript");
    else if (req.url == "/static/app.css")
      res.setHeader("Content-Type", "text/css");
    res.status(200).end(renderFullPage(componentHTML, {}, headConfig));
  });
});

const server = app.listen(process.env.PORT || 3002, function () {
  const host = server.address().address;
  const port = server.address().port;
  console.log("Listening at http://%s:%s", host, port);
});
