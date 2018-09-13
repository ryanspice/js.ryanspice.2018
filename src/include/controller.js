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
import PrimaryView from "../modules/nav/primary-view";
import ToolColumn from "../modules/nav/toolbar-column";

import Engine from "../modules/engine"

import template_home from "../modules/project/home";
import template_search from "../modules/nav/search.js";
import template_searchInput from "../modules/nav/search-input.js";

import {
	Info,
	DefaultSettings
} from "../modules/settings/settings";

export default class Controller {

	_column;

	views:Array<any> = [

		/* App Components */
		new PrimaryView(this),
		new ToolColumn(this),

		/* Tool Components */
		new Hamburger(this),

		/* Views */
		new Engine(this),
		new Documentation(this),
		new Settings(this),
		new Info(this),
		new DefaultSettings(this),

		/* Flyout Views */
		new New(this),
		new New({
			title:'map',
			type:'type',
			description:'description',
			buttons:{ok:'Save Map', cancel:'Cancel'}
		}),
		new Load(this),
		new Save(this),
		new Edit({
			title:'map',
			type:'type',
			description:'description',
			buttons:{ok:'Save Map', cancel:'Cancel'}
		}),
		new Edit({
			title:'object',
			type:'type',
			description:'description',
			buttons:{ok:'Save Object', cancel:'Cancel'}
		}),

		/* unused */
		template_home,

		...ToolColumn.Controls,

		template_search,
		template_searchInput
	]

	clearColumn = ()=>{

		if (!this._column)
			this._column = document.getElementsByClassName('#toolbar-column')[0];

		this._column.classList.remove("expand");

	}

	each = (f)=>{

		this.data = Array.from(document.querySelectorAll('view'));

		//let data = this.data;

		loop([this.data],elm=>{
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
