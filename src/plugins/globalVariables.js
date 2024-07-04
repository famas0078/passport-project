export default {
    install(app) {
        app.config.globalProperties.FRONT_URL = process.env.VUE_APP_FRONT_URL;
    }
};