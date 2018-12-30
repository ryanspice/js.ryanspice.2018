//@flow

require('./include/storage.stringify');

import {controller} from "./require";

import Schema from "./templates/";

import Log from './include/log';

export default class ServiceSession {

	store:Storage = window.localStorage;
	session:Storage = window.sessionStorage;

	log:Log = Log;
	schema:Schema = Schema;

	get state():Object {

		return this.get('state')||this.schema.state;
	}

	get settings():Object {

		return this.get('settings')||this.schema.settings;
	}

	get root():Object {

		return this.get('root')||this.schema.root;
	}

	get open():Object {

		return this.get('open')||this.schema.open;
	}

	get saved():Object {

		return this.get('saved')||this.schema.saved;
	}

	/*

		set session 'state' object to store

	*/

	constructor(clear:boolean = true){

		if (clear?this.session.clear():true){

			this.log.debug('ServiceSession.clear()');

			this.session.setObject('state',this.state);
			this.session.setObject('settings',this.settings);
			this.session.setObject('root',this.root);
			this.session.setObject('open',this.open);

			this.session.setObject('saved',this.saved);

			this.log.debug('ServiceSession()');
			this.log.trace('');

		}
		return this;
	}

	get(str){

		return this.session.getObject(str);
	}

	set(str,obj){

		return this.session.setObject(str,Object.assign(this.session.getObject(str) || {},obj));
	}

	sessionKey = 'saved';

	get sessionData(){
		return {'action':()=>{}, 'type':'map','title':'example'};
	};

	getIcon = (saved)=>{
		switch(saved.type){
			case 'object':
			return 'globe';
			default:
			return saved.type;
		}
	};

	sessionDataTemplate = (i, data) => {

		return {
			type:`span`,
			renderTo:'#scroll',
			style:`margin:10px;max-width:116px;height:96px;display:inline-block;`,
			innerHTML:`<i class="menu" data-feather="${this.getIcon(data[i])}" style="margin:0px;margin-top:10px;width:100%;text-align:center;"></i><br/><h6 style="width:100%;text-align:center;	">r o o m ${window.room.count++}</h6>	`,
			onclick:(evt)=>{
				//console.log('eh')
				evt.stopPropagation();
				controller.goTo(`${data[i].type}edit`,true,async (e) => {

					await e.value.activity(e,data[i]);

				});

			}
		};
	};

	updateSessionData = async function(news:boolean = true){

		let item = this.sessionData;

		let data = this.get(this.sessionKey) || item;

		let save = [...data];

		let iterate = async () => {

			if (news){
				Array.from(document.getElementById('scroll').children).splice(1).forEach(elm=>elm.remove())
				save = [item, ...data];//(item);

				await this.set(await this.sessionKey,await save);

				data = await this.get(this.sessionKey);

			}

			//TOOD: reset current ListItem

			let i = data.length-1;
			for(i; i>=0; i--){
				let id = new Date().getTime()*(100+i);
				const obj = this.sessionDataTemplate(i,data);
				await template.createTemplateItem({id:id, value:obj});
				await template.check({id:id, value:obj});
			}

			await window.icons.replace();

		}

		return iterate();
	}

}
