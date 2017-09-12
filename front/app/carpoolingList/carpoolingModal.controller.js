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
    this.carpoolingId = CarpoolingModalService.carpoolingId;
  }

  close() {
    this.$uibModalInstance.close();
  }

  cancel() {
    this.CarpoolingListService.cancel(this.carpoolingId);
    this.$uibModalInstance.close();
  }
}
