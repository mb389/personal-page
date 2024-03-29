// This file configures a web server for testing the production build
// on your local machine.

import browserSync from "browser-sync";
import historyApiFallback from "connect-history-api-fallback";

// Run Browsersync
browserSync({
  port: process.env.PORT || 3000,
  ui: {
    port: process.env.PORT || 3001
  },
  server: {
    baseDir: "dist"
  },

  notify: false,
  middleware: [historyApiFallback()]
});
