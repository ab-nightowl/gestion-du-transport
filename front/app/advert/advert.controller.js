export default class AdvertController{
    constructor(){
        
    }
    
   
    
    /*var direction = new google.maps.DirectionsRenderer({
        map   : map, 
        panel : panel 
    });
    */
    calculate(){
      var map;
      var panel = document.querySelector("#panel");
      
            var request = {
                origin      : this.adresseDepart.address_components[0].long_name,
                destination : this.adresseArriver.address_components[0].long_name,
                travelMode  : google.maps.DirectionsTravelMode.DRIVING, // Type de transport
            }
            var directionsService = new google.maps.DirectionsService(); // Service de calcul d'itinéraire
            directionsService.route(request, function(response, status){ // Envoie de la requête pour calculer le parcours
                if(status == google.maps.DirectionsStatus.OK){ 
                  panel.textContent = 'Distance : '+response.routes[0].legs[0].distance.text + " / "
                                    + 'Durée : '+response.routes[0].legs[0].duration.text ;
    
            }});
          
         //https://code.google.com/intl/fr-FR/apis/maps/documentation/javascript/reference.html#DirectionsRequest
    };

    // getDirection() {
      
      
    //   var directionsDisplay = new google.maps.DirectionsRenderer();
    //     var directionsService = new google.maps.DirectionsService();
    //      var request = {
    //         origin: this.adresseDepart.address_components[0].long_name,
    //         destination: this.adresseArriver.address_components[0].long_name,
    //         mode: google.maps.DirectionsTravelMode.DRIVING
    //       }    
       
    //     directionsService.route(request, function (response, status) {            
    //       if (status === google.maps.DirectionsStatus.OK) {              
    //         directionsDisplay.setDirections(response)
    //         var myroute = directionsDisplay.directions.routes[0];
    //         this.dist = myroute.legs[0].distance.text
    //         this.duration = myroute.legs[0].duration.text
    //         console.log(this.dist);
    //         console.log(this.duration);
            
            
    //       } else {
    //         alert('Google route unsuccesfull!');
    //       }
    //     });
    //   }
}