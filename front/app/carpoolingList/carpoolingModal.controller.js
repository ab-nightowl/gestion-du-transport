export default class CarpoolingModalCtrl {
  constructor(
    CarpoolingModalService,
    CarpoolingListService,
    $uibModalInstance,
    $location
  ) {
    this.CarpoolingModalService = CarpoolingModalService;
    this.CarpoolingListService = CarpoolingListService;
    this.$uibModalInstance = $uibModalInstance;
    this.$location = $location;
    this.advert = CarpoolingModalService.advert;
  }

  close() {
    this.$uibModalInstance.close();
  }
}
