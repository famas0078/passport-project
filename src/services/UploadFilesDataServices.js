import http from '../http-common'

export default {
    postMap(file) {
        console.log("ТУТ", file)
        return http.post('/files/map', file, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        })
    },
    postPresentation(body) {
        return http.post('/crowdfunding', body)
    },
    // fileUploadsMeetingTitle(file) {
    //     return http.post("/files/upload/meeting/titleImage", file, {
    //         headers: {
    //             "Content-Type": "multipart/form-data",
    //         },
    //     });
    // },
}