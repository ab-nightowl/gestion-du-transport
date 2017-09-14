export default class PlanningController {
    constructor(PlanningService,PlanningModalService) {
        this.calendarView = "day"
        this.viewDate = new Date()
        this.calendarTitle = "Planning"
        this.PlanningService = PlanningService
        this.PlanningModalService = PlanningModalService
        this.events = []
    }
    $onInit() {
        this.PlanningService.getEvent().then(res => {
            res.data.forEach(function (element) {   
            if(element.withDriver){         
                if (element.driver != null) {
                        this.color =
                            { // can also be calendarConfig.colorTypes.warning for shortcuts to the deprecated event types
                                primary: '#89cad8', // the primary event color (should be darker than secondary)
                                secondary: '#89cad8' // the secondary event color (should be lighter than primary)
                            }
                        this.listActions = [
                            {
                                label: `<br><br><br><p><strong> Responsable : </strong> ` + element.booker.nom.toUpperCase() + ' ' + element.booker.prenom + '</p>'// the label of the action
                            },
                            {
                                label: "<br><p><strong>Vehicules : </strong>" + element.vehicle.licensePlate + "</p>"
                            },
                            {
                                label: "<strong class='col-xs-offset-6'>Accepté</strong>"
                            }
                        ]
                        this.events.push(
                            {
                                cssClass: 'edit-event',
                                startsAt: element.dateFirst,
                                endsAt: element.dateLast,
                                color: this.color,
                                actions:
                                this.listActions
                        }

                    )
                } else {
                    console.log(element);
                    
                    this.color =
                        { // can also be calendarConfig.colorTypes.warning for shortcuts to the deprecated event types
                            primary: '#0201ba', // the primary event color (should be darker than secondary)
                            secondary: '#fdf1ba' // the secondary event color (should be lighter than primary)
                        }
                        this.listActions = [ 
                            {
                                hide:element
                            }
                        ]

                    this.events.push(
                        {
                            title: '<h8>Réservation d\'un vehicule'+'</h8>' +`<p><strong> Responsable : </strong> ` + element.booker.nom.toUpperCase() + ' ' + element.booker.prenom + '</p>'
                            + "<p><strong>Vehicules : </strong>" + element.vehicle.licensePlate + "</p>", // The title of the event
                            cssClass: 'edit-event',
                            startsAt: element.dateFirst,
                            endsAt: element.dateLast,
                            color: this.color,
                            actions: this.listActions
                        }

                    )
                }

            }
            }, this);


        })


    }
    eventClicked(calendarEvent) {              
        this.PlanningModalService.open(calendarEvent);
    }

}
