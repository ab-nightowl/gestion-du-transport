export default class CarpoolingListService {
  constructor($http, apiUrl, $sessionStorage, $route) {
    this.$http = $http;
    this.apiUrl = apiUrl;
    this.$sessionStorage = $sessionStorage;
    this.user = { registrationNumber: null };
    this.$route = $route;
  }

  getCarpoolingHistory() {
    // this.user = JSON.parse(this.$sessionStorage.get("userConnected"));
    this.user.registrationNumber = "test";
    return this.$http.get(
      this.apiUrl + "/advert/passenger/" + this.user.registrationNumber
    );
  }

  cancel(carpooling) {
    this.carpooling = carpooling;
    // this.user = JSON.parse(this.$sessionStorage.get("userConnected"));
    this.user.registrationNumber = "test";
    this.$http
      .patch(
        this.apiUrl + "/advert/passenger/cancelled/" + this.carpooling,
        this.user.registrationNumber
      )
      .then(res => {
        this.$route.reload();
      });
  }
}
