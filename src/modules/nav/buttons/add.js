//@flow

import Icon from "../icon";

import Types from "../../../templates/types.t.js";
export default class Add extends Icon {

	static types:Types = Types;

	constructor() {

		return super({
			renderTo: '#scroll',
			id: 'plus',
			onclick: (evt) => {

				this.controller.goTo('new',true, (e:any)=>{

					this.log.debug(`Controller.goTo(${evt})`, 'background: #222; color: #bada55');

				});

				this.log.debug(`Add.onclick(${evt})`, 'background: #222; color: #bada55');

			}

		});
	}

}
