export default class AdvertController {
  constructor(AdvertPublischedService, AdvertPublischedModalService) {
    this.today()
    this.AdvertPublischedModalService = AdvertPublischedModalService
    this.inlineOptions = {
      customClass: getDayClass,
      minDate: new Date(),
      showWeeks: true
    };

    this.dateOptions = {
      dateDisabled: disabled,
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
    this.AdvertPublischedService = AdvertPublischedService


  }
  $onInit() {
    if (!localStorage.getItem('Vehicule') == null || !localStorage.getItem('Vehicule') == []) {
      this.before = JSON.parse(localStorage['Vehicule'])
      this.licensePlate = this.before.licensePlate
      this.brand = this.before.brand
      this.model = this.before.model
      this.capacity = this.before.capacity
    }
    var d = new Date();
    d.setHours(0);
    d.setMinutes(0);
    this.mytime = d;
    this.hstep = 1
    this.mstep = 10
    this.ismeridian = false
  }
  openModal(advert) {
    this.advert = advert;
    this.AdvertPublischedModalService.open(this.advert);
   
  }

  calculate() {
    var map;
    var panel = document.querySelector("#panel");


    var request = {
      origin: this.addressDeparture.formatted_address,
      destination: this.adresseArriver.formatted_address,
      travelMode: google.maps.DirectionsTravelMode.DRIVING, // Type de transport
    }
    var directionsService = new google.maps.DirectionsService(); // Service de calcul d'itinéraire
    directionsService.route(request, function (response, status) { // Envoie de la requête pour calculer le parcours
      if (status == google.maps.DirectionsStatus.OK) {
        panel.textContent = 'Distance : ' + response.routes[0].legs[0].distance.text + " / "
          + 'Durée : ' + response.routes[0].legs[0].duration.text;

      }
    });
  }
  save() {
    this.resultDate = new Date()
    this.resultDate.setMonth(this.date.getMonth())
    this.resultDate.setDate(this.date.getDate())
    this.resultDate.setHours(this.mytime.getHours())
    this.resultDate.setMinutes(this.mytime.getMinutes())
    this.advert = {
      'driver': { registrationNumber: "test", role: "DRIVER" },
      'addressDeparture': this.addressDeparture.formatted_address,
      'addressArrival': this.adresseArriver.formatted_address,
      'licensePlate': this.licensePlate,
      'brand': this.brand,
      'model': this.model,
      'capacity': this.capacity,
      'dateFirst': this.resultDate
    }
    localStorage['Vehicule'] = JSON.stringify(this.advert)
    this.openModal(this.advert)
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
}

function getDayClass(data) {
  var date = data.date,
    mode = data.mode;
  if (mode === 'day') {
    var dayToCheck = new Date(date).setHours(0, 0, 0, 0);

    for (var i = 0; i < $scope.events.length; i++) {
      var currentDay = new Date($scope.events[i].date).setHours(0, 0, 0, 0);

      if (dayToCheck === currentDay) {
        return $scope.events[i].status;
      }
    }
  }

  return '';
}
function disabled(data) {
  var date = data.date,
    mode = data.mode;
  return mode === 'day' && (date.getDay() === 0 || date.getDay() === 6);
}

AdvertController['$inject'] = ['AdvertPublischedService', 'AdvertPublischedModalService']
