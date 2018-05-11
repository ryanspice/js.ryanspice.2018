//const css = require('./style.scss');//.toString();

//var css = require("style-loader??css-loader??./style.scss");
//var css = require("./style.js");

import {default as loop} from '../render/loop';
//console.log(css);

import {default as css} from "./style.js";

const switchView = (str,str2)=>{

	document.getElementById(str).classList.toggle('hidden');
	document.getElementById(str2).classList.toggle('hidden');

};

const toggleExpand = (evt)=>{

	let data = Array.from(document.querySelectorAll('.highlight'));
	let column = document.querySelectorAll('#secondary-column')[0];
	let view = document.querySelectorAll('view')[0];

	loop([data],elm=>{
		console.log(elm.value.className = "");
	});

	if (evt){

		evt.toElement.className = "highlight";
		column.classList.toggle("expand");

	}

};


class Controller {

	_column;

	views:Array<any> = [
		{
			link:this,
			type:`view`,
			id:'primary-view',
			style:`background:transparent;`,
			onclick:()=>{
				controller.clearColumn();
				//controller.each(e=>e.value.classList.add('hidden'));
			},
			value:`123wds`
		},

		{
			link:this,
			type:`view`,
			id:'secondary-view',
			className:'hidden',
			style:`background:transparent;`,
			innerHTML:`<iframe src="https://ryanspice.com/mapper/Map/vendor/index.html"></iframe>`

		},
		{
			link:this,
			type:`view`,
			id:'tertiary-view',
			className:'hidden',
			style:`background:transparent;`,
			innerHTML:`<iframe sandbox src="http://js.ryanspice.com/"></iframe>`

		},
		{
			link:this,
			type:`view`,
			id:'settings-view',
			className:'hidden',
			style:`background:transparent;`,
			innerHTML:`settings`

		}
	]

	clearColumn = ()=>{

		if (!this._column)
			this._column = document.querySelectorAll('#secondary-column')[0];

		this._column.classList.remove("expand");

	}

	each = (f)=>{

		let data = Array.from(document.querySelectorAll('view'));

		loop([data],elm=>{
			f(elm);
		});
	}

	goTo = (str) => {

		controller.each(e=>{
			console.log(e.value.id==str+'-view')
			if (e.value.id==str+'-view')
			e.value.classList.remove('hidden');
			else
			e.value.classList.add('hidden');

		});
		//document.getElementById(str+'-view').classList.remove('hidden');
		//console.log()
		/*
		controller.each(e=>e.id=="#settings-view"?e.classList.add('show'):e.classList.add('hidden'));
		*/
		/*
		let data = Array.from(document.querySelectorAll('#'+str+'-view'));
		loop([data],elm=>{
			elm.value.classList.toggle('hidden');
		});
		*/

	}

}

const controller = new Controller();

export default new Array([

	{
		type:`style`,
		value:css
	},
	...controller.views,


	{
		type:`breadcrumbs`,
		renderTo:`#primary-view`,
		style:`background:transparent;display:none`,
		innerHTML:`<ul class="breadcrumb">
  <li><a href="#">Home</a></li>
  <li><a href="#">Pictures</a></li>
  <li><a href="#">Summer 15</a></li>
  <li>Italy</li>
</ul>`
	},

	{
		type:`hero`,
		renderTo:`#primary-view`,
		id:`page-home`,
		style:`background:transparent;`,
		innerHTML:`<img src="" />`
	},

	{
		type:`section`,
		renderTo:`#primary-view`,
		id:`page-home`,
		style:`background:transparent;`,
		innerHTML:`<h2>SpiceJS 0.9.0</h2>`
	},

	{
		type:`section`,
		renderTo:`#primary-view`,
		id:`page-home-test`,
		style:``,
		innerHTML:`<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. </p>

<p>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. <i>Lorem ipsum dolor sit amet, consectetur adipiscing elit</i>. Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. <b>Vestibulum lacinia arcu eget nulla</b>. Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. <i>Lorem ipsum dolor sit amet, consectetur adipiscing elit</i>. Fusce ac turpis quis ligula lacinia aliquet. Mauris ipsum. </p>

<p><b>Aenean quam</b>. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh. Quisque volutpat condimentum velit. <b>Sed dignissim lacinia nunc</b>. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam nec ante. <b>Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa</b>. Sed lacinia, urna non tincidunt mattis, tortor neque adipiscing diam, a cursus ipsum ante quis turpis. Nulla facilisi. Ut fringilla. Suspendisse potenti. Nunc feugiat mi a tellus consequat imperdiet. Vestibulum sapien. Proin quam. </p>

<p>Etiam ultrices. Suspendisse in justo eu magna luctus suscipit. Sed lectus. Integer euismod lacus luctus magna. Quisque cursus, metus vitae pharetra auctor, sem massa mattis sem, at interdum magna augue eget diam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Morbi lacinia molestie dui. Praesent blandit dolor. <b>Etiam ultrices</b>. Sed non quam. In vel mi sit amet augue congue elementum. Morbi in ipsum sit amet pede facilisis laoreet. Donec lacus nunc, viverra nec, blandit vel, egestas et, augue. Vestibulum tincidunt malesuada tellus. </p>

<p>Ut ultrices ultrices enim. <b>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Morbi lacinia molestie dui</b>. Curabitur sit amet mauris. Morbi in dui quis est pulvinar ullamcorper. Nulla facilisi. Integer lacinia sollicitudin massa. <i>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos</i>. Cras metus. Sed aliquet risus a tortor. Integer id quam. Morbi mi. Quisque nisl felis, venenatis tristique, dignissim in, ultrices sit amet, augue. Proin sodales libero eget ante. Nulla quam. Aenean laoreet. <i>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Morbi lacinia molestie dui</i>. Vestibulum nisi lectus, commodo ac, facilisis ac, ultricies eu, pede. </p>

`
	},

	{
		type:`section`,
		renderTo:`#primary-view`,
		id:`page-home`,
		style:`background:transparent;`,
		innerHTML:`<h5>Hello World</h5>`
	},

	{
		type:`section`,
		renderTo:`#primary-view`,
		id:`page-home-test`,
		style:``,
		innerHTML:`<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. </p>

<p>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. <i>Lorem ipsum dolor sit amet, consectetur adipiscing elit</i>. Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. <b>Vestibulum lacinia arcu eget nulla</b>. Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. <i>Lorem ipsum dolor sit amet, consectetur adipiscing elit</i>. Fusce ac turpis quis ligula lacinia aliquet. Mauris ipsum. </p>

<p><b>Aenean quam</b>. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh. Quisque volutpat condimentum velit. <b>Sed dignissim lacinia nunc</b>. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam nec ante. <b>Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa</b>. Sed lacinia, urna non tincidunt mattis, tortor neque adipiscing diam, a cursus ipsum ante quis turpis. Nulla facilisi. Ut fringilla. Suspendisse potenti. Nunc feugiat mi a tellus consequat imperdiet. Vestibulum sapien. Proin quam. </p>

<p>Etiam ultrices. Suspendisse in justo eu magna luctus suscipit. Sed lectus. Integer euismod lacus luctus magna. Quisque cursus, metus vitae pharetra auctor, sem massa mattis sem, at interdum magna augue eget diam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Morbi lacinia molestie dui. Praesent blandit dolor. <b>Etiam ultrices</b>. Sed non quam. In vel mi sit amet augue congue elementum. Morbi in ipsum sit amet pede facilisis laoreet. Donec lacus nunc, viverra nec, blandit vel, egestas et, augue. Vestibulum tincidunt malesuada tellus. </p>

<p>Ut ultrices ultrices enim. <b>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Morbi lacinia molestie dui</b>. Curabitur sit amet mauris. Morbi in dui quis est pulvinar ullamcorper. Nulla facilisi. Integer lacinia sollicitudin massa. <i>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos</i>. Cras metus. Sed aliquet risus a tortor. Integer id quam. Morbi mi. Quisque nisl felis, venenatis tristique, dignissim in, ultrices sit amet, augue. Proin sodales libero eget ante. Nulla quam. Aenean laoreet. <i>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Morbi lacinia molestie dui</i>. Vestibulum nisi lectus, commodo ac, facilisis ac, ultricies eu, pede. </p>

`
	},

	//Columns

	{
		type:`aside`,
		id:'primary-column',
		className:`noselect hidden`,
		style:``,
		value:`123wds`
	},
	{
		type:`aside`,
		id:'secondary-column',
		className:`noselect`,
		style:`font-size:2rem`,
		value:`123wds`,
		onclick:toggleExpand
	},
	{
		type:`span`,
		id:`hamburger`,
		renderTo:'#secondary-column',
		className:``,
		style:`text-align:center;line-height:64px;color:white;`,
		value:`32`,
		innerHTML:`<i class="menu" data-feather="menu"></i>`
	},

	{
		type:`span`,
		style:`max-width:48px`,
		renderTo:'#secondary-column',
		innerHTML:`<i class="menu" data-feather="map"></i><input class="hidden"></input>`,
		onclick:(evt)=>{

			evt.stopPropagation();
			//toggleExpand(evt);
			controller.goTo('primary')

		}
	},

	{
		type:`span`,
		renderTo:'#secondary-column',
		className:`hidden`,
		innerHTML:`<i class="menu" data-feather="layers"></i>`
	},

	{
		type:`span`,
		renderTo:'#secondary-column',
		style:`background:black;overflow:hidden;max-height:48px;`,
		innerHTML:`<i class="menu" data-feather="layers"></i>
			<h5 onclick="event.stopPropagation()" >ROOM</h5>
			<h5 onclick="event.stopPropagation()" >OBJECT</h5>
			<h5 onclick="event.stopPropagation()" >TILE</h5>
			<h5 onclick="event.stopPropagation()" >BACKGROUND</h5>
			`
	},

	{
		type:`span`,
		id:`scroll`,
		style:``,
		renderTo:'#secondary-column',
		innerHTML:`
			<span style=""><i class="menu" data-feather="file"></i>
				<h5 onclick="event.stopPropagation()" >ROOM</h5></span>

			`
	},

	{
		type:`span`,
		renderTo:'#scroll',
		innerHTML:`<i class="menu" data-feather="file"></i>`,
		//onclick:`console.log('eh')`
	},


	{
		type:`span`,
		renderTo:'#secondary-column',
		style:`position:absolute;bottom:96px;max-width:48px;`,
		innerHTML:`<i class="menu" data-feather="book"></i>`,
		onclick:(evt)=>{

	if (evt)
			evt.stopPropagation();
			//toggleExpand(evt);
			controller.goTo('tertiary')

		}
	},
	{
		type:`span`,
		renderTo:'#secondary-column',
		class:``,
		style:`position:absolute;bottom:48px;max-width:48px;`,
		innerHTML:`<i class="menu" data-feather="play"></i>`,
		onclick:(evt)=>{
			if (evt)
			evt.stopPropagation();
			controller.goTo('secondary')
			//toggleExpand(evt);

		}
	},

	{
		type:`span`,
		renderTo:'#secondary-column',
		class:``,
		style:`position:absolute;bottom:0em;max-width:48px;`,
		innerHTML:`<i class="menu" data-feather="settings"></i>`,
		onclick:(evt)=>{
			if (evt)
			evt.stopPropagation();
			controller.goTo('settings')
		}
	},

	{
		type:`search`,
		style:`font-size:2rem`,
		value:`123wds`
	},
	{
		type:`input`,
		renderTo:`search`,
		style:`font-size:2rem`,
		value:`123wds`
	}
]);
