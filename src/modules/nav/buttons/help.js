
import Icon from "../icon";

export default class Clear_Session extends Icon {

	constructor(){

		return super({
			style:`padding:0px !important; float:right;`,
			renderTo:`#hamburger`,
			id:'help-circle',
			onclick:()=>{
				this.log.debug('Clear_Session.onclick()');
				this.controller.goTo('tertiary',false);
			}
		});

	}

}
