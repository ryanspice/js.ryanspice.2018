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

window.session = session;

window.sessionUpdateData = news => window.session.updateSessionData(news);

export default class View extends ATRender.view {

	assign = (...args) => {
		log.debug('View.assign() assign that i want to remove');
		let h = args[1].innerHTML;
		if (args[1].appendHTML)
			this.appendHTML = args[1].appendHTML;

		let test = new RegExp(/<template>(.*?)<\/template>/g);
		let test1 = test.exec(args[0].innerHTML);

		args[0].innerHTML = args[0].innerHTML.splice(test1.index+10,0,args[1].appendHTML);

		return Object.assign(args[0],args[1]);
	}

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
