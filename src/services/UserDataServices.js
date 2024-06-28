    import http from '../http-common'

    export default {
        login(data) {
            return http.post('/auth/login', data);
        },
    }