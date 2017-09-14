export default class bookVehicleService{
  constructor( $log, $http, urlsService){
    this.$log = $log;
    this.$http =  $http;
    this.urlsService = urlsService;
  }

  getVehicles(){
    return this.$http.get(this.urlsService.vehicles)
  }


  checkingBeforeBookingVehicle(licensePlat){
    return this.$http.get(this.urlsService.checkingBeforeBookingVehicle + '/' + licensePlat)
  }

  reserveVehicleSociety(vehicleLicensePlate, booking){
    return this.$http.put(this.urlsService.vehicles + '/' + vehicleLicensePlate, booking );
}


  getAllBookings(){
    return this.$http.get(this.urlsService.booking)
  }


}
