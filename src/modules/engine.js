
export default class Engine {


	constructor(){


		return {
			link:this,
			type:`view`,
			id:'engine-view',
			className:'',
			style:`background:transparent;`,
			innerHTML:`
			<canvas id="canvas_0"></canvas>
			<canvas id="buffer_0"></canvas>
			<canvas id="blitter_0"></canvas>`
		}

	}

}
