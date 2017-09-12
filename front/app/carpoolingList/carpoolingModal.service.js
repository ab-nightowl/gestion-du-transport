import CarpoolingModalCtrl from "./carpoolingModal.controller";
import details from "./carpoolingListModal.html";
import cancel from "./carpoolingCancelModal.html";
export default class CarpoolingModalService {
  constructor($uibModal) {
    this.$uibModal = $uibModal;
  }

  open(carpooling) {
    this.carpooling = carpooling;
    let modalInstance = this.$uibModal.open({
      template: details,
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

  cancel(carpoolingId) {
    this.carpoolingId = carpoolingId;
    let modalInstance = this.$uibModal.open({
      template: cancel,
      controller: CarpoolingModalCtrl.name,
      controllerAs: "$ctrl",
      resolve: {
        carpoolingId: () => {
          return this.carpoolingId;
        }
      }
    });
  }
}
