export default class AdvertListController {
    constructor(advertListService, AdvertListModalService, $route) {
        this.advertListService = advertListService
        this.AdvertListModalService = AdvertListModalService
        this.config = {
            itemsPerPage: 5,
            fillLastPage: true
        }
        this.list = []
        this.listEnd = []
        this.$route = $route
        this.itemsPerPage = 5;
        this.currentPage = 0;
        this.maxSize = 5;
        
        
        
    }
    $onInit() {
        this.advertListService.getAdvertHistory().then(res => {
            res.data.forEach(function (element) {
                this.dateTime = element.dateFirst.split('T')
                this.date = this.dateTime[0]
                this.splitTime = this.dateTime[1].split('+')
                this.time = this.splitTime[0]
                element.dateFirst = this.date + ' à ' + this.time 
                if (element.statut === "INPROGRESS") {
                    this.list.push(element)
                }
                else {
                    this.listEnd.push(element)
                }
            }, this)
            this.totalItems = this.listEnd.length;
        })
        
    }
    cancelled(id) {
        this.AdvertListModalService.open(id)
     
        
    }
}

AdvertListController['$inject'] = ['AdvertListService', 'AdvertListModalService', '$route']