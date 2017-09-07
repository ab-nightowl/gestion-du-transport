export default class AdvertService{
    constructor($http, apiUrl){
        this.$http = $http
        this.apiUrl = apiUrl
    }

    saveAdvert(advert){
        this.$http.post(this.apiUrl+'/advert/saveNewAdvert',advert)
    }
}