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
        this.getRole(JSON.parse(this.$sessionStorage.get('userConnected')).email);
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


deconnexion(){
  this.result = "Déconnexion en cours";
  this.$timeout(()=>{
  this.authentificationService.deconnexion();
  this.$window.location.reload();
}, 1500);

}


  getRole(email){

    if(this.$sessionStorage.get('userConnected') != undefined){
      this.authentificationService.getRole(email)
      .then((res)=>{
        this.role = res.data
        this.$log.log("role: " + res.data)
      },(err)=>{
        this.$log.log(err.statusText)
      })
    }

  }

  // changeRole(newRole){
  //   this.role = role;
  //   this.$sessionStorage.set('newRole', newRole)
  // }

  changePage(url){
    this.$timeout(()=>{
    this.authentificationService.changePage(url);
    this.$window.location.reload();
  }, 1500);

  }

}

authentificationController['$inject'] = ['$scope','$http', '$log', 'authentificationService', '$sessionStorage','$window', '$timeout'];
