import http from '../http-common'

export default {
    getAllProjectsDefault(pageSize, page) {
        return http.get('/crowdfunding/all-project', {
            params: {
                pageSize: pageSize,
                page: page
            }
        })
    },
    getAllProjects(pageSize, page, statusId, name) {
        const params = {
            pageSize: pageSize,
            page: page
        }
        if (statusId && statusId !== 0) {
            console.log('statusId TRUE')
            params['statusId'] = statusId
        }
        if (name) {
            console.log('name TRUE')
            params['name'] = name
        }
        console.log(params)
        return http.get('/crowdfunding/all-project', {
            params
        })
    },

    getDetailProject(id) {
        return http.get('/crowdfunding/one-project', {
            params: {
                id: id,
            }
        })
    },
}