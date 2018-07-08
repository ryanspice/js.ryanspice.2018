//@flow

import View from "../view";

export default class Engine extends View {

	constructor(ref?:HTML5Element){

		super(ref)

		this.source = "https://ryanspice.com/mapper/Map/vendor/index.html";

		return {
			link:this,
			type:`view`,
			id:'engine-view',
			className:'slide',
			style:`background:transparent;`,
			innerHTML:`<iframe src="${this.source}"></iframe>`
		}

	}

}
