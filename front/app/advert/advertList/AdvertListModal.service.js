import AdvertListModalCtrl from "./AdvertListModal.controller";
import template from "./AdvertListModal.html";
export default class AdvertListModalService {
  constructor($uibModal) {
    this.$uibModal = $uibModal;
  }

  open(id) {
    this.id = id;
    let modalInstance = this.$uibModal.open({
      template: template,
      controller: AdvertListModalCtrl.name,
      controllerAs: "$ctrl",
      resolve: {
        id: () => {
          return this.id;
        }
      }
    });
    
    modalInstance.result.then(selectedItem => {
      this.selected = selectedItem;
    })
  }
}
