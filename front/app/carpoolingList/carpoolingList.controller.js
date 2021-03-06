export default class CarpoolingListCtrl {
  constructor(CarpoolingListService, CarpoolingModalService) {
    this.CarpoolingListService = CarpoolingListService;
    this.CarpoolingModalService = CarpoolingModalService;

    this.config = {
      itemsPerPage: 5,
      fillLastPage: true
    };

    this.list = [];
    this.listEnd = [];
    this.itemsPerPage = 5;
    this.currentPage = 0;
    this.maxSize = 5;
  }

  $onInit() {
    this.CarpoolingListService.getCarpoolingHistory().then(res => {
      res.data.forEach(function(element) {
        if (element.passengers[0].status === "BOOKED") {
          this.list.push(element);
        } else {
          this.listEnd.push(element);
        }
      }, this);
      this.totalItems = this.listEnd.length;
    });
  }

  open(carpooling) {
    this.carpooling = carpooling;
    this.CarpoolingModalService.open(this.carpooling);
  }

  cancel(carpooling) {
    this.carpooling = carpooling;
    this.CarpoolingModalService.cancel(this.carpooling);
  }

}
