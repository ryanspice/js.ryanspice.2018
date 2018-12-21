
import Icon from "../icon";

export default class SaveProject extends Icon {

	constructor(){

		return super({
			style:`padding:0px !important;`,
			renderTo:`#hamburger`,
			id:'save',
			onclick:()=>{
				controller.goTo('save',true);
			}
		});

	}

}
