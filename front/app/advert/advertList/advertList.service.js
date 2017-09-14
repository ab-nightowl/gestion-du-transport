export default class AdvertListService{
    constructor($http, apiUrl,$route,$sessionStorage){
        this.$http = $http
        this.apiUrl = apiUrl
        this.$route = $route
        this.$sessionStorage = $sessionStorage
    }
    
    getAdvertHistory(){
        this.user = JSON.parse(this.$sessionStorage.get('userConnected'))

        this.result = this.$http.get(this.apiUrl+'/advert/'+this.user.registrationNumber)
        return this.result
    }
    cancelledAdvert(idAdvert){
        this.$http.patch(this.apiUrl+'/advert/cancelled/'+idAdvert).then(res=>{
            this.$route.reload()
        })
    }
}

