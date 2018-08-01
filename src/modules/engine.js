
export default class Engine {


	constructor(){


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
