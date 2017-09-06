export default class AdvertController{
    constructor($http){
        this.$http = $http
        this.today()
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
    }
    calculate(){
      var map;
      var panel = document.querySelector("#panel");
        
        
            var request = {
                origin      : this.adresseDepart.formatted_address,
                destination : this.adresseArriver.formatted_address,
                travelMode  : google.maps.DirectionsTravelMode.DRIVING, // Type de transport
            }
            var directionsService = new google.maps.DirectionsService(); // Service de calcul d'itinéraire
            directionsService.route(request, function(response, status){ // Envoie de la requête pour calculer le parcours
                if(status == google.maps.DirectionsStatus.OK){ 
                  panel.textContent = 'Distance : '+response.routes[0].legs[0].distance.text + " / "
                                    + 'Durée : '+response.routes[0].legs[0].duration.text ;
    
            }});
        }
        save(){
            this.dateAdvert = new Date(this.date.getFullYear(),this.date.getMonth(),this.date.getDay())
            console.log(this.dateAdvert);
            
            this.advert = {
                'driver': {registrationNumber:"test", role: "DRIVER"  },
                'addressDeparture':  this.adresseDepart.formatted_address,
                'addressArrival':  this.adresseArriver.formatted_address,
                'licensePlate': this.licensePlate,
                'brand':this.brand,
                'model':this.model,
                'capacity' : this.capacity,
                'dateFirst' : this.date
            }           

        this.$http.post('http://localhost:8080/addNew',this.advert).then(()=>{
            alert('ok')
        })
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
          function disabled(data) {
              
              
            var date = data.date,
              mode = data.mode;
              console.log(date.getDay());
                            
            return mode === 'day' &&   (date.getDay() === 0 || date.getDay() === 6);
          }
        
    AdvertController['$inject'] = ['$http']


    
