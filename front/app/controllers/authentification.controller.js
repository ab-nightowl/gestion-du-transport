export default class authentificationController {

  constructor($scope,$http, $log, authentificationService, $sessionStorage, $window, $timeout,$location,jssha){
    this.$scope = $scope;
    this.$http = $http
    this.$log = $log
    this.authentificationService = authentificationService;
    this.$sessionStorage = $sessionStorage;
    this.$window = $window;
    this.$timeout = $timeout;
    this.$location = $location
    this.encrypt = jssha
    if(this.getUserConnected()!=undefined){
      this.$location.path('/home')
    }
}

  $onInit(){
    this.authentificationService.getAllUserServer().then(res=>{
      if(res.data.length==0){
        this.getAllUsers();
      }
      
  })
     
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
     this.$location.path('/connexion')
   }
 }


  getAllUsers(){
    this.authentificationService.getAllUser()
    .then((res)=>{
        res.data.forEach(user=>{
          user.registrationNumber = user.matricule
          delete user['matricule']        
        })
        
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
        let password = new this.encrypt("SHA-1", "TEXT")
        password.update(user.password)
        password = password.getHash("HEX")
        if( (user.email === e.email) && (password === e.password) ){
            this.foundUser = true;
            user.nom = e.nom;
            user.prenom = e.prenom
            user.registrationNumber = e.matricule                     
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
        this.result = 'Bienvenue '+ user.nom + ' :)';
        this.$log.log("OK connexion ! ");        
        this.userInfo ={
          "email":user.email,
          "nom":user.nom,
          "prenom":user.prenom,
          "registrationNumber":user.registrationNumber
        }
        this.$sessionStorage.put('userConnected', JSON.stringify(this.userInfo))
        this.$log.log("userConnected: "+ this.$sessionStorage.get('userConnected'))
        this.$window.location.reload()

      }else{
        this.result = 'Connexion échouée ! ';
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
}, 1000);

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
    // this.$window.location.reload();
  }, 1500);

  }

  changePage(url){
    this.$timeout(()=>{
    this.authentificationService.changePage(url);
    // this.$window.location.reload();
  }, 1500);

  }

}

authentificationController['$inject'] = ['$scope','$http', '$log', 'authentificationService', '$sessionStorage','$window', '$timeout','$location','jssha'];
