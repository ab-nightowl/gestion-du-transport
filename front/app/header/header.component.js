import headerTemplate from '../header/headerTemplate.html'
import '../header/header.component.css';


class headerController {
    constructor () {
        this.titre = 'hello header controller';
    }

    $onInit(){
      this.getUserConnected();
    }
}


const headerComponent = {
	template : headerTemplate,
	headerController

}
export default headerComponent
