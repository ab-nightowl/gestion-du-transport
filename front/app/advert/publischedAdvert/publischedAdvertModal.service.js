import AdvertModalCtrl from "./publischedAdvertModal.controller";
import template from "./publischedAdvertModal.html";
export default class AdvertPublischedModalService {
  constructor($uibModal) {
    this.$uibModal = $uibModal;
  }

  open(advert) {
    this.advert = advert;
    let modalInstance = this.$uibModal.open({
      template: template,
      controller: AdvertModalCtrl.name,
      controllerAs: "$ctrl",
      resolve: {
        advert: () => {
          return this.advert;
        }
      }
    });

    modalInstance.result.then(selectedItem => {
      this.selected = selectedItem;
    });
  }
}
