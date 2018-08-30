
import View from "../view";

import ServiceSession from "../../service.session";
export default class New extends View {

	static title='New';
	title='create a new Chateau';
	type='project';
	description='a project file';
	static type=' ';

	static get title(){

		return this._title||'';
	}

	static set title(val){

		//evt.value.children[1].children[0].innerText = this._title = val;
	}

	type = '';

	/*
	static update(e){

		//e.value.children[1].children[0].innerHtml = 'eh';
		//e.value.children[1].children[0].innerHTML = 'eh';
		e.value.children[1].children[0].innerText = 'eh';

		return true;

	}
*/
	update = (evt)=>{

		console.log('eh')
		evt.value.children[0].children[0].innerText = this.title;
		evt.value.children[0].children[3].innerText = this.type;
		evt.value.children[0].children[4].innerText = this.description;


	}

	constructor(ref?:HTML5Element){

		super(ref);

		window.get = ()=>{

			let session = new ServiceSession(false);
			let saved = session.get('saved');
			let saveData = ``;
					let save = [{'action':()=>{}, 'type':'map','title':'example'}, ...saved];
					console.log(save);

					let a = async ()=>{
						session.set('saved', save);
						let obj = 	{
							type:`span`,
							renderTo:'#scroll',
							style:`margin:10px;max-width:116px;height:96px;display:inline-block;`,
							innerHTML:`<i class="menu" data-feather="map" style="margin:0px;margin-top:10px;width:100%;text-align:center;"></i><br/><h6 style="width:100%;text-align:center;	">r o o m 000</h6>	`,
							onclick:(evt)=>{

								evt.stopPropagation();
								//controller.goTo('new')

							}
						};

						await template.createTemplateItem({id:2500, value:obj});
						await template.check({id:2500, value:obj});
						await window.icons.replace();

					}
					return a();

		};
		document.onkeydown = function(evt) {
	    evt = evt || window.event;
	    var isEscape = false;
	    if ("key" in evt) {
	        isEscape = (evt.key == "Escape" || evt.key == "Esc");
	    } else {
	        isEscape = (evt.keyCode == 27);
	    }
	    if (isEscape) {
	       window.controller.goTo('engine');
	    }
	};
		return {
			link:this,
			type:`view`,
			id:'new-view',
			style:`z-index: 201; position: absolute; background: black; margin: 0px; padding: 48px; width: 100%; height: 100%; max-width: 450px; border-right: 1px solid white; opacity: 1 !important;`,
			className:'slide',
			activity:this.update,
			innerHTML:`
				<column class="col-md-24">
					<h2  style="background:rgba(25,25,25,0.25);">${this.title}</h2>
					<br/>
					<p >${this.type}</p>
					<br/>
					<p >${this.description}</p>
					<br/>
	        <div class="form-group ">
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

						<div class="btn-group" >
							<a class="btn btn-primary" onclick="window.controller.goTo('engine');window.get();">Create</a>
							<br/>
							<a class="btn btn-default" onclick="window.controller.goTo('engine');-" style="color:white; background:#920c00;">Cancel</a>
						</div>
			        </div>
				</column>
			`,
			onclick:this.click
		}

	}

	click(evt){

		window.controller.goTo('settings');
				evt.stopPropagation();


	}

}
