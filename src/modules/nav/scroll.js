//@flow

import View from "../view";

import engine from "../../sjs/launch_engine";

export default class Scroll extends View {

	constructor(){

		super({
			type:`span`,
			id:`scroll`,
			renderTo:'#toolbar-column',
			mounted:async (evt)=>{
				await this.session.updateSessionData(false);
				await engine(null, this.session);
			}
		})

	}

}
