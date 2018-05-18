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

import Settings from "../modules/settings/settings";
import {Info} from "../modules/settings/settings";

class Controller {

	_column;

	views:Array<any> = [
		{
			link:this,
			type:`view`,
			id:'primary-view',
			className:'slide',

			style:`background:transparent;`,
			onclick:()=>{
				controller.clearColumn();
					let data = Array.from(document.querySelectorAll('.highlight'));
						loop([data],elm=>{
							console.log(elm.value.className = "");
						});

				//controller.each(e=>e.value.classList.add('hidden'));
			},
			value:`123wds`
		},

		{
			link:this,
			type:`view`,
			id:'secondary-view',
			className:'slide',
			style:`background:transparent;`,
			innerHTML:`<iframe src="https://ryanspice.com/mapper/Map/vendor/index.html"></iframe>`

		},
		{
			link:this,
			type:`view`,
			id:'tertiary-view',
			className:'slide',
			style:`background:transparent;`,
			innerHTML:`<iframe sandbox src="http://js.ryanspice.com/"></iframe>`

		},
		new Settings(this),
		new Info(this)
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
			e.value.classList.remove('slide');
			else
			e.value.classList.add('slide');

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
window.controller = controller;
export default new Array([

	{
		type:`style`,
		value:css
	},
	...controller.views,

/*
	{
		type:`ribbon`,
		renderTo:`#primary-view`,
		style:``,
		innerHTML:`<h3>SpiceJS 0.9.0</h3>`
	},
*/

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
		innerHTML:`<div style="background-position:0 100%;width:100%;padding-left:64px;margin-right:-64px;" >
			<h2 style="width:264px;">SpiceEdit 0.1.0</h2>
			<h4 style="width:100px;position:relative;top:-48px;left:128px;">Preview</h4>
		</div>`
	},

	{
		type:`section`,
		renderTo:`#primary-view`,
		id:`page-home-test`,
		style:`margin: 0px 70px;`,
		innerHTML:`
			<div id="contentMiddle" style=" opacity: 10;">
				<h3><span class="pageTitle0" style="position: relative; opacity: 11;">getting started</span></h3>
            <div id="sideBar">
                <p class="sideBarNav"><a href="#">home</a></p>
                <p class="sideBarNav"><a href="#">documentation</a></p>
                <p class="sideBarNav"><a href="#">about</a> </p>
                <p class="sideBarNav"><a href="#">develop</a> </p>
                <p class="sideBarNav"><a href="#">publish</a> </p>
                <p class="sideBarNav"><a href="#">community</a> </p>
                <p class="sideBarNav"><a href="#">download</a></p>
            </div>

            <p>
			</p>
			<h3><span class="pageTitle0" style="position: relative; opacity: 11;">latest version</span></h3>

            <p><a href="https://github.com/ryanspice/spice.js">https://github.com/ryanspice/spice.js</a></p>


			<br/>
			<br/>
			<br/>

        </div>

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
