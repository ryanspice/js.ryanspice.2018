//@flow

import Icon from "../icon";

export default class Clear_Session extends Icon {

	constructor(){

		return super({
			renderTo:`#hamburger`,
			id:'cloud-off',
			onclick:()=>{

				sessionStorage.clear();window.location = window.location;

			}

		});

	}

}
