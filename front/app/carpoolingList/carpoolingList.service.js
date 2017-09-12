export default class CarpoolingListService {
  constructor($http, apiUrl, $sessionStorage) {
    this.$http = $http;
    this.apiUrl = apiUrl;
    this.$sessionStorage = $sessionStorage
  }

  getCarpoolingHistory() {
    this.user = this.$sessionStorage.get("userConnected");
    return this.$http.get(this.apiUrl + "/advert/passenger/" + this.user.registrationNumber);
  }

  cancel(carpoolingId) {
    this.carpoolingId = carpoolingId;
    this.user = this.$sessionStorage.get("userConnected");
    this.$http.patch(this.apiUrl + "/advert/passenger/cancelled/" + this.carpoolingId, this.user.registrationNumber)
  }
}
