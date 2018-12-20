//@flow
//@flow

/*
	self contained, loop
*/

let _data:__data = [];

let _loop_iterator: number;

let _length: number = 0;
let _iterator: number = 0;
let _iteratorId: number = 0;

let trace:number = 0;

/**/

let _action: Function = () => { };

/**/

const _dataMap: __dataMap = [];

/**/

class _template {
	id:number;
	value:Object;
	constructor(id:number, value:Object){
		this.id = id;
		this.value = value;
		return (this:__template);
	}
}

/**/

const _dataTemplate = async function(i:number, data:Object):__template {

	return await (_dataMap[i] = await new _template(i,data));
}

/**/

const _layer = async function():__layer {

	_iteratorId++;
	_data[_iterator] = await (_dataTemplate(_iterator, _data[_iterator]));

	return _data[_iterator];
}

/**/

const _loop = async function(data:Array<__data>,action:Function) {

	if (_data===null){

		_loop_iterator = _data.length = 0;

		for (_loop_iterator; _loop_iterator >= 0; _loop_iterator--){

			_data[_loop_iterator] = _dataTemplate(-1,{});

		}

	}

	_data = data[0];
	_length = _data.length || 0;
	_action = action;

	for(_iterator; _iterator<_length;_iterator++){

		await _action(await _layer());

	}

	_iterator = 0;

};
/*







*/



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

	_loop([data],cleanClass);

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
	toggleExpand,
	_loop
}
