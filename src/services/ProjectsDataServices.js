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

    getAllShortProjects(statusId, name) {
        const params = {}
        if (statusId && statusId !== '0') {
            params['statusId'] = statusId
        }
        if (name) {
            params['name'] = name
        }

        return http.get('/crowdfunding/all-short-crowdfunding', {
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

    getDetailShortProject(id, typeId) {
        return http.get('/crowdfunding/one-short-crowdfunding', {
            params: {
                id: id,
                typeId: typeId
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

    putAcceptShortProject( id, typeId ) {
        return http.put('/crowdfunding/short-project/accept-project', {}, {
            params: {
                id: parseInt(id),
                typeId: parseInt(typeId)
            }
        });
    },

    putRejectShortProject( id, typeId ) {
        return http.put('/crowdfunding/short-project/reject-project', {}, {
            params: {
                id: parseInt(id),
                typeId: parseInt(typeId)
            }
        })
    },
}