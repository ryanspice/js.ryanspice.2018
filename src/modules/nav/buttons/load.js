
import Icon from "../icon";

export default class LoadProject extends Icon {

	constructor(){

		return super({
			style:`padding:0px !important;`,
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
