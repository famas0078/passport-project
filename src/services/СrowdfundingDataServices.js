import http from '../http-common'

export default {
    postForm(body) {
        return http.post('/crowdfunding', body)
    },
    postShortForm (nameType, body) {

        console.log(nameType, body)

        const typesProject = [
            {
                id: 1,
                type: 'investmentProject',
                text: 'Инвестиционный проект (реальный сектор экономики)',
            },
            {
                id: 2,
                type: 'startup',
                text: 'Стартап',
            },
            {
                id: 3,
                type: 'businessProject',
                text: 'Бизнес-проект (создание нового бизнеса)',
            },
            {
                id: 4,
                type: 'socialProject',
                text: 'Социальный проект',
            },
            {
                id: 5,
                type: 'charityProject',
                text: 'Благотворительный проект',
            },
            {
                id: 6,
                type: 'cryptoProject',
                text: 'Криптопроект',
            },
            {
                id: 7,
                type: 'creativeProject',
                text: 'Креативный проект',
            },
            {
                id: 8,
                type: 'invention',
                text: 'Изобретение, технология, ноу-хау',
            },
            {
                id: 9,
                type: 'innovation',
                text: 'Инновация (улучшение или расширение возможностей экосистемы «Рантье»)',
            },
        ]

        const foundId = typesProject.find(item => item.type === nameType)

        const typeId = foundId ? foundId.id : 0

        console.log(typeId)

        return http.post('/crowdfunding/create-short-crowdfunding', body, {
            params: {
                typeId: typeId
            }
        });
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