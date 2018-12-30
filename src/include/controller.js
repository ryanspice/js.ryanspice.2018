import {default as css} from "./style.js";

//import {default as loop} from '../../node_modules/async.2018/src/core/def/loop';

import {

	switchView, toggleExpand,
	_loop
} from "./util";


export default class Controller {

	_column;

	clearColumn = ()=>{

		if (!this._column)
			this._column = document.getElementsByClassName('#toolbar-column')[0];

		this._column.classList.remove("expand");

	}

	each = (f)=>{

		this.data = Array.from(document.querySelectorAll('view'));

		//let data = this.data;

		_loop([this.data],elm=>{
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
