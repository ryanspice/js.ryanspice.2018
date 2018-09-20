//@flow

import {default as loop} from '../../node_modules/async.2018/src/core/def/loop';

export function sleep(ms = 0) {
  return new Promise(r => setTimeout(r, ms));
}


String.prototype.splice = function(idx, rem, str) {
    return this.slice(0, idx) + str + this.slice(idx + Math.abs(rem));
};

const cleanClass = (elm) => {

	elm.value.className = "";

};

const switchView = (str,str2)=>{

	document.getElementById(str).classList.toggle('hidden');
	document.getElementById(str2).classList.toggle('hidden');

};

const toggleExpand = (evt)=>{

	let data = Array.from(document.querySelectorAll('.highlight'));
	let column = document.querySelectorAll('#toolbar-column')[0];
	let view = document.querySelectorAll('view')[0];

	loop([data],cleanClass);

	if (evt){

		evt.toElement.className = "highlight";
		column.classList.toggle("expand");

	}

};

let test = new RegExp(/<template>(.*?)<\/template>/g);

const assign = (...args) => {

	let h;
	if (args[1].appendHTML)
	h = args[1].innerHTML;

	if (!h)
		return Object.assign(args[0],args[1]);

	this.appendHTML =h;


	let test1 = test.exec(args[0].innerHTML);
	if (!test1)
		return Object.assign(args[0],args[1]);

	args[0].innerHTML = args[0].innerHTML.splice(test1.index+10,0,args[1].appendHTML);

	return Object.assign(args[0],args[1])
}

const insertAfter = function insertAfter(newNode, referenceNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

export {
	assign,
	switchView,
	insertAfter,
	toggleExpand

}
