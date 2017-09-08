export default class AdvertBookingService {
  constructor($uibModal, apiUrl, $http) {
    this.$uibModal = $uibModal;
    this.apiUrl = apiUrl;
    this.$http = $http;
  }

  findAll() {
    return this.$http.get(this.apiUrl + "/advert");
  }

  confirm(advert) {
    this.advert = advert;
    // let user = sessionStorage.getItem('user')
    let user = "test"
    this.advert.passengers.push(user)
    this.$http.patch(this.apiUrl + "/advert/book", this.advert);
  }
}
