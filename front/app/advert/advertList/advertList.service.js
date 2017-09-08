export default class AdvertListService{
    constructor($http, apiUrl){
        this.$http = $http
        this.apiUrl = apiUrl
    }
    
    getAdvertHistory(){
        this.user = "test"
        return this.$http.get(this.apiUrl+'/advert/'+this.user)
    }
    cancelledAdvert(idAdvert){
        console.log(idAdvert);
    }
}