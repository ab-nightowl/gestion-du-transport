export default class authentificationController {

  constructor($scope,$http, $log, authentificationService, $sessionStorage){
    this.$scope = $scope;
    this.$http = $http
    this.$log = $log
    this.authentificationService = authentificationService;
    this.$sessionStorage = $sessionStorage;

}

  $onInit(){
    this.getAllUsers();
    this.getUserConnected();
  }


  getAllUsers(){
    this.authentificationService.getAllUser()
    .then((res)=>{
      this.authentificationService.setRole(res.data)
      .then((res)=>{
        this.$log.log(res.statusText)
      },(err)=>{
        this.$log.log(err.statusText)
      })
    },(err)=>{
      this.$log.log('err: '+ err.statusText)
    })
  }

  login(user){
    if(user != null){

    this.authentificationService.getAllUser()
    .then((res)=>{

      this.users = res.data;
      this.users.forEach((e)=>{
        if( (user.email === e.email) && (user.password === e.password) ){
            this.foundUser = true;
            user.nom = e.nom;
            this.authentificationService.getRole(user.email)
            .then((res)=>{
              this.role = res.data
              this.$log.log("role: " + res.data)
            },(err)=>{
              this.$log.log(err.statusText)
            })
        }
      })

      if(this.foundUser){
        this.result = 'Welcome '+ user.nom + ' :)';
        this.$log.log("OK connexion ! ");
        this.$sessionStorage.put('userConnected', JSON.stringify(user))
        this.$log.log("userConnected: "+ this.$sessionStorage.get('userConnected'))
      }else{
        this.result = 'Connexion failed ! ';
        this.$log.log("failed connexion ! ");
      }


    },(err)=>{
      this.$log.log("error: " + err.statusText + '-'+ err.status)

    })
  }
  this.result = 'Enter your ID ! ';
  this.$log.log("Please enter your ID ! ");
}

  getUserConnected(){
      this.userConnected = this.authentificationService.getUserConnected();
      this.$log.log('userConnected: '+ this.userConnected)
  }


}

authentificationController['$inject'] = ['$scope','$http', '$log', 'authentificationService', '$sessionStorage'];
