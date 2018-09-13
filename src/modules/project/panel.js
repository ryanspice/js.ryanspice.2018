
import View from "../view";
import ServiceSession from "../../service.session";

String.prototype.splice = function(idx, rem, str) {
    return this.slice(0, idx) + str + this.slice(idx + Math.abs(rem));
};
let getIcon = (saved)=>{
	switch(saved.type){
		case 'object':
		return 'globe';
		default:
		return saved.type;
	}
}
export default class Panel extends View {

	title:string;
	type:string;
	description:string;

	buttons:any = {

		ok:'ok',
		cancel:'cancel'

	}

	update:Function;

	assign = (...args) => {
		console.log('assign that i want to remove');
		let h = args[1].innerHTML;
		if (args[1].appendHTML)
			this.appendHTML = args[1].appendHTML;

		let test = new RegExp(/<template>(.*?)<\/template>/g);
		let test1 = test.exec(args[0].innerHTML);

		args[0].innerHTML = args[0].innerHTML.splice(test1.index+10,0,args[1].appendHTML);

		return Object.assign(args[0],args[1]);
	}

	constructor(ref?:HTML5Element){

		super(ref);

		let data = ref;

		this.update = function(){

			console.log('PanelUpdate')

		}
		this.session = new ServiceSession(false);

		window.get = (news = true)=>{

			let saveData = ``;

			let item = {
				'action':()=>{}, 'type':'map','title':'example'
			};

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
							innerHTML:`<i class="menu" data-feather="${getIcon(saved[i])}" style="margin:0px;margin-top:10px;width:100%;text-align:center;"></i><br/><h6 style="width:100%;text-align:center;	">r o o m ${window.room.count++}</h6>	`,
							onclick:(evt)=>{
								//console.log('eh')
								evt.stopPropagation();
								controller.goTo(`${saved[i].type}edit`,true,async (e) => {

									await e.value.activity(e,saved[i]);

								});

							}
						};

						await template.createTemplateItem({id:2500, value:obj});
						await template.check({id:2500, value:obj});

					}


				await window.icons.replace();

			}

			return a();
		};
		console.log(data);
		console.log('eh');
		return this.assign({
			link:this,
			type:`view`,
			id:'panel-view',
			style:`overflow-y: scroll;z-index: 201; position: absolute; background: black; margin-top: 0px; margin-left:0px; padding: 48px; width: 100%; height: 100%; max-width: 450px; border-right: 1px solid white; opacity: 1 !important;`,
			className:'slide',
			activity:this.update,
			innerHTML:`
				<column class="col-md-24">
					<template></template>
					<div class="btn-group" >
						<a id="accept" class="btn btn-primary" onclick="window.controller.goTo('engine');window.get();">${data.buttons.ok}</a>
						<br/>
						<a id="cancel" class="btn btn-default" onclick="window.controller.goTo('engine');" style="color:white; background:#920c00;">${data.buttons.cancel}</a>
					</div>
				</column>
			`,
			onclick:this.click
		}, data)

	}

	click(evt){

		window.controller.goTo('settings');
				evt.stopPropagation();


	}

}
