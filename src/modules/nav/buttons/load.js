
import Icon from "../icon";

export default class LoadProject extends Icon {

	constructor(){

		return super({
			style:`padding:0px !important;`,
			renderTo:`#hamburger`,
			id:'upload',
			onclick:(evt)=>{
				console.log(evt,this);
				controller.goTo('load',true, (e)=>{
					console.log(e.value);
					window.controller.views[9].link.updateList()});
			}

		});

	}

}
