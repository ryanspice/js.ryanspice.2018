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

import Engine from "../modules/engine"

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

//		new PrimaryColumn(this),

		new Hamburger(this),
		new Engine(this),
		new Documentation(this),
		new Settings(this),
		new Info(this),
		new DefaultSettings(this),
		new New(this),
		new Load(this),
		new Save(this)
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

	goTo = (str, noRemove) => {

		console.log(noRemove);

		controller.each(e=>{
			//console.log(e.value.id==str+'-view')
			if (e.value.id==str+'-view')
			e.value.classList.remove('slide');
			else
			noRemove?null:e.value.classList.add('slide');

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

/* */

export default new Array([

	/*
	{
		type:`style`,
		value:css
	},
	*/

	/*
	{
		type:`hero`,
	//	renderTo:`#primary-view`,
		id:`page-home`,
		style:`background:transparent;`,
		innerHTML:`<div style="background-position:0 100%;width:100%;" >

		</div>`
	},
	*/
	...controller.views,

	//{type:`overlay`},


	/* Ribbon */

	{
		type:`ribbon`,
		renderTo:`#primary-view`,
		style:``,
		innerHTML:`<h3">SpiceJS 0.9.0</h3>`
	},

	/* Breadcrumbs */


	/*
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

	//Page Home

	{
		type:`section`,
		renderTo:`#primary-view`,
		id:`page-home-test`,
		style:`margin: 0px 70px;`,
		innerHTML:`
			<column id="contentMiddle" class="col-md-4 hidden-sm hidden-xs" style=" opacity: 10;">
				<br/>
				<h4><span class="pageTitle0" > </span></h4>
	                <a href="#">home</a>
	                <a href="#">documentation</a>
	                <a href="#">about</a>
	                <a href="#">develop</a>
	                <a href="#">publish</a>
	                <a href="#">community</a>
	                <a href="#">download</a>


				<h4><span class="pageTitle0" >references </span></h4>

        	</column>
			<column class='col-md-16'>

				<h3 style="">spice.js editor <span class="hidden-xs">0.0.2</span></h3>
				<h4 class="hidden-xs" style="width:100px;position:relative;top:-48px;left:128px;">Preview</h4>
				<li><a href="https://github.com/ryanspice/spice.js">github</a></li>
				<li><a href="">spice.js.7z</a></li>


				<h4>getting started </h4>
				<hr/>
				<pre><code class="html hljs xml xml xml xml xml xml xml xml xml xml"><span class="hljs-tag"><span class="hljs-tag"><span class="hljs-tag"><span class="hljs-tag"><span class="hljs-tag"><span class="hljs-tag"><span class="hljs-tag"><span class="hljs-tag"><span class="hljs-tag"><span class="hljs-tag">&lt;</span></span></span></span></span></span></span></span></span><span class="hljs-title"><span class="hljs-tag"><span class="hljs-title"><span class="hljs-tag"><span class="hljs-title"><span class="hljs-tag"><span class="hljs-title"><span class="hljs-tag"><span class="hljs-title"><span class="hljs-tag"><span class="hljs-title"><span class="hljs-tag"><span class="hljs-title"><span class="hljs-tag"><span class="hljs-title"><span class="hljs-tag"><span class="hljs-title"><span class="hljs-tag"><span class="hljs-title">script</span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span><span class="hljs-tag"><span class="hljs-tag"><span class="hljs-tag"><span class="hljs-tag"><span class="hljs-tag"><span class="hljs-tag"><span class="hljs-tag"><span class="hljs-tag"><span class="hljs-tag"> </span></span></span></span></span></span></span></span></span><span class="hljs-attribute"><span class="hljs-tag"><span class="hljs-attribute"><span class="hljs-tag"><span class="hljs-attribute"><span class="hljs-tag"><span class="hljs-attribute"><span class="hljs-tag"><span class="hljs-attribute"><span class="hljs-tag"><span class="hljs-attribute"><span class="hljs-tag"><span class="hljs-attribute"><span class="hljs-tag"><span class="hljs-attribute"><span class="hljs-tag"><span class="hljs-attribute"><span class="hljs-tag"><span class="hljs-attribute">rel</span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span><span class="hljs-tag"><span class="hljs-tag"><span class="hljs-tag"><span class="hljs-tag"><span class="hljs-tag"><span class="hljs-tag"><span class="hljs-tag"><span class="hljs-tag"><span class="hljs-tag">=</span></span></span></span></span></span></span></span></span><span class="hljs-value"><span class="hljs-tag"><span class="hljs-value"><span class="hljs-tag"><span class="hljs-value"><span class="hljs-tag"><span class="hljs-value"><span class="hljs-tag"><span class="hljs-value"><span class="hljs-tag"><span class="hljs-value"><span class="hljs-tag"><span class="hljs-value"><span class="hljs-tag"><span class="hljs-value"><span class="hljs-tag"><span class="hljs-value"><span class="hljs-tag"><span class="hljs-value">"prefetch"</span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span><span class="hljs-tag"><span class="hljs-tag"><span class="hljs-tag"><span class="hljs-tag"><span class="hljs-tag"><span class="hljs-tag"><span class="hljs-tag"><span class="hljs-tag"><span class="hljs-tag"> </span></span></span></span></span></span></span></span></span><span class="hljs-attribute"><span class="hljs-tag"><span class="hljs-attribute"><span class="hljs-tag"><span class="hljs-attribute"><span class="hljs-tag"><span class="hljs-attribute"><span class="hljs-tag"><span class="hljs-attribute"><span class="hljs-tag"><span class="hljs-attribute"><span class="hljs-tag"><span class="hljs-attribute"><span class="hljs-tag"><span class="hljs-attribute"><span class="hljs-tag"><span class="hljs-attribute"><span class="hljs-tag"><span class="hljs-attribute">type</span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span><span class="hljs-tag"><span class="hljs-tag"><span class="hljs-tag"><span class="hljs-tag"><span class="hljs-tag"><span class="hljs-tag"><span class="hljs-tag"><span class="hljs-tag"><span class="hljs-tag">=</span></span></span></span></span></span></span></span></span><span class="hljs-value"><span class="hljs-tag"><span class="hljs-value"><span class="hljs-tag"><span class="hljs-value"><span class="hljs-tag"><span class="hljs-value"><span class="hljs-tag"><span class="hljs-value"><span class="hljs-tag"><span class="hljs-value"><span class="hljs-tag"><span class="hljs-value"><span class="hljs-tag"><span class="hljs-value"><span class="hljs-tag"><span class="hljs-value"><span class="hljs-tag"><span class="hljs-value">"application-x/javascript"</span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span><span class="hljs-tag"><span class="hljs-tag"><span class="hljs-tag"><span class="hljs-tag"><span class="hljs-tag"><span class="hljs-tag"><span class="hljs-tag"><span class="hljs-tag"><span class="hljs-tag"> </span></span></span></span></span></span></span></span></span><span class="hljs-attribute"><span class="hljs-tag"><span class="hljs-attribute"><span class="hljs-tag"><span class="hljs-attribute"><span class="hljs-tag"><span class="hljs-attribute"><span class="hljs-tag"><span class="hljs-attribute"><span class="hljs-tag"><span class="hljs-attribute"><span class="hljs-tag"><span class="hljs-attribute"><span class="hljs-tag"><span class="hljs-attribute"><span class="hljs-tag"><span class="hljs-attribute"><span class="hljs-tag"><span class="hljs-attribute">defer</span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span><span class="hljs-tag"><span class="hljs-tag"><span class="hljs-tag"><span class="hljs-tag"><span class="hljs-tag"><span class="hljs-tag"><span class="hljs-tag"><span class="hljs-tag"><span class="hljs-tag">&gt;</span></span></span></span></span></span></span></span></span></span><br><span class="javascript"><span class="hljs-comment"><span class="javascript"><span class="hljs-comment"><span class="javascript"><span class="hljs-comment"><span class="javascript"><span class="hljs-comment"><span class="javascript"><span class="hljs-comment"><span class="javascript"><span class="hljs-comment"><span class="javascript"><span class="hljs-comment"><span class="javascript"><span class="hljs-comment"><span class="javascript"><span class="hljs-comment"><span class="javascript"><span class="hljs-comment">//your code here</span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span><br><span class="javascript"><span class="hljs-comment"><span class="javascript"><span class="hljs-comment"><span class="javascript"><span class="hljs-comment"><span class="javascript"><span class="hljs-comment"><span class="javascript"><span class="hljs-comment"><span class="javascript"><span class="hljs-comment"><span class="javascript"><span class="hljs-comment"><span class="javascript"><span class="hljs-comment"><span class="javascript"><span class="hljs-comment"><span class="javascript"><span class="hljs-comment"> </span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span><span class="hljs-tag"><span class="hljs-tag"><span class="hljs-tag"><span class="hljs-tag"><span class="hljs-tag"><span class="hljs-tag"><span class="hljs-tag"><span class="hljs-tag"><span class="hljs-tag"><span class="hljs-tag">&lt;/</span></span></span></span></span></span></span></span></span><span class="hljs-title"><span class="hljs-tag"><span class="hljs-title"><span class="hljs-tag"><span class="hljs-title"><span class="hljs-tag"><span class="hljs-title"><span class="hljs-tag"><span class="hljs-title"><span class="hljs-tag"><span class="hljs-title"><span class="hljs-tag"><span class="hljs-title"><span class="hljs-tag"><span class="hljs-title"><span class="hljs-tag"><span class="hljs-title"><span class="hljs-tag"><span class="hljs-title">script</span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span><span class="hljs-tag"><span class="hljs-tag"><span class="hljs-tag"><span class="hljs-tag"><span class="hljs-tag"><span class="hljs-tag"><span class="hljs-tag"><span class="hljs-tag"><span class="hljs-tag">&gt;</span></span></span></span></span></span></span></span></span></span><p></p><p>//Note: <i>You may load an external JavaScript file with similar code.</i></p><p><span class="hljs-tag"><span class="hljs-tag"><span class="hljs-tag"><span class="hljs-tag"><span class="hljs-tag"><span class="hljs-tag"><span class="hljs-tag"><span class="hljs-tag"><span class="hljs-tag"><span class="hljs-tag">&lt;</span></span></span></span></span></span></span></span></span><span class="hljs-title"><span class="hljs-tag"><span class="hljs-title"><span class="hljs-tag"><span class="hljs-title"><span class="hljs-tag"><span class="hljs-title"><span class="hljs-tag"><span class="hljs-title"><span class="hljs-tag"><span class="hljs-title"><span class="hljs-tag"><span class="hljs-title"><span class="hljs-tag"><span class="hljs-title"><span class="hljs-tag"><span class="hljs-title"><span class="hljs-tag"><span class="hljs-title">script</span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span><span class="hljs-tag"><span class="hljs-tag"><span class="hljs-tag"><span class="hljs-tag"><span class="hljs-tag"><span class="hljs-tag"><span class="hljs-tag"><span class="hljs-tag"><span class="hljs-tag"> </span></span></span></span></span></span></span></span></span><span class="hljs-attribute"><span class="hljs-tag"><span class="hljs-attribute"><span class="hljs-tag"><span class="hljs-attribute"><span class="hljs-tag"><span class="hljs-attribute"><span class="hljs-tag"><span class="hljs-attribute"><span class="hljs-tag"><span class="hljs-attribute"><span class="hljs-tag"><span class="hljs-attribute"><span class="hljs-tag"><span class="hljs-attribute"><span class="hljs-tag"><span class="hljs-attribute"><span class="hljs-tag"><span class="hljs-attribute">rel</span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span><span class="hljs-tag"><span class="hljs-tag"><span class="hljs-tag"><span class="hljs-tag"><span class="hljs-tag"><span class="hljs-tag"><span class="hljs-tag"><span class="hljs-tag"><span class="hljs-tag">=</span></span></span></span></span></span></span></span></span><span class="hljs-value"><span class="hljs-tag"><span class="hljs-value"><span class="hljs-tag"><span class="hljs-value"><span class="hljs-tag"><span class="hljs-value"><span class="hljs-tag"><span class="hljs-value"><span class="hljs-tag"><span class="hljs-value"><span class="hljs-tag"><span class="hljs-value"><span class="hljs-tag"><span class="hljs-value"><span class="hljs-tag"><span class="hljs-value"><span class="hljs-tag"><span class="hljs-value">"prefetch"</span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span><span class="hljs-tag"><span class="hljs-tag"><span class="hljs-tag"><span class="hljs-tag"><span class="hljs-tag"><span class="hljs-tag"><span class="hljs-tag"><span class="hljs-tag"><span class="hljs-tag"> </span></span></span></span></span></span></span></span></span><span class="hljs-attribute"><span class="hljs-tag"><span class="hljs-attribute"><span class="hljs-tag"><span class="hljs-attribute"><span class="hljs-tag"><span class="hljs-attribute"><span class="hljs-tag"><span class="hljs-attribute"><span class="hljs-tag"><span class="hljs-attribute"><span class="hljs-tag"><span class="hljs-attribute"><span class="hljs-tag"><span class="hljs-attribute"><span class="hljs-tag"><span class="hljs-attribute"><span class="hljs-tag"><span class="hljs-attribute">type</span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span><span class="hljs-tag"><span class="hljs-tag"><span class="hljs-tag"><span class="hljs-tag"><span class="hljs-tag"><span class="hljs-tag"><span class="hljs-tag"><span class="hljs-tag"><span class="hljs-tag">=</span></span></span></span></span></span></span></span></span><span class="hljs-value"><span class="hljs-tag"><span class="hljs-value"><span class="hljs-tag"><span class="hljs-value"><span class="hljs-tag"><span class="hljs-value"><span class="hljs-tag"><span class="hljs-value"><span class="hljs-tag"><span class="hljs-value"><span class="hljs-tag"><span class="hljs-value"><span class="hljs-tag"><span class="hljs-value"><span class="hljs-tag"><span class="hljs-value"><span class="hljs-tag"><span class="hljs-value">"application-x/javascript"</span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span><span class="hljs-tag"><span class="hljs-tag"><span class="hljs-tag"><span class="hljs-tag"><span class="hljs-tag"><span class="hljs-tag"><span class="hljs-tag"><span class="hljs-tag"><span class="hljs-tag"> </span></span></span></span></span></span></span></span></span><span class="hljs-attribute"><span class="hljs-tag"><span class="hljs-attribute"><span class="hljs-tag"><span class="hljs-attribute"><span class="hljs-tag"><span class="hljs-attribute"><span class="hljs-tag"><span class="hljs-attribute"><span class="hljs-tag"><span class="hljs-attribute"><span class="hljs-tag"><span class="hljs-attribute"><span class="hljs-tag"><span class="hljs-attribute"><span class="hljs-tag"><span class="hljs-attribute"><span class="hljs-tag"><span class="hljs-attribute">src</span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span><span class="hljs-tag"><span class="hljs-tag"><span class="hljs-tag"><span class="hljs-tag"><span class="hljs-tag"><span class="hljs-tag"><span class="hljs-tag"><span class="hljs-tag"><span class="hljs-tag">=</span></span></span></span></span></span></span></span></span><span class="hljs-value"><span class="hljs-tag"><span class="hljs-value"><span class="hljs-tag"><span class="hljs-value"><span class="hljs-tag"><span class="hljs-value"><span class="hljs-tag"><span class="hljs-value"><span class="hljs-tag"><span class="hljs-value"><span class="hljs-tag"><span class="hljs-value"><span class="hljs-tag"><span class="hljs-value"><span class="hljs-tag"><span class="hljs-value"><span class="hljs-tag"><span class="hljs-value">"%path%"</span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span><span class="hljs-tag"><span class="hljs-tag"><span class="hljs-tag"><span class="hljs-tag"><span class="hljs-tag"><span class="hljs-tag"><span class="hljs-tag"><span class="hljs-tag"><span class="hljs-tag"> </span></span></span></span></span></span></span></span></span><span class="hljs-attribute"><span class="hljs-tag"><span class="hljs-attribute"><span class="hljs-tag"><span class="hljs-attribute"><span class="hljs-tag"><span class="hljs-attribute"><span class="hljs-tag"><span class="hljs-attribute"><span class="hljs-tag"><span class="hljs-attribute"><span class="hljs-tag"><span class="hljs-attribute"><span class="hljs-tag"><span class="hljs-attribute"><span class="hljs-tag"><span class="hljs-attribute"><span class="hljs-tag"><span class="hljs-attribute">defer</span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span><span class="hljs-tag"><span class="hljs-tag"><span class="hljs-tag"><span class="hljs-tag"><span class="hljs-tag"><span class="hljs-tag"><span class="hljs-tag"><span class="hljs-tag"><span class="hljs-tag">&gt;</span></span></span></span></span></span></span></span></span></span><span class="javascript"></span><span class="hljs-tag"><span class="javascript"></span><span class="hljs-tag"><span class="javascript"></span><span class="hljs-tag"><span class="javascript"></span><span class="hljs-tag"><span class="javascript"></span><span class="hljs-tag"><span class="javascript"></span><span class="hljs-tag"><span class="javascript"></span><span class="hljs-tag"><span class="javascript"></span><span class="hljs-tag"><span class="javascript"></span><span class="hljs-tag"><span class="javascript"></span><span class="hljs-tag">&lt;/</span></span></span></span></span></span></span></span></span><span class="hljs-title"><span class="hljs-tag"><span class="hljs-title"><span class="hljs-tag"><span class="hljs-title"><span class="hljs-tag"><span class="hljs-title"><span class="hljs-tag"><span class="hljs-title"><span class="hljs-tag"><span class="hljs-title"><span class="hljs-tag"><span class="hljs-title"><span class="hljs-tag"><span class="hljs-title"><span class="hljs-tag"><span class="hljs-title"><span class="hljs-tag"><span class="hljs-title">script</span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span><span class="hljs-tag"><span class="hljs-tag"><span class="hljs-tag"><span class="hljs-tag"><span class="hljs-tag"><span class="hljs-tag"><span class="hljs-tag"><span class="hljs-tag"><span class="hljs-tag">&gt;</span></span></span></span></span></span></span></span></span></span></p></code></pre>

				<h4> setting up the app </h4>
				<hr/>

					<pre style="padding:0px !important;margin:0px !important;">
					<code class="js hljs javascript" style="padding:0px;margin:0px;padding-bottom:23px;margin-bottom:-15px;">

					<span class="hljs-comment">//Application Load</span>
					App.OnLoad = <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-params">()</span> </span>{

						<span class="hljs-comment">// Initalize Title and Resolution</span>
						App.Init(<span class="hljs-string">"SpiceJS - Particles"</span>,<span class="hljs-number">1920</span>,<span class="hljs-number">1080</span>);

						<span class="hljs-comment">//Snap to top</span>
						App.ext.top();

						<span class="hljs-comment">//Set canvas background colour</span>
						App.canvas.background_set(<span class="hljs-string">"transparent"</span>);

						<span class="hljs-comment">//Assign favicon</span>
						App.ext.metatag.metaFavicon(<span class="hljs-string">"../../stan.png"</span>);

					};

					<span class="hljs-comment">//Application main loop Object[init,update,draw]</span>
					App.main= {

						name:<span class="hljs-string">"Particles"</span>,

						init:<span class="hljs-function"><span class="hljs-keyword">function</span><span class="hljs-params">()</span> </span>{

							<span class="hljs-comment">//State Initilization</span>

							<span class="hljs-keyword">return</span> <span class="hljs-literal">true</span>;
						},

						update:<span class="hljs-function"><span class="hljs-keyword">function</span><span class="hljs-params">()</span> </span>{

							<span class="hljs-comment">//Update logic	</span>

							<span class="hljs-keyword">return</span> <span class="hljs-literal">true</span>;
						},

						draw:<span class="hljs-function"><span class="hljs-keyword">function</span><span class="hljs-params">()</span> </span>{

							<span class="hljs-comment">//Draw logic stored in particles.js</span>
							particlesDraw(<span class="hljs-keyword">this</span>.app)

							<span class="hljs-keyword">return</span> <span class="hljs-literal">true</span>;
						}

					};

				</code>
					</pre>
			</column>

			<column class='col-md-4 pull-right'>
				<br/>
				<h4><span class="pageTitle0" >background</span></h4>
				<span class="indent pageParagraph0" id="pageParagraph0">
				<p><span id="b">B</span>efore ES6, SpiceJS used <a>Prototype</a> javascript notation. </p>
				<p><span id="b">S</span>piceJS, designed heavily on the <a>Canvas API</a>, has support across most popular devices and browsers. Any device which supports Html5 and Html5 Hardware Accelleration will have a nice time.</p>

				<p><span id="b">P</span>rior to recent times developers had to rely on functions such as <a>setTimeout()</a>, however, up to date browsers can support a new feature called <a>requestAnimationFrame()</a> which can provide a high calculation of Frame Rate. This allows developers to create extensive programs, and fully animated games. </p></span>

				<hr style="opacity:0;" />
								<h5><span class="pageTitle0" >latest version - coming soon</span></h5>

				<li><a href="https://github.com/ryanspice/spice.js">github</a></li>
				<li><a href="">spice.js.7z</a></li>

			</column>

		`
	},


	//Columns


	{
		type:`aside`,
		id:'secondary-column',
		className:`noselect`,
		style:`font-size:2rem`,
		onclick:toggleExpand
	},

	// NEW SCREEN END //
	// INGAME //

	{
		type:`span`,
		renderTo:'#secondary-column',
		style:`display:;background:rgba(25, 25, 25, 1);overflow:hidden;max-height:48px;`,
		innerHTML:`<i class="menu" data-feather="layers"></i>
			<h5 onclick="event.stopPropagation()" ><u>ROOM</u></h5>
			<h5 onclick="event.stopPropagation()" >OBJECT</h5>
			<h5 onclick="event.stopPropagation()" >TILE</h5>
			<h5 onclick="event.stopPropagation()" >BACKGROUND</h5>
			`
	},

	{
		type:`span`,
		id:`scroll`,
		style:`display:;`,
		renderTo:'#secondary-column',
		innerHTML:`

			`
	},

		{
			type:`span`,
			renderTo:'#scroll',
			style:`max-width:48px;`,
			innerHTML:`<i class="menu" data-feather="plus"></i>	`,
			onclick:(evt)=>{

				evt.stopPropagation();
				//controller.goTo('new')

			}
		},
		{
			type:`span`,
			renderTo:'#scroll',
			style:`margin:10px;max-width:136px;height:96px;`,
			innerHTML:`<i class="menu" data-feather="file" style="margin:0px;margin-top:10px;width:100%;text-align:center;"></i><br/><h6 style="width:100%;text-align:center;	">r o o m 0</h6>	`,
			onclick:(evt)=>{

				evt.stopPropagation();
				//controller.goTo('new')

			}
		},

	/*BOTTOM */
	{
		type:`span`,
		renderTo:'#secondary-column',
		style:`background:rgba(25, 25, 25, 1);`,
		className:``,
		innerHTML:`<i class="menu" data-feather="play"></i><h3 style="margin-left:8.5rem;display:inline;line-height:3.25rem;	">p r e v i e w</h3>`,
		onclick:(evt)=>{
			if (evt)
			evt.stopPropagation();
			controller.goTo('engine')
			//toggleExpand(evt);

		}
	},

	{
		type:`span`,
		renderTo:'#secondary-column',
		style:`background:rgba(25, 25, 25, 1);`,
		className:``,
		innerHTML:`<i class="menu" data-feather="settings"></i><h3 style="margin-left:8rem;display:inline;line-height:3.25rem;	">s e t t i n g s</h3>`,
		onclick:(evt)=>{
			if (evt)
			evt.stopPropagation();
			controller.goTo('settings')
		}
	},

/*
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
		style:`position:absolute;bottom:144px;max-width:48px;`,
		innerHTML:`<i class="menu" data-feather="github"></i>`,
		onclick:(evt)=>{

	if (evt)
			evt.stopPropagation();
			//toggleExpand(evt);
			controller.goTo('tertiary')

		}
	},
*/
	/* END BOTTOM */
	/*
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

	*/
]);
