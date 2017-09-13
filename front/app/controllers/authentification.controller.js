export default class authentificationController {

  constructor($scope,$http, $log, authentificationService, $sessionStorage, $window, $timeout){
    this.$scope = $scope;
    this.$http = $http
    this.$log = $log
    this.authentificationService = authentificationService;
    this.$sessionStorage = $sessionStorage;
    this.$window = $window;
    this.$timeout = $timeout;
}

  $onInit(){
    this.getAllUsers();
    this.getUserConnected();

    if(this.$sessionStorage.get('userConnected')!= undefined){
        this.getRole();
    }

  }

  //-------------------Get userConnected-----------------------------
getUserConnected(){
  if(JSON.parse(this.$sessionStorage.get('userConnected')) != undefined){
     try {
       this.userConnected = JSON.parse(this.$sessionStorage.get('userConnected'));
       this.$log.log ('Hi user :) '+this.userConnected.email + ' -- ' + this.userConnected.password );
       return this.userConnected;
     } catch (e) {
       this.$log.log ('error: '+ e.message);
     }
   }else{
     this.$log.log ('No user connected ! :(');
   }
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
              this.role = res.data;
              this.$sessionStorage.put('userConnectedRole', res.data)
              this.$log.log("role: " + res.data)
              this.$log.log("userConnectedRole: "+ this.$sessionStorage.get('userConnectedRole'))
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


deconnexion(){
  this.result = "Déconnexion en cours";
  this.$timeout(()=>{
  this.authentificationService.deconnexion();
  this.$window.location.reload();
}, 1500);

}


  getRole(){
    if(this.$sessionStorage.get('userConnected') != undefined){
      this.role = this.$sessionStorage.get('userConnectedRole');
      this.$log.log("userConnectedRole: " + this.role);
    }

  }

  changeRole(newRole){

    this.$sessionStorage.remove('userConnectedRole');
    this.$sessionStorage.put('userConnectedRole', newRole);
    this.result = 'OK, wait...'
    this.$timeout(()=>{

    this.authentificationService.changePage('/gestion-du-transport/home');
    this.$window.location.reload();
  }, 1500);

  }

  changePage(url){
    this.$timeout(()=>{
    this.authentificationService.changePage(url);
    this.$window.location.reload();
  }, 1500);

  }

}

authentificationController['$inject'] = ['$scope','$http', '$log', 'authentificationService', '$sessionStorage','$window', '$timeout'];
