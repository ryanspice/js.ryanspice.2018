//@flow

require('./include/storage.stringify');

import Schema from "./templates/";

import Log from 'loglevel';

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

		return this.session.setObject(str,Object.assign(this.session.getObject(str),obj));
	}

}
