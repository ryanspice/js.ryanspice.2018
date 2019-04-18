//@flow

import Icon from "../icon";

export default class Add extends Icon {

	constructor() {

		return super({
			renderTo: '#scroll',
			id: 'plus',
			onclick: (evt) => {

				this.controller.navigate('new',true, (e:any)=>{

					this.log.debug(`Controller.goTo(${evt})`, 'background: #222; color: #bada55');

				});

				this.log.debug(`Add.onclick(${evt})`, 'background: #222; color: #bada55');

				evt.stopPropagation();

			}

		});
	}

}
