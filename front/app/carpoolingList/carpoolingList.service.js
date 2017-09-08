export default class CarpoolingListService {
  constructor($http, apiUrl) {
    this.$http = $http;
    this.apiUrl = apiUrl;
  }

  getCarpoolingHistory() {
    this.user = sessionStorage.getItem("user");
    return this.$http.get(this.apiUrl + "/advert/" + this.user);
  }
}
