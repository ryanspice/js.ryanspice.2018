//@flow

import Icon from "../icon";
//import Flyout from "../flyout";

export default class Clear_Session extends Icon {

	constructor(){

		return super({
			renderTo:`#hamburger`,
			id:'cloud-off',
			onclick:async ()=>{

				const Flyout = (await import('../flyout')).default;

				template.defer = [];

				template.template[0] = [
					new Flyout({
						title:'Clear Session Storage',
						type:'type',
						description:'Are you sure?',
						buttons:{ok:'Clear', cancel:'Cancel'},
						action:()=>{
							sessionStorage.clear();
							window.location = window.location;
						}
					})
				];

				await template.a();
				await template.iterateTemplate();

			}

		});

	}

}
