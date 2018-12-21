//@flow

import View from "../view";

export default class Layers extends View {
	constructor(){
		return super({
			type:`span`,
			renderTo:'#toolbar-column',
			style:`display:;background:rgba(25, 25, 25, 1);overflow:hidden;max-height:48px;`,
			innerHTML:`<i class="menu" data-feather="layers"></i>
			<!--
				<h5 onclick="event.stopPropagation()" style="display:none;"><u>main.js</u></h5>
				<h5 style="displas y:none" onclick="event.stopPropagation()" ><u>ROOM</u></h5>
				<h5 style="displas y:none" onclick="event.stop
					Propagation()" >OBJECT</h5>
				<h5 style="displas y:none" onclick="event.stopPropagation()" >TILE</h5>
				<h5 style="displas y:none" onclick="event.stopPropagation()" >BACKGROUND</h5>-->
				`
		});
	}
}
