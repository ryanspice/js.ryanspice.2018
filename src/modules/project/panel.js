
import View from "../view";
import ServiceSession from "../../service.session";

String.prototype.splice = function(idx, rem, str) {
    return this.slice(0, idx) + str + this.slice(idx + Math.abs(rem));
};

export default class Panel extends View {

	title:string;
	type:string;
	description:string;

	update:Function;

	assign = (...args) => {

		let h = args[1].innerHTML;
		if (args[1].appendHTML)
			this.appendHTML = args[1].appendHTML;


		let test = new RegExp(/<template>(.*?)<\/template>/g);
		let test1 = test.exec(args[0].innerHTML);
		console.log(test1.index)
		console.log(args[1]);
		console.log(args[0]);
		console.log(args[0].innerHTML = args[0].innerHTML.splice(test1.index+10,0,args[1].appendHTML));
		//console.log(args[1].innerHTML = null);

		return Object.assign(args[0],args[1])
		//console.log(test.exec(args[0].innerHTML).index)
		//console.log(args[0].innerHTML)
	}

	constructor(ref?:HTML5Element){

		super(ref);

		let data = ref;

		this.update = function(){

			console.log('eh')

		}
		this.session = new ServiceSession(false);

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
								controller.goTo('edit',true,async (e) => {

									console.log(saved[i],e )
									console.log('1')
									await e.value.activity(e,saved[i]);
									console.log('2')

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

		return this.assign({
			link:this,
			type:`view`,
			id:'panel-view',
			style:`    overflow-y: scroll;z-index: 201; position: absolute; background: black; margin-top: 0px; margin-left:0px; padding: 48px; width: 100%; height: 100%; max-width: 450px; border-right: 1px solid white; opacity: 1 !important;`,
			className:'slide',
			activity:this.update,
			innerHTML:`
				<column class="col-md-24">
					<template></template>
					<div class="btn-group" >
						<a id="accept" class="btn btn-primary" onclick="window.controller.goTo('engine');window.get();">Create</a>
						<br/>
						<a id="cancel" class="btn btn-default" onclick="window.controller.goTo('engine');" style="color:white; background:#920c00;">Cancel</a>
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
