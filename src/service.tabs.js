
import Schema from "./templates/";
window.Schema = Schema;

export class ServiceSession {

	store = window.localStorage;
	session = window.sessionStorage;


}

export default class ServiceTabs extends ServiceSession {

	constructor(){

		super()

		let name = 'state';
		let data = this.store.getObject(name)||{};

		this.session.setObject(name,data);

		return this;

	}

	new(){



	}

}
