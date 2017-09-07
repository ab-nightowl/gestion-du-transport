export default class AdvertModalCtrl {
  constructor(
    AdvertModalService,
    AdvertBookingService,
    $uibModalInstance,
    $location
  ) {
    this.AdvertModalService = AdvertModalService;
    this.AdvertBookingService = AdvertBookingService;
    this.$uibModalInstance = $uibModalInstance;
    this.$location = $location;
    this.advert = AdvertModalService.advert;
  }

  confirm() {
    this.AdvertBookingService.confirm(this.advert);
    this.$uibModalInstance.close();
    this.$location.url(
      "gestion-du-transport/collaborateur/collaborateur/annonces/"
    );
  }

  cancel() {
    this.$uibModalInstance.dismiss("cancel");
  }
}
