
import Icon from "../icon";

export default class LoadProject extends Icon {

	constructor(){

		return super({
			renderTo:`#hamburger`,
			id:'upload',
			onclick:(evt)=>{

				this.controller.goTo('load',true, (e)=>{

					window.layout.views[19].value.value.value.link.updateList();

				});

			}

		});

	}

}
