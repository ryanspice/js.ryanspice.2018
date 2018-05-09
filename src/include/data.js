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
		style:``,
		value:`123wds`
	},
	{
		type:`aside`,
		id:'primary-column',
		style:`margin-left:4rem;font-size:2rem`,
		value:`123wds`
	},
	{
		type:`aside`,
		id:'secondary-column',
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
		innerHTML:`A`
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
		className:``,
		style:`background:red;`,
		value:`32`
	},

	{
		type:`span`,
		renderTo:'#secondary-column',
		class:``,
		style:`background:red;`,
		value:`32`
	},

	{
		type:`span`,
		renderTo:'#secondary-column',
		class:``,
		style:`background:red;`,
		value:`32`
	},

]);
