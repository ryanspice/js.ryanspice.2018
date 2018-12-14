
import AsyncView from "../../entry";

export default class Save extends AsyncView {

	test:any = 'test'

	constructor(ref?:HTML5Element){

		super(ref)

		return {
			link:this,
			type:`view`,
			id:'save-view',
			className:'slide',
			style:`
	      z-index: 200;
		    position: absolute;
		    background: black;
		    margin: 0px;
		    padding: 48px;
				width:100%;
				height:100%;
				max-width:720px;
				opacity:1 !important;
				`,
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
