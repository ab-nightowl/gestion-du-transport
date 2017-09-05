export default class AdvertModalCtrl {
  constructor(AdvertBookingService) {
    this.AdvertModalService = AdvertBookingService;
  }

  confirm() {
      console.log("test confirm");
    $uibModalInstance.close(this.advert);
  }

  cancel() {
      console.log("test cancel");
    $uibModalInstance.dismiss("cancel");
  }
}
