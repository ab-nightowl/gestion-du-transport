export default class AdvertBookingService {
  constructor($uibModal, apiUrl, $resource) {
    this.$uibModal = $uibModal;
    this.apiUrl = apiUrl;
    this.$resource = $resource;
    this.advertResource = this.$resource(
      this.apiUrl + ":advertId",
      {
        compteId: "@id"
      },
      {
        update: { method: "PUT" },
        query: {
          method: "GET",
          params: { data: "advert" },
          isArray: true
        },
        save: { method: "POST" }
      }
    );
  }

  findAdvertByDeparture() {}
  
  book() {}
}
