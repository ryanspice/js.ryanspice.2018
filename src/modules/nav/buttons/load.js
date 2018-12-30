//@flow

import Icon from "../icon";

export default class LoadProject extends Icon {

	constructor(){

		return super({
			renderTo:`#hamburger`,
			id:'upload',
			onclick:(evt:Event)=>{

				this.controller.goTo('load',true, (e:Event)=>{

					this.log.debug(`LoadProject.onclick(${e})`);

					window.layout.views[19].value.value.value.link.updateList();

				});

			}

		});

	}

}
