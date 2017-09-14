export default class PlanningService{
    constructor($http, apiUrl,$route){
        this.$http = $http
        this.apiUrl = apiUrl
        this.$route = $route
    }
    getEvent(){
        this.result = this.$http.get(this.apiUrl+'/booking/test ')
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