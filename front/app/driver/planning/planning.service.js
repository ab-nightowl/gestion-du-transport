export default class PlanningService{
    constructor($http, apiUrl,$route,$sessionStorage){
        this.$http = $http
        this.apiUrl = apiUrl
        this.$route = $route
        this.$sessionStorage = $sessionStorage
    }
    getEvent(){
        this.user = JSON.parse(this.$sessionStorage.get('userConnected'))
        this.result = this.$http.get(this.apiUrl+'/booking/'+this.user.registrationNumber)
        if(this.result!=undefined){
            return this.result
        }
        else{
            return false
        }
    }
    addDriver(booking){
        this.$http.patch(this.apiUrl+'/booking/addDriver',booking).then(res=>{
            this.$route.reload()
        })
    }
}
