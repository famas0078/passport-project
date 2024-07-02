import http from '../http-common'

export default {
    geteAllProjects(pageSize, page) {
        return http.get('/crowdfunding/all-project', {
            params: {
                pageSize: pageSize,
                page: page
            }
        })
    },
    getDetailProject(id) {
        return http.get('/crowdfunding/all-project', {
            params: {
                id: id,
            }
        })
    },
}