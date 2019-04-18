
import View from "../view";

import File from "../../include/file";

class ListItem {

	$id;

	constructor(any){

		return {

			link:this,
			type:`view`,
			id:'data-async-a${this.$id++}',
			className:'slide',
			innerHtml: 	``

		}

	}

}
let templates:Object = {
		newListItem:(data)=>{
			return `<div class="entity-list entity-list-expandable" onclick="(${data.action})()">
				<div class="entity-list-item">
				<div class="item-icon" style="background:black;border:1px rgba(255,255,255,0.5)">
					<span ><i class="" data-feather="${data.type}"></i></span>
				</div>
				<div class="item-content-secondary">
				<div class="content-text-primary"></div>
				<div class="content-text-secondary"></div>
				<div class="content-text-secondary"></div>
				</div>
				<div class="item-content-primary">
				<div class="content-text-primary">Add new ${data.title}</div>
				<div class="content-text-secondary"></div>
				<div class="content-text-secondary"></div>
				<div class="progress hidden">
				<div class="progress-bar hidden" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 60%;">
				<span class="sr-only hidden">60%</span>
				</div>
				</div>
				</div>
				<div class="item-content-expanded">
				<button class="btn btn-default" disabled="disabled">Uninstall</button>
				<button class="btn btn-default">Move</button>
				</div>
				</div>
			</div>`
		},
		existingListItem:(data)=>{
			return `<div class="entity-list entity-list-expandable" onclick="(${data.action})()">
				<div class="entity-list-item">
				<div class="item-icon" style="background:black;border:1px rgba(255,255,255,0.5)">
					<span ><i class="" data-feather="${data.type}"></i></span>
				</div>
				<div class="item-content-secondary">
				<div class="content-text-primary">${data.size||'0.00'} MB</div>
				<div class="content-text-secondary" style="color:white;">25/08/2016</div>
				<div class="content-text-secondary"></div>
				</div>
				<div class="item-content-primary">
				<div class="content-text-primary">${data.title}</div>
				<div class="content-text-secondary"></div>
				<div class="progress hidden">
				<div class="progress-bar hidden" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 60%;">
				<span class="sr-only hidden">60%</span>
				</div>
				</div>
				</div>
				<div class="item-content-expanded">
				<button class="btn btn-default" disabled="disabled">Uninstall</button>
				<button class="btn btn-default">Move</button>
				</div>
				</div>
			</div>`
		},

	}

let data = {
	title:'project',
	type:'map'
}

export default class Load extends View {

	constructor(ref?:HTML5Element){

		let self = super(ref, data);

		let saved = this.session.get('saved');
		let saveData = ``;


		if (saved){

			let data = {
				title:'project',
				action:function(){

					this.controller.goTo('new',true);
				},
				actionLoad:function(){

					this.controller.goTo('engine');
				}

			}
			let savedList = [];
			for(let i =saved.length-1; i>=0; i--){
				saveData = `${saveData}${templates.existingListItem({'action':data.actionLoad, 'type':'map','title':'example'})}`;
			}
		}

		this.updateList = function(){

			let saved = this.session.get('saved');
			let savedList = [];

			let d = ` `;

			for(let i =saved.length-1; i>=0; i--){
				d = `${d}${templates.existingListItem({'action':function(){}, 'type':'map','title':'example'})}`;
			}

			document.getElementById('loaddata').innerHTML = d;

			try{
			window.icons.replace();
			}catch(e){}
		}

		return Object.assign(self,{
			link:this,
			type:`view`,
			id:'load-view',
			activity:this.update,
			activityOpen:this.update,
			className:'slide button-e',
			style:`
	      z-index: 200;
		    position: absolute;
		    background: black;
		    margin: 0px;
		    padding: 48px;
				width:100%;
				height:100%;
				max-width:450px;
				opacity:1 !important;
				//border-right:1px solid white;
				`,
			innerHTML:`
				<column class="col-md-24">

					<i style="opacity:0.8;position:relative;left:-18px;top:-18px;font-size:2rem;cursor:pointer;" onclick="con.goTo('engine')" class="menu" data-feather="arrow-left-circle"></i>
					<h2 >load project</h2>
					<button onclick="openFile(dispFile)" id="openFile" class="hidden"></button>
					<pre id="openFileContent"></pre>
					<br/>
					${(templates.newListItem({'type':'plus','title':data.title,'action':()=>{
						//document.getElementById('openFile').click();
						window.clickElem(document.getElementById('openFile'));
					}, ...data}))}
					<span id="loaddata">
					${saveData}
					</span>
				</column>
			`,
			onclick:this.click
		});

	}

	update = ()=>{

	}

	gotonew = ()=>{

		this.controller.goTo('new');

	}

	click(evt){

		evt.stopPropagation();
		this.controller.goTo('settings');

	}

}
