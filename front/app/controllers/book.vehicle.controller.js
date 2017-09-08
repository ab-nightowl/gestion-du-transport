
export default class bookVehicleController {

  constructor($scope,$http, $log, bookVehicleService){
    this.$scope = $scope;
    this.$http = $http
    this.$log = $log
    this.bookVehicleService = bookVehicleService;

    this.inlineOptions = {
        customClass: this.getDayClass,
        minDate: new Date(),
        showWeeks: true
      };

      this.dateOptions = {
        dateDisabled: this.disabled,
        formatYear: 'yy',
        maxDate: new Date(2020, 5, 22),
        startingDay: 1
      };
      this.toggleMin();
      this.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
      this.format = this.formats[0];
      this.altInputFormats = ['M!/d!/yyyy'];
      this.popup = {
        opened: false
      };
      var tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      var afterTomorrow = new Date();
      afterTomorrow.setDate(tomorrow.getDate() + 1);
      this.events = [
        {
          date: tomorrow,
          status: 'full'
        },
        {
          date: afterTomorrow,
          status: 'partially'
        }
      ];
}


today() {
    this.date = new Date();
  }

  clear() {
    this.date = null;
  }
  // Disable weekend selection


  toggleMin() {
    this.inlineOptions.minDate = this.inlineOptions.minDate ? null : new Date();
    this.dateOptions.minDate = this.inlineOptions.minDate;
  }
  open() {
    this.popup.opened = true;
  }

  setDate(year, month, day) {
    this.date = new Date(year, month, day);
  }


  getDayClass(data) {
    var date = data.date,
      mode = data.mode;
    if (mode === 'day') {
      var dayToCheck = new Date(date).setHours(0,0,0,0);

      for (var i = 0; i < $scope.events.length; i++) {
        var currentDay = new Date($scope.events[i].date).setHours(0,0,0,0);

        if (dayToCheck === currentDay) {
          return $scope.events[i].status;
        }
      }
    }

    return '';
  }
  disabled(data) {
    var date = data.date,
      mode = data.mode;
    return mode === 'day' &&   (date.getDay() === 0 || date.getDay() === 6);
  }

  $onInit(){
    this.getVehicles();
    this.currentId = 0;
    var d = new Date();
        d.setHours( 0 );
        d.setMinutes( 0 );
      this.mytime = d;
      this.hstep = 1
      this.mstep = 10
      this.ismeridian = false
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


    save(){
        this.resultDateDepart = new Date()
        this.resultDateDepart.setMonth(this.dateReservation.depart.getMonth())
        this.resultDateDepart.setDate(this.dateReservation.depart.getDate())
        this.resultDateDepart.setHours(this.mytimeReservation.depart.getHours())
        this.resultDateDepart.setMinutes(this.mytimeReservation.depart.getMinutes())


        this.resultDateRetour = new Date()
        this.resultDateRetour.setMonth(this.dateReservation.retour.getMonth())
        this.resultDateRetour.setDate(this.dateReservation.retour.getDate())
        this.resultDateRetour.setHours(this.mytimeReservation.retour.getHours())
        this.resultDateRetour.setMinutes(this.mytimeReservation.retour.getMinutes())



        console.log('depart: '+this.resultDateDepart)
        console.log('retour: '+this.resultDateRetour)

    }

}

bookVehicleController['$inject'] = ['$scope','$http', '$log', 'bookVehicleService'];
