export default class CarpoolingListService {
  constructor($http, apiUrl, $sessionStorage) {
    this.$http = $http;
    this.apiUrl = apiUrl;
    this.$sessionStorage = $sessionStorage
  }

  getCarpoolingHistory() {
    this.user = this.$sessionStorage.get("userConnected");
    return this.$http.get(this.apiUrl + "/advert/passenger/" + this.user);
  }
}
