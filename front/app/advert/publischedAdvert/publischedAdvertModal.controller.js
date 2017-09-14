export default class PublischedAdvertModalCtrl {
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
  $onInit(){
    this.date = this.advert.dateFirst.toLocaleDateString()
    this.time = this.advert.dateFirst.toLocaleTimeString()
  }

  confirm() {
    this.AdvertPublischedService.saveAdvert(this.advert);
    this.$uibModalInstance.close();
    this.$location.path(
      "collaborateur/annonces/creer"
    );   
    
  } 

  cancel() {
    this.$uibModalInstance.dismiss("cancel");
  }
}
PublischedAdvertModalCtrl['$inject'] = ['AdvertPublischedModalService','AdvertPublischedService','$uibModalInstance','$location']
