export default class AdvertBookingService {
  constructor($uibModal, apiUrl, $http, $sessionStorage, $route) {
    this.$uibModal = $uibModal;
    this.apiUrl = apiUrl;
    this.$http = $http;
    this.$sessionStorage = $sessionStorage;
    this.user = { registrationNumber: null };
    this.$route = $route;
  }

  findAll() {
    return this.$http.get(this.apiUrl + "/advert");
  }

  confirm(advert) {
    this.advert = advert;
    this.user = JSON.parse(this.$sessionStorage.get("userConnected"));
    this.$http
      .patch(
        this.apiUrl + "/advert/book/" + this.user.registrationNumber,
        this.advert
      )
      .then(res => {
        this.$route.reload();
      });
  }
}
