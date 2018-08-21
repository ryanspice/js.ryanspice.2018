//@flow

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

import Hamburger from "../modules/nav/hamburger";
import PrimaryColumn from "../modules/nav/primary-column";
import SecondaryColumn from "../modules/nav/secondary-column";

import Engine from "../modules/engine"

import template_home from "../modules/project/home";
import template_search from "../modules/nav/search.js";
import template_searchInput from "../modules/nav/search-input.js";

import {
	Info,
	DefaultSettings
} from "../modules/settings/settings";

class Controller {

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

		new SecondaryColumn(this),

		new Hamburger(this),
		new Engine(this),
		new Documentation(this),
		new Settings(this),
		new Info(this),
		new DefaultSettings(this),
		new New(this),
		new Load(this),
		new Save(this),

		template_home,

		...SecondaryColumn.Controls,

		template_search,
		template_searchInput
	]

	clearColumn = ()=>{

		if (!this._column)
			this._column = document.querySelectorAll('#secondary-column')[0];

		this._column.classList.remove("expand");

	}

	each = (f)=>{

		this.data = Array.from(document.querySelectorAll('view'));

		let data = this.data;

		loop([data],elm=>{
			f(elm);
		});
	}

	goTo = (str, noRemove, activity) => {

		controller.each(e=>{

			if (e.value.id==str+'-view') {

				e.value.classList.remove('slide');
				activity?activity(e):null;

			}	else {

				noRemove?null:e.value.classList.add('slide');

			}
		});

	}

}

const controller = new Controller();
window.controller = controller;

/* */

export default new Array([

	/*

		{
			type:`style`,
			value:css
		},

		{
			type:`hero`,
			//renderTo:`#primary-view`,
			id:`page-home`,
			style:`background:transparent;`,
			innerHTML:`<div style="background-position:0 100%;width:100%;" >

			</div>`
		},

		{
			type:`ribbon`,
			renderTo:`#primary-view`,
			style:``,
			innerHTML:`<h3">SpiceJS 0.9.0</h3>`
		},

		{
			type:`section`,
			renderTo:`#primary-view`,
			id:`page-engine`,
			style:`margin: 0px 70px;`,
			innerHTML:`

				<iframe>test</iframe>

			`
		},

	*/

	...controller.views
]);
