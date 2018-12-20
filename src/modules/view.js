//@flow

import ServiceSession from "../service.session";
import loglevel from "loglevel";

let getIcon = (saved)=>{
	switch(saved.type){
		case 'object':
		return 'globe';
		default:
		return saved.type;
	}
}
const session = new ServiceSession(false);
const assign = ATRender.view.prototype.assign;
const log = loglevel;

window.sessionUpdateData = (news = true)=>{
	console.trace('eh')
	console.log(this);
	let saveData = ``;

	let item = {
		'action':()=>{}, 'type':'map','title':'example'
	};

	let saved = session.get('saved') || [item];

	let save = [item, ...saved];

	let a = async ()=>{

		if (news)
			session.set('saved', save);

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

window.session = session;

export default class View extends ATRender.view {

	constructor(ref) {
		return super(Object.assign(ref,{
				session:session,
				assign:assign,
				log:log
			}))

	}

	click(){

	}

}
