import headerTemplate from '../header/headerTemplate.html'
import '../header/header.component.css';


class headerController {
    constructor () {
        this.titre = 'hello header controller';
    }
}

// const headerComponent = {
// 	headerTemplate,
// 	headerController,
//   bindings : {}
// }


const headerComponent = {
	template : headerTemplate,
	headerController

}
export default headerComponent
