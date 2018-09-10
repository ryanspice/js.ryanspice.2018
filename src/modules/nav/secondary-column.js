
import View from "../view";
import Add from "./add";

import {

	toggleExpand

} from "../../include/util";

import dummy from './dummy';


let live = [
	...dummy
];

export default class SecondaryColumn extends View {

	static Controls:Array<any> = [
			{
				type:`span`,
				renderTo:'#secondary-column',
				style:`display:;background:rgba(25, 25, 25, 1);overflow:hidden;max-height:48px;`,
				innerHTML:`<i class="menu" data-feather="layers"></i>
					<h5 onclick="event.stopPropagation()" ><u>ROOM</u></h5>
					<h5 onclick="event.stopPropagation()" >OBJECT</h5>
					<h5 onclick="event.stopPropagation()" >TILE</h5>
					<h5 onclick="event.stopPropagation()" >BACKGROUND</h5>
					`
			},

			{
				type:`span`,
				id:`scroll`,
				style:`display:;`,
				renderTo:'#secondary-column',
				innerHTML:`	`
			},

			new Add({}),

			/*BOTTOM */
			{
				type:`span`,
				renderTo:'#secondary-column',
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
				renderTo:'#secondary-column',
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
			id:'secondary-column',
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
