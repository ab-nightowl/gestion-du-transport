export default class AdvertModalCtrl {
  constructor(
    AdvertPublischedModalService,
    AdvertPublischedService,
    $uibModalInstance,
    $location
  ) {
    this.AdvertPublischedModalService = AdvertPublischedModalService;
    this.AdvertPublischedService = AdvertPublischedService;
    this.$uibModalInstance = $uibModalInstance;
    this.$location = $location;
    this.advert = AdvertPublischedModalService.advert;
  }

  confirm() {
    this.AdvertPublischedService.saveAdvert(this.advert);
    this.$uibModalInstance.close();
    this.$location.path(
      "collaborateur/annonces"
    );
  }

  cancel() {
    this.$uibModalInstance.dismiss("cancel");
  }
}
AdvertModalCtrl['$inject'] = ['AdvertPublischedModalService','AdvertPublischedService','$uibModalInstance','$location']
