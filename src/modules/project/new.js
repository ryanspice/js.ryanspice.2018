
if (!window.room)
window.room={count:0};

import View from "../view";

import ServiceSession from "../../service.session";

export default class New extends View {

	static title='New';
	static type=' ';

	title='create a new Chateau';
	type='project';
	description='a project file';

	update = (evt)=>{

		console.log('update',evt)
		evt.value.children[0].children[0].innerText = this.title;
		evt.value.children[0].children[3].innerText = this.type;
		evt.value.children[0].children[4].innerText = this.description;
//		document.getElementById('scroll').innerHTML = `<span style="" id="plus"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus menu"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>	</span>`;
	}

	constructor(ref?:HTML5Element){

		super(ref);

		return {
			link:this,
			ref:ref,
			type:`view`,
			id:'new-view',
			style:``,
			className:'slide',
			activity:this.update,
			innerHTML:`
				<style>
					#new-view{z-index: 201; position: absolute; background: black; margin: 0px; padding: 48px; width: 100%; height: 100%; max-width: 450px; border-right: 1px solid white; opacity: 1 !important;}
					#new-view h2 {background:rgba(25,25,25,0.25);}
				</style>
				<column class="col-md-24">
					<h2  >${this.title}</h2>
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
							<a class="btn btn-primary"  onclick="(${this.onclick});">Create</a>
							<br/>
							<a class="btn btn-default" onclick="(${this.onclick});" style="color:white; background:#920c00;">Cancel</a>
						</div>
			        </div>
				</column>
			`,
			onclick:this.click
		}

	}

	click=(evt)=>{

		console.log(evt.target.className,this);

		switch(evt.target.innerText){

			case 'Create':
				this.session.updateSessionData();
				this.controller.goTo(this.session.get('view_previous')||'engine');
			break;
			case 'Cancel':

				this.controller.goTo(this.session.get('view_previous')||'engine');
			break;

		}

		evt.stopPropagation();

	}

}
