export default class AdvertModalCtrl {
  constructor(
    carpoolingModalService,
    carpoolingListService,
    $uibModalInstance,
    $location
  ) {
    this.carpoolingModalService = carpoolingModalService;
    this.carpoolingListService = carpoolingListService;
    this.$uibModalInstance = $uibModalInstance;
    this.$location = $location;
    this.advert = carpoolingModalService.advert;
  }

  close() {
    this.$uibModalInstance.close();
  }
}
