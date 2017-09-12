export default class AdvertListService{
    constructor($http, apiUrl,$route){
        this.$http = $http
        this.apiUrl = apiUrl
        this.$route = $route
    }
    
    getAdvertHistory(){
        this.user = "test"
        this.result = this.$http.get(this.apiUrl+'/advert/'+this.user)
        return this.result
    }
    cancelledAdvert(idAdvert){
        this.$http.patch(this.apiUrl+'/advert/cancelled/'+idAdvert).then(res=>{
            this.$route.reload()
        })
    }
}

