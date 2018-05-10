//const css = require('./style.scss');//.toString();

//var css = require("style-loader??css-loader??./style.scss");
//var css = require("./style.js");

//console.log(css);

import {default as css} from "./style.js";

export default new Array([

	{
		type:`style`,
		value:css
	},
	{
		type:`view`,
		id:'primary-view',
		style:`background:transparent;`,
		value:`123wds`
	},

	{
		type:`view`,
		id:'secondary-view',
		className:`hidden`,
		style:`background:transparent;`,

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
		innerHTML:`<h2>Hello World</h2>`
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

	{
		type:`aside`,
		id:'primary-column',
		className:`noselect`,
		style:``,
		value:`123wds`
	},
	{
		type:`aside`,
		id:'secondary-column',
		className:`noselect`,
		style:`font-size:2rem`,
		value:`123wds`
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
	},
	{
		type:`span`,
		id:`test-blue`,
		renderTo:'#secondary-column',
		className:``,
		style:`background:blue;text-align:center;line-height:64px;color:white;`,
		value:`32`,
		innerHTML:`<i class="menu" data-feather="menu"></i>`
	},

	{
		type:`div`,
		renderTo:'#test-blue',
		class:``,
		style:`background:green;color:limegreen`,
		value:`10`
	},
	{
		type:`span`,
		renderTo:'#secondary-column',
		innerHTML:`<i class="menu" data-feather="map"></i>`
	},

	{
		type:`span`,
		renderTo:'#secondary-column',
		innerHTML:`<i class="menu" data-feather="layers"></i>`
	},

	{
		type:`span`,
		renderTo:'#secondary-column',
		class:``,
		style:`position:absolute;bottom:4em;`,
		innerHTML:`<i class="menu" data-feather="book"></i>`
	},

	{
		type:`span`,
		renderTo:'#secondary-column',
		class:``,
		style:`position:absolute;bottom:2em;`,
		innerHTML:`<i class="menu" data-feather="play"></i>`
	},

	{
		type:`span`,
		renderTo:'#secondary-column',
		class:``,
		style:`position:absolute;bottom:0em;`,
		innerHTML:`<i class="menu" data-feather="settings"></i>`
	},

]);
