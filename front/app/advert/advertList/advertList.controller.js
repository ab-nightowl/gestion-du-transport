export default class AdvertListController{
    constructor(advertListService){
        this.advertListService = advertListService
       
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
}

AdvertListController['$inject'] = ['AdvertListService']