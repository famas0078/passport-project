import http from '../http-common'

export default {
    postForm(body) {
        return http.post('/crowdfunding', body)
    },
    getStatus() {
        return http.get('/crowdfunding/statuses');
    },
    getCodeOKVEDR() {
        return http.get('/crowdfunding/code-OKVEDR');
    },
    getAvailableGuar () {
        return http.get('/crowdfunding/available-guarantees');
    },
    getNeedConstuction () {
        return http.get('/crowdfunding/need-of-construction');
    },
    getDevStatus () {
        return http.get('/crowdfunding/development-status');
    },
    getType () {
        return http.get('/crowdfunding/types');
    },
    getFinance () {
        return http.get('/crowdfunding/financing-sourse');
    },
}