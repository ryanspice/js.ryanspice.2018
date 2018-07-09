
import View from "../view";

export default class Save extends View {

	test:any = 'test'

	constructor(ref?:HTML5Element){

		super(ref)

		return {
			link:this,
			type:`view`,
			id:'save-view',
			className:'slide short',
			style:``,
			innerHTML:`
				<column class="col-md-12">
					<h2 >save project as <input type="text" placeholder="app" /></h2>
					<br/>

					<input type="button" value="save" onclick="(${this.goto})()"/>
				</column>
			`,
			onclick:this.click
		}

	}

	goto = ()=>{

		window.controller.goTo('engine');

	}

	click(evt){

		evt.stopPropagation();
		window.controller.goTo('settings');

	}

}
