
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

		console.log('update')
		evt.value.children[0].children[0].innerText = this.title;
		evt.value.children[0].children[3].innerText = this.type;
		evt.value.children[0].children[4].innerText = this.description;

	}

	constructor(ref?:HTML5Element){

		super(ref);

		window.get = (news = true)=>{

			let saveData = ``;

			let item = {'action':()=>{}, 'type':'map','title':'example'};
			let saved = this.session.get('saved') || [item];

			let save = [item, ...saved];

			let a = async ()=>{

				if (news)
					this.session.set('saved', save);

					for(let i = saved.length-1; i>=0; i--){

						let obj = 	{
							type:`span`,
							renderTo:'#scroll',
							style:`margin:10px;max-width:116px;height:96px;display:inline-block;`,
							innerHTML:`<i class="menu" data-feather="map" style="margin:0px;margin-top:10px;width:100%;text-align:center;"></i><br/><h6 style="width:100%;text-align:center;	">r o o m ${window.room.count++}</h6>	`,
							onclick:(evt)=>{
								//console.log('eh')
								evt.stopPropagation();
								controller.goTo('edit',true);

							}
						};

						await template.createTemplateItem({id:2500, value:obj});
						await template.check({id:2500, value:obj});

					}


				await window.icons.replace();

			}

			return a();
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
							<a class="btn btn-primary" onclick="window.controller.goTo('engine');sessionUpdateData();">Create</a>
							<br/>
							<a class="btn btn-default" onclick="window.controller.goTo('engine');" style="color:white; background:#920c00;">Cancel</a>
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
