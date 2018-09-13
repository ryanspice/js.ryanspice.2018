//@flow

import {
	assign,
	insertAfter
} from "../../include/util";

import Panel from "./panel";

import ServiceSession from "../../service.session";

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
				</column>`,
				activity:(e,data)=>{

						let nodeParent = e.value.children[0];
						let nodeA = nodeParent.children[0];

						nodeA.content.querySelector('type').innerHTML = data['type'];
						nodeA.content.querySelector('description').innerHTML = data['description'];
						nodeA.content.querySelector('textarea').value = data['data'] || ``;
						nodeA.content.querySelector('h2').innerHTML = data['title'];

						//nodeParent.querySelectorAll('#accept').style.display = "none";
						nodeParent.querySelectorAll('#accept').innerHTML = "OK";
						nodeParent.querySelectorAll('#cancel').innerHTML = "Close";

						if (e.value.children[0].children[2])
							e.value.children[0].children[1].remove();

						let nodeB;
						nodeB = document.importNode(nodeA.content,true);
						nodeB.querySelector('*');//.rdy = true;

						insertAfter(nodeB,nodeA);

					}
				}
			)
		)
	}

	click(evt){

		window.controller.goTo('settings');
		evt.stopPropagation();

	}

}
