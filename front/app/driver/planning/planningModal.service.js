import PlanningModalCtrl from "./planningModal.controller";
import template from "./planningModal.html";
export default class PlanningModalService {
  constructor($uibModal) {
    this.$uibModal = $uibModal;
  }

  open(calendarEvent) {
    this.calendarEvent = calendarEvent
    let modalInstance = this.$uibModal.open({
      template: template,
      controller: PlanningModalCtrl.name,
      controllerAs: "$ctrl",
      resolve: {
        calendarEvent: () => {
          return this.calendarEvent
        }
      }
    });

    modalInstance.result.then(selectedItem => {
      this.selected = selectedItem;
    });
  }
}
