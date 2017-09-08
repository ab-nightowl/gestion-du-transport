export default class authentificationController {

  constructor($scope,$http, $log, authentificationService, $sessionStorage, $uibModal, $document){
    this.$scope = $scope;
    this.$http = $http
    this.$log = $log
    this.authentificationService = authentificationService;
    this.$sessionStorage = $sessionStorage;
    this.$uibModal = $uibModal;
    this.$document = $document;

    this.items = ['item1', 'item2', 'item3'];
     this.animationsEnabled = true;
}


 // open(size, parentSelector) {
 //   var parentElem = parentSelector ?
 //     angular.element($document[0].querySelector('.modal-demo ' + parentSelector)) : undefined;
 //   var modalInstance = this.$uibModal.open({
 //     animation: this.animationsEnabled,
 //     ariaLabelledBy: 'modal-title',
 //     ariaDescribedBy: 'modal-body',
 //     template: '<h1>Hello modal</h1>',
 //     controller: 'ModalInstanceCtrl',
 //     controllerAs: 'this',
 //     size: size,
 //     appendTo: parentElem,
 //     resolve: {
 //       this.items {
 //         return this.items;
 //       }
 //     }
 //   });





  login(user){

    if(user != null){

    this.authentificationService.getAllUser()
    .then((res)=>{

      this.users = res.data;
      this.users.forEach((e)=>{
        if( (user.email === e.email) && (user.password === e.password) ){
            this.foundUser = true;
            user.nom = e.nom;
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

}

authentificationController['$inject'] = ['$scope','$http', '$log', 'authentificationService', '$sessionStorage', '$uibModal', '$document'];
