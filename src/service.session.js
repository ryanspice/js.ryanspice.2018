//@flow

import Schema from "./templates/";

export default class ServiceSession {

	store:LocalStorage = window.localStorage;
	session:SessionStorage = window.sessionStorage;
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

	/*

		set session 'state' object to store

	*/

	constructor(){

		this.session.setObject('state',this.state);
		this.session.setObject('settings',this.settings);
		this.session.setObject('root',this.root);
		this.session.setObject('open',this.open);

		//console.log(this);

		return this;
	}

	get(str){

		return this.session.getObject(str);
	}

	set(str,obj){

		return this.session.setObject(str,Object.assign(this.session.getObject(str),obj));
	}

}
