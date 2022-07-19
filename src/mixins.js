import axios from 'axios';

export default {
    data() {
        return {
            key: '42d098e43e02802fa54c1d21c82376ba',
            baseUrl: 'http://www.kobis.or.kr/kobisopenapi/webservice/rest/',
            boxOfficeByDay: 'boxoffice/searchDailyBoxOfficeList.json',
            boxOfficeweek: 'boxoffice/searchWeeklyBoxOfficeList.json'
        }
    },
    methods: {
        async $api(url, parameter) {
            return (await axios.get(url, {
                params: parameter
            })
            .catch(e => {
                console.log(e);
            })).data;
        },
        async getBoxOfficeByDay(targetDt) {
            const parameter = {
                key: this.key,
                targetDt
            }
            const url = this.baseUrl + this.boxOfficeByDay;
            return await this.$api(url, parameter);
        },
        async getBoxOfficeweek(targetDt, weekGb) {
            const parameter = {
                key: this.key,
                targetDt,
                weekGb
            }
            const url = this.baseUrl + this.boxOfficeweek;
            return await this.$api(url, parameter);
        },
        getOnlyDateStr(date) {
            return date.toISOString().split('T')[0];
        }
    }
}