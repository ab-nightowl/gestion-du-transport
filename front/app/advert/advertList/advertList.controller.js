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
    }
    $onInit() {
        this.advertListService.getAdvertHistory().then(res => {
            res.data.forEach(function (element) {
                if (element.statut === "INPROGRESS") {
                    this.list.push(element)
                }
                else {
                    this.listEnd.push(element)
                }
            }, this);
        })
    }
    cancelled(id) {
        this.AdvertListModalService.open(id)
     
        
    }
}

AdvertListController['$inject'] = ['AdvertListService', 'AdvertListModalService', '$route']