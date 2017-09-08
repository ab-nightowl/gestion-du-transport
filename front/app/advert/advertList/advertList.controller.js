export default class AdvertListController{
    constructor(advertListService,AdvertListModalService){
        this.advertListService = advertListService
        this.AdvertListModalService = AdvertListModalService
        this.config = {
          itemsPerPage: 5,
          fillLastPage: true
        }
        this.list=[]
        this.listEnd=[]
    }
    $onInit(){
        this.advertListService.getAdvertHistory().then(res=>{
            res.data.forEach(function(element) {
                
                if(element.statut === "INPROGRESS"){
                    this.list.push(element)
                }
                else{
                    this.listEnd.push(element)
                }
            }, this);
        })
        console.log(this.list);
        
    }
    cancelled(id){
        this.AdvertListModalService.open(id);
    }
}

AdvertListController['$inject'] = ['AdvertListService','AdvertListModalService']