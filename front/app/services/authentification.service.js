export default class authentificationService{
  constructor( $log, $http, urlsService, $sessionStorage, $location){
    this.$log = $log;
    this.$http =  $http;
    this.urlsService = urlsService;
    this.$sessionStorage = $sessionStorage;
    this.$location = $location;
  }

  getAllUser(){
    return this.$http.get(this.urlsService.usersFromRessourcesAtelier)
}
getAllUserServer(){
  return this.$http.get(this.urlsService.users)
}

  setRole(users){
    return this.$http.put(this.urlsService.role, users)
  }

  getRole(email){
    return this.$http.get(this.urlsService.role+ '/' + email)
  }

  deconnexion(){
  this.$sessionStorage.remove("userConnected");
  this.$location.path("/home");
}


  //TODO
  changePage(url){
    this.$location.path(url)
  }
}
