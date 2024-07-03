import http from '../http-common'

export default {
    postMap(file) {
        return http.post('/files/map', file, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        })
    },
    postPresentation(file) {
        return http.post('/files/presentation', file, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        })
    },
}