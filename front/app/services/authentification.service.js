export default class authentificationService{
  constructor( $log, $http, urlsService, $sessionStorage){
    this.$log = $log;
    this.$http =  $http;
    this.urlsService = urlsService;
    this.$sessionStorage = $sessionStorage;
  }

  getAllUser(){
    return this.$http.get(this.urlsService.usersFromRessourcesAtelier)
}


  setRole(users){
    return this.$http.put(this.urlsService.role, users)
  }

  getRole(email){
    return this.$http.get(this.urlsService.role+ '/' + email)
  }


}
