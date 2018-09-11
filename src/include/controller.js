import {default as css} from "./style.js";

import {default as loop} from '../../node_modules/async.2018/src/core/def/loop';

import {

	switchView, toggleExpand

} from "./util";

//import Home from "../modules/Home/Home";
import Documentation from "../modules/documentation/documentation";
import Settings from "../modules/settings/settings";
import New from "../modules/project/new";
import Load from "../modules/project/load";
import Save from "../modules/project/save";
import Edit from "../modules/project/edit";

import Hamburger from "../modules/nav/hamburger";
import PrimaryColumn from "../modules/nav/primary-column";
import ToolColumn from "../modules/nav/toolbar-column";

import Engine from "../modules/engine"

import template_home from "../modules/project/home";
import template_search from "../modules/nav/search.js";
import template_searchInput from "../modules/nav/search-input.js";
function insertAfter(newNode, referenceNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

import {
	Info,
	DefaultSettings
} from "../modules/settings/settings";

export default class Controller {

	_column;

	views:Array<any> = [

		{
			link:this,
			type:`view`,
			id:'primary-view',
			className:'slide',

			style:``,
			onclick:()=>{

				controller.clearColumn();



					let data = Array.from(document.querySelectorAll('.highlight'));
						loop([data],elm=>{
							//console.log(
								elm.value.className = "";
							//);
						});




					let data2 = Array.from(document.querySelectorAll('view'));
						loop([data2],elm=>{

								if (elm.value.className!=="slide" && elm.value.id!=='primary-view')
									elm.value.className = "slide";


						});


				//controller.each(e=>e.value.classList.add('hidden'));
			},
			value:`123wds`
		},

		new ToolColumn(this),

		new Hamburger(this),
		new Engine(this),
		new Documentation(this),
		new Settings(this),
		new Info(this),
		new DefaultSettings(this),
		new New(this),
		new Load(this),
		new Save(this),
		new Edit({
			title:'map',
			type:'type',
			description:'description',
			activity:(e,data)=>{

				let nodeParent = e.value.children[0];
				let nodeA = nodeParent.children[0];

				nodeA.content.querySelector('type').innerHTML = data['type'];
				nodeA.content.querySelector('description').innerHTML = data['description'];
				nodeA.content.querySelector('textarea').value = data['data'] || `{

}`;
				nodeA.content.querySelector('h2').innerHTML = data['title'];

				nodeParent.querySelectorAll('#accept').innerHTML = "OK";
				nodeParent.querySelectorAll('#cancel').innerHTML = "Close";

				if (e.value.children[0].children[2])
					e.value.children[0].children[1].remove();

				let nodeB;
				nodeB = document.importNode(nodeA.content,true);
				nodeB.querySelector('*');//.rdy = true;

				insertAfter(nodeB,nodeA);

			}
		}),
		new Edit({
			title:'object',
			type:'type',
			description:'description',
			activity:(e,data)=>{

				let nodeParent = e.value.children[0];
				let nodeA = nodeParent.children[0];

				nodeA.content.querySelector('type').innerHTML = data['type'];
				nodeA.content.querySelector('description').innerHTML = data['description'];
				nodeA.content.querySelector('textarea').value = data['data'] || `{

}`;
				nodeA.content.querySelector('h2').innerHTML = data['title'];

				nodeParent.querySelectorAll('#accept').innerHTML = "OK";
				nodeParent.querySelectorAll('#cancel').innerHTML = "Close";

				if (e.value.children[0].children[2])
					e.value.children[0].children[1].remove();

				let nodeB;
				nodeB = document.importNode(nodeA.content,true);
				nodeB.querySelector('*');//.rdy = true;

				insertAfter(nodeB,nodeA);

			}
		}),

		template_home,

		...ToolColumn.Controls,

		template_search,
		template_searchInput
	]

	clearColumn = ()=>{

		if (!this._column)
			this._column = document.querySelectorAll('#toolbar-column')[0];

		this._column.classList.remove("expand");

	}

	each = (f)=>{

		this.data = Array.from(document.querySelectorAll('view'));

		let data = this.data;

		loop([data],elm=>{
			f(elm);
		});
	}

	goTo = (str, noRemove, activity, activityOpen) => {

		controller.each(e=>{

			if (e.value.id==str+'-view') {

				e.value.classList.remove('slide');
				activity?activity(e):e.value.activity?e.value.activity(e):null;

			}	else {

				noRemove?null:e.value.classList.add('slide');

			}
		});

	}

}
