export default class PlanningModalCtrl {
  constructor(
    PlanningModalService,
    PlanningService,
    $uibModalInstance,
    $location
  ) {
    this.PlanningModalService = PlanningModalService;
    this.PlanningService = PlanningService;
    this.$uibModalInstance = $uibModalInstance;
    this.$location = $location;
    this.calendarEvent = PlanningModalService.calendarEvent
  }
  $onInit(){
  }

  confirm() {
    this.booking = this.calendarEvent.actions[0].hide
    this.booking.driver = { registrationNumber: "test", role: "DRIVER" },
    
    this.PlanningService.addDriver(this.booking)
    
    this.$uibModalInstance.close();
    this.$location.path(
      "chauffeur/planning"
    );   
    
  } 

  cancel() {
    this.$uibModalInstance.dismiss("cancel");
  }
}
PlanningModalCtrl['$inject'] = ['PlanningModalService','PlanningService','$uibModalInstance','$location']
