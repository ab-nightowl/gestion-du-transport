export default class AdvertListModalCtrl {
  constructor(
    AdvertListModalService,
    AdvertListService,
    $uibModalInstance,
    $location
  ) {
    this.AdvertListModalService = AdvertListModalService;
    this.AdvertListService = AdvertListService;
    this.$uibModalInstance = $uibModalInstance;
    this.$location = $location;
    this.idAdvert = AdvertListModalService.id;
  }

  confirm() {
    this.AdvertListService.cancelledAdvert(this.idAdvert)
    this.$uibModalInstance.close();
    this.$location.path(
      "collaborateur/annonces"
    );   
    
  } 

  cancel() {
    this.$uibModalInstance.dismiss("cancel");
  }
}
AdvertListModalCtrl['$inject'] = ['AdvertListModalService','AdvertListService','$uibModalInstance','$location']
