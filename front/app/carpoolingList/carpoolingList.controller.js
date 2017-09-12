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
        this.dateTime = element.dateFirst.split("T");
        this.date = this.dateTime[0];
        this.splitTime = this.dateTime[1].split("+");
        this.time = this.splitTime[0];
        element.dateFirst = this.date + " à " + this.time;
        if (element.statut === "INPROGRESS") {
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

  cancel(carpoolingId) {
    this.carpoolingId = carpoolingId;
    this.CarpoolingModalService.cancel(this.carpoolingId);
  }

}
