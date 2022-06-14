import VueLazyload from 'vue-lazyload'
import basicConfig from "@/config";

const lazyPlugin = {
  install(app, options) {
    const defaultOptions = {
      preLoad: 1.3,
      error: basicConfig.basicUrl.errorImage,
      loading: basicConfig.basicUrl.loading,
      attempt: 1
    }
    app.use(VueLazyload, { ...defaultOptions, ...options });
  }
}

export default lazyPlugin