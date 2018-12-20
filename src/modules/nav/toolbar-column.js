//@flow

import {
	toggleExpand
} from "../../include/util";

import View from "../view";

import Add from "./add";
import Scroll from "./scroll";

export default class ToolColumn extends View {

	static Controls:Array<any> = [
			{
				type:`span`,
				renderTo:'#toolbar-column',
				style:`display:;background:rgba(25, 25, 25, 1);overflow:hidden;max-height:48px;`,
				innerHTML:`<i class="menu" data-feather="layers"></i>
					<h5 onclick="event.stopPropagation()" ><u>main.js</u></h5>
					<h5 style="display:none" onclick="event.stopPropagation()" ><u>ROOM</u></h5>
					<h5 style="display:none" onclick="event.stop
						Propagation()" >OBJECT</h5>
					<h5 style="display:none" onclick="event.stopPropagation()" >TILE</h5>
					<h5 style="display:none" onclick="event.stopPropagation()" >BACKGROUND</h5>
					`
			},
			new Scroll(),

			new Add({}),

			/*BOTTOM */
			{
				type:`span`,
				renderTo:'#toolbar-column',
				style:`background:rgba(25, 25, 25, 1);`,
				className:``,
				innerHTML:`<i class="menu" data-feather="play"></i><h3 style="margin-left:8.5rem;display:inline;line-height:3.25rem;	display:none;">p r e v i e w</h3>`,
				onclick:(evt)=>{
					if (evt)
					evt.stopPropagation();
					controller.goTo('engine')
					//toggleExpand(evt);

				}
			},

			{
				type:`span`,
				renderTo:'#toolbar-column',
				style:`background:rgba(25, 25, 25, 1);`,
				className:``,
				innerHTML:`<i class="menu" data-feather="settings"></i><h3 style="margin-left:8rem;display:inline;line-height:3.25rem;display:none;	">s e t t i n g s</h3>`,
				onclick:(evt)=>{
					if (evt)
					evt.stopPropagation();
					controller.goTo('settings')
				}
			}
	]

	constructor(ref?:HTML5Element){

		super(ref)

		return {
			type:`aside`,
			id:'toolbar-column',
			className:`noselect`,
			style:`font-size:2rem;z-index:1`,
			onclick:this.click,
			afterConstruct:this.afterConstruct
		}

	}

	click=(evt)=>{

		toggleExpand(evt);

	}

	afterConstruct=(evt)=>{


	}

}
