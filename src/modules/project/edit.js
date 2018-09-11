
import Panel from "./panel";

import ServiceSession from "../../service.session";

import {
	assign
} from "../../include/util";

export default class Edit extends Panel {

	constructor(data){

		return super(assign(data,{
			type:`view`,
			id:`${data.title}edit-view`,
			className:'slide',
			appendHTML:`
				<column class="col-md-24">

					<h2 style="background:rgba(25,25,25,0.25);">${data.title}</h2>
					<type>${data.type}</type>
					<description>${data.description}</description>
					<br/>
					<textarea style="background:transparent;color:white;width:100%;min-height:320px;">
						{

						}
					</textarea>

	        <div class="form-group hidden">
	            <p class="form-group-label">Core Properties</p>
	            <div class="checkbox">
	                <label>
	                    <input type="checkbox" checked disabled></input>
	                    <span style="color:white;">ES6</span>
	                </label>
	            </div>

	            <div class="checkbox">
	                <label>
	                    <input type="checkbox" checked disabled></input>
	                    <span style="color:white;">FlowType</span>
	                </label>
	            </div>

	            <div class="checkbox">
	                <label>
	                    <input type="checkbox" disabled="true"></input>
	                    <span style="color:white;">Minify</span>
	                </label>
	            </div>
				</column>`
				}
			)
		)
	}

	click(evt){

		window.controller.goTo('settings');
		evt.stopPropagation();

	}

}
