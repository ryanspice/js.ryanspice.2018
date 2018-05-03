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
		type:`aside`,
		id:'bar',
		style:`font-size:2rem`,
		value:`123wds`
	},
	{
		type:`span`,
		renderTo:'#bar',
		className:`whitebar`,
		value:`32`
	},
	{
		type:`span`,
		renderTo:'#bar',
		className:`whitebar`,
		value:`32`
	},
	{
		type:`span`,
		renderTo:'#bar',
		className:`whitebar`,
		value:`32`
	},
	{
		type:`span`,
		renderTo:'#bar',
		className:``,
		style:`background:blue;text-align:center;line-height:64px;color:white;`,
		value:`32`,
		innerHTML:`A`
	},
	{
		type:`span`,
		renderTo:'#bar',
		className:``,
		style:`background:red;`,
		value:`32`
	},

	{
		type:`span`,
		renderTo:'#bar',
		class:``,
		style:`background:red;`,
		value:`32`
	},

	{
		type:`span`,
		renderTo:'#bar',
		class:``,
		style:`background:red;`,
		value:`32`
	},

	{
		type:`span`,
		style:`background:blue`,
		value:`32`
	}

]);
