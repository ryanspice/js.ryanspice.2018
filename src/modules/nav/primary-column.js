
import AsyncView from "../../entry";

export default class PrimaryColumn extends AsyncView {


	constructor(ref?:HTML5Element){

		super(ref)

		return {
			link:this,
			type:`aside`,
			id:'primary-column',
			className:'noselect hidden',
			style:``,
			innerHTML:``,
			onclick:this.click
		}

	}

	click(evt){

		window.controller.goTo('settings');
				evt.stopPropagation();


	}

}
