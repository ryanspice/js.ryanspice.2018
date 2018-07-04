//@flow

import {default as loop} from '../../node_modules/async.2018/src/core/def/loop';

const cleanClass = (elm) => {

	elm.value.className = "";

};

const switchView = (str,str2)=>{

	document.getElementById(str).classList.toggle('hidden');
	document.getElementById(str2).classList.toggle('hidden');

};

const toggleExpand = (evt)=>{

	let data = Array.from(document.querySelectorAll('.highlight'));
	let column = document.querySelectorAll('#secondary-column')[0];
	let view = document.querySelectorAll('view')[0];

	loop([data],cleanClass);

	if (evt){

		evt.toElement.className = "highlight";
		column.classList.toggle("expand");

	}

};

export {

	switchView,
	toggleExpand

}
