export default class AdvertBookingService {
  constructor($uibModal, apiUrl, $http) {
    this.$uibModal = $uibModal;
    this.apiUrl = apiUrl;
    this.$http = $http;
  }

  findAll() {
    return this.$http.get(this.apiUrl + "/advert").then(res => {
      res.data.forEach(function(element) {
        if (element.statut === "INPROGRESS") {
          this.list.push(element);
        } else {
          this.listEnd.push(element);
        }
      });
    });
  }

  confirm(advert) {
    this.advert = advert;
    this.user = sessionStorage.getItem("user");
    this.advert.passengers.push(this.user);
    this.$http.patch(this.apiUrl + "/advert/book", this.advert);
  }
}
