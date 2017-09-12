export default class AdvertPublischedService{
    constructor($http, apiUrl,$route){
        this.$http = $http
        this.apiUrl = apiUrl
        this.$route = $route
    }

    saveAdvert(advert){
        this.$http.post(this.apiUrl+'/advert/saveNewAdvert',advert).then(res=>{
            this.$route.reload()
        })
    }
}