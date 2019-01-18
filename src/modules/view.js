//@flow

import ServiceSession from "../service.session";
import loglevel from "loglevel";

import {controller} from "../require";

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

		log.debug = e => log.warn(`%c${e}`, ' color: #bada55;');
		//log.debug = e => console.trace(e,{});

		log.debug(`View(${ref.constructor.name})`)

		if(ref.beforeMount){

			ref.beforeMount();

		}

		return super(Object.assign(ref,{
				controller:controller,
				session:session,
				assign:assign,
				log:log
			}))

	}

	click(){

	}

}
