import AdvertModalCtrl from "./advertModal.controller";
import template from './advertBookingModal.html'
export default class AdvertModalService {
  constructor($uibModal) {
    this.$uibModal = $uibModal;
  }

  open() {
    this.instance = this.$uibModal.open({
      template: template,
      controller: AdvertModalCtrl.name,

    });
  }
  
}
