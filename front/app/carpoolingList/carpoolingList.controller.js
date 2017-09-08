export default class CarpoolingListCtrl {
  constructor(CarpoolingListService) {
    this.CarpoolingListService = CarpoolingListService;

    this.config = {
      itemsPerPage: 5,
      fillLastPage: true
    };
    this.list = [];
    this.listEnd = [];
  }
  
  $onInit() {
    this.CarpoolingListService.getCarpoolingHistory().then(res => {
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
