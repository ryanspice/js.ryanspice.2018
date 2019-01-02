//@flow

import Icon from "../icon";

export default class Clear_Session extends Icon {

	constructor(){

		return super({
			style:`padding:0px !important; float:right;`,
			renderTo:`#hamburger`,
			id:'help-circle',
			onclick:(evt)=>{

				this.log.debug(`Clear_Session.onclick(${evt})`);

				this.controller.goTo('tertiary',false);

			}
		});

	}

}
