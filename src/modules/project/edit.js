
import Panel from "./panel";

import ServiceSession from "../../service.session";

const assign = (...args) => {

let h;
	if (args[1].appendHTML)
	h = args[1].innerHTML;

	if (!h)
		return Object.assign(args[0],args[1]);

	this.appendHTML =h;


	let test = new RegExp(/<template>(.*?)<\/template>/g);
	let test1 = test.exec(args[0].innerHTML);
	if (!test1)
		return;
		console.log(test1.index)
	console.log(args[1]);
	console.log(args[0]);
	console.log(args[0].innerHTML = args[0].innerHTML.splice(test1.index+10,0,args[1].appendHTML));
	//console.log(args[1].innerHTML = null);

	return Object.assign(args[0],args[1])
	//console.log(test.exec(args[0].innerHTML).index)
	//console.log(args[0].innerHTML)
}

export default class Edit extends Panel {

	constructor(data){

		return super(assign(data,{
			type:`view`,
			id:'edit-view',
			className:'slide',
			appendHTML:`
				<column class="col-md-24">

					<h2 style="background:rgba(25,25,25,0.25);">${data.title}</h2>
					<type>${data.type()}</type>
					<description>${data.description()}</description>
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
