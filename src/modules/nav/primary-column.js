//@flow

import View from "../view";

export default class PrimaryColumn extends View {

	constructor(ref?:HTML5Element){

		super(ref)

		return {
			link:this,
			type:`aside`,
			id:'primary-column',
			className:'noselect hidden',
			onclick:this.click
		}

	}

	click(evt){

		this.controller.goTo('settings');
		evt.stopPropagation();

	}

}
