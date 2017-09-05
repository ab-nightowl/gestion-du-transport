export default class AdvertBookingCtrl {
  constructor(AdvertBookingService, AdvertModalService) {
    this.AdvertBookingService = AdvertBookingService;
    this.AdvertModalService = AdvertModalService;
  }

  book() {
    this.AdvertBookingService.book(this.advert);
  }

  open() {
    this.AdvertModalService.open();
  }

  findAdvertByDeparture() {
    return this.AdvertBookingService.findAdvertByDeparture();
  }
}
