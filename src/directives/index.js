// index.js
import lazyPlugin from "./lazyLoad";
import permissions from "./permissions";

export default {
  install(app, options) {
    app.use(lazyPlugin, options)
    app.use(permissions)
  }
}