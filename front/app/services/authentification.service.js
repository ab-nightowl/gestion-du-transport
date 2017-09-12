export default class authentificationService{
  constructor( $log, $http, urlsService, $sessionStorage){
    this.$log = $log;
    this.$http =  $http;
    this.urlsService = urlsService;
    this.$sessionStorage = $sessionStorage;
  }


  getAllUser(){
    return this.$http.get(this.urlsService.users)
}

}