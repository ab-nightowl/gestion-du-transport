export default class PlanningModalCtrl {
  constructor(
    PlanningModalService,
    PlanningService,
    $uibModalInstance,
    $location,
    $sessionStorage
  ) {
    this.PlanningModalService = PlanningModalService;
    this.PlanningService = PlanningService;
    this.$uibModalInstance = $uibModalInstance;
    this.$location = $location;
    this.calendarEvent = PlanningModalService.calendarEvent
    this.$sessionStorage = $sessionStorage
  }
  $onInit(){
  }

  confirm() {
    this.booking = this.calendarEvent.actions[0].hide
    this.user = JSON.parse(this.$sessionStorage.get('userConnected'))
    this.booking.driver = this.user
    
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
PlanningModalCtrl['$inject'] = ['PlanningModalService','PlanningService','$uibModalInstance','$location','$sessionStorage']
