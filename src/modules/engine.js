
import ServiceTabs from "../service.tabs";

export default class Engine {

	tabs:ServiceTabs = new ServiceTabs();

	constructor(){

		window.tabs = this.tabs;

		return {
			link:this,
			type:`view`,
			id:'engine-view',
			className:'slide',
			style:`background:transparent;`,
			innerHTML:`<iframe src="https://ryanspice.com/mapper/Map/vendor/index.html"></iframe>`
		}

	}

}
