//@flow

import View from "../view";

export default class Hamburger extends View {
	constructor(){
		return super({
			type:`span`,
			id:`hamburger`,
			renderTo:'#toolbar-column',
			innerHTML:`<span><i class="" data-feather="menu"></i></span>`,
			beforeMount:()=>{},
			onclick:(evt)=>{}
		});
	}
}
