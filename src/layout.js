//@flow

import {

	switchView, toggleExpand,
	_loop
} from "./include/util";

//import Home from "../modules/Home/Home";
import Documentation from "./modules/documentation/documentation";
import New from "./modules/project/new";
import Load from "./modules/project/load";
import Save from "./modules/project/save";
import Edit from "./modules/project/edit";

import PrimaryColumn from "./modules/nav/primary-column";
import PrimaryView from "./modules/nav/primary-view";
import ToolColumn from "./modules/nav/toolbar-column";

import Engine from "./modules/engine"

import template_home from "./modules/project/home";
import template_search from "./modules/nav/search.js";
import template_searchInput from "./modules/nav/search-input.js";

//import Settings from "./modules/settings/settings";

export default class layout {

		views:Array<any> = [

			/* App Components */

			new PrimaryView(this),
			new ToolColumn(this),

			/* Tool Components */

			...ToolColumn.Controls,

			/* Views */

			new Engine(this),
			new Documentation(this),


			/* Flyout Views */

			new New(this),

			/*
			new New({
				title:'map',
				type:'type',
				description:'description',
				buttons:{ok:'Save Map', cancel:'Cancel'}
			}),
			*/

			/* Flyout (Inherited) Views */
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
			template_search,
			template_searchInput
		]

}
