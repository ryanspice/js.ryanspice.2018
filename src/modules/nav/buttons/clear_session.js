
import Icon from "../icon";

export default class Clear_Session extends Icon {

	constructor(){

		return super({
			style:`padding:0px !important; float:right;`,
			renderTo:`#hamburger`,
			id:'cloud-off',
			onclick:()=>{
				sessionStorage.clear();window.location = window.location;
			}
		});

	}

}
