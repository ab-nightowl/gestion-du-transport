import CarpoolingModalCtrl from "./carpoolingModal.controller";
import template from "./carpoolingListModal.html";
export default class CarpoolongModalService {
  constructor($uibModal) {
    this.$uibModal = $uibModal;
  }

  open(carpooling) {
    this.carpooling = carpooling;
    let modalInstance = this.$uibModal.open({
      template: template,
      controller: CarpoolingModalCtrl.name,
      controllerAs: "$ctrl",
      resolve: {
        advert: () => {
          return this.carpooling;
        }
      }
    });

    modalInstance.result.then(selectedItem => {
      this.selected = selectedItem;
    });
  }
}
