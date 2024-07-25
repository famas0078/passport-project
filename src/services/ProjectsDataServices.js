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
        if (statusId && statusId !== '0') {
            params['statusId'] = statusId
        }
        if (name) {
            params['name'] = name
        }

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

    putAcceptProject(projectId) {
        return http.put('/crowdfunding/accept-project', {}, {
            params: {
                projectId: parseInt(projectId),
            }
        });
    },

    putRejectProject(projectId) {
        return http.put('/crowdfunding/reject-project', {}, {
            params: {
                projectId: parseInt(projectId),
            }
        })
    },
}