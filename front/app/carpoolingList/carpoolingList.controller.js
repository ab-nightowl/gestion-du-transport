export default class CarpoolingListCtrl {
  constructor(carpoolingListService) {
    this.carpoolingListService = carpoolingListService;

    this.config = {
      itemsPerPage: 5,
      fillLastPage: true
    };
    this.list = [];
    this.listEnd = [];
  }
  
  $onInit() {
    this.carpoolingListService.getCarpoolingHistory().then(res => {
      res.data.forEach(function(element) {
        if (element.statut === "INPROGRESS") {
          this.list.push(element);
        } else {
          this.listEnd.push(element);
        }
      }, this);
    });
  }
}
