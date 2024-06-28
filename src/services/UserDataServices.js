    import http from '../http-common'

    export default {
        login(data) {
            return (
                console.log(http.get('/crowdfunding/available-guarantees'))
            );
        }
    }