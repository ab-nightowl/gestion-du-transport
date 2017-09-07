
export default class bookVehicleController {

  constructor($scope,$http, $log, bookVehicleService){
    this.$scope = $scope;
    this.$http = $http
    this.$log = $log
    this.bookVehicleService = bookVehicleService;

}

  $onInit(){
    this.getVehicles();
    this.currentId = 0;
    }


    getVehicles(){
      this.bookVehicleService.getVehicles()
      .then((res)=>{
        this.vehicles = res.data;
        this.$log.log('vehicles: '+ res.data.length);
      },(err)=>{
        this.$log.log('err: '+ err.statusText);
      })
    }


    next(){
        this.currentId == this.vehicles.length - 1 ? this.currentId = 0 : this.currentId++;
    }

    previous(){
        this.currentId == 0 ? this.currentId = this.vehicles.length - 1 : this.currentId--;
    }

    reserveVehicleSociety(vehicleLicensePlate, booking){
      this.bookVehicleService.reserveVehicleSociety(vehicleLicensePlate, booking)
      .then((res)=>{

          this.result = "Votre réservation est bien enregistré :)"

        this.$log.log("Réservé OK ! ");
      },(err)=>{
        this.$log.log("Réservé failed ! " + err.statusText);
        this.result = "Votre réservation est échouée :("
      })
    }


}

bookVehicleController['$inject'] = ['$scope','$http', '$log', 'bookVehicleService'];
