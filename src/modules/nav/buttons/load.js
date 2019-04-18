//@flow

import Icon from "../icon";

export default class LoadProject extends Icon {

	constructor(){

		return super({
			renderTo:`#hamburger`,
			id:'upload',
			onclick:(evt:Event)=>{

				this.controller.goTo('load',true, (evt:Event)=>{

					this.log.debug(`LoadProject.onclick(${evt})`);

				});

			}

		});

	}

}
