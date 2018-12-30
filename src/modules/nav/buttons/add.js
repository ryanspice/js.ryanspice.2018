import Icon from "../icon";

export default class Add extends Icon {
	constructor() {
		return super({
			renderTo: '#scroll',
			id: 'plus',
			onclick: () => {
				this.log.debug('Add.onclick()');
			}
		})
	}
}
