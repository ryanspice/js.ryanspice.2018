export default `

/*! HTML5 Boilerplate v6.0.1 | MIT License | https://html5boilerplate.com/ */html{color:#222;font-size:1em;line-height:1.4}::-moz-selection{background:#b3d4fc;text-shadow:none}::selection{background:#b3d4fc;text-shadow:none}hr{display:block;height:1px;border:0;border-top:1px solid #ccc;margin:1em 0;padding:0}audio,canvas,iframe,img,svg,video{vertical-align:middle}fieldset{border:0;margin:0;padding:0}textarea{resize:vertical}.browserupgrade{margin:.2em 0;background:#ccc;color:#000;padding:.2em 0}.hidden{display:none!important}.visuallyhidden{border:0;clip:rect(0 0 0 0);-webkit-clip-path:inset(50%);clip-path:inset(50%);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px;white-space:nowrap}.visuallyhidden.focusable:active,.visuallyhidden.focusable:focus{clip:auto;-webkit-clip-path:none;clip-path:none;height:auto;margin:0;overflow:visible;position:static;width:auto;white-space:inherit}.invisible{visibility:hidden}.clearfix:after,.clearfix:before{content:" ";display:table}.clearfix:after{clear:both}@media print{blockquote,img,pre,tr{page-break-inside:avoid}*,:after,:before{background:0 0!important;color:#000!important;box-shadow:none!important;text-shadow:none!important}a,a:visited{text-decoration:underline}a[href]:after{content:" (" attr(href) ")"}abbr[title]:after{content:" (" attr(title) ")"}a[href^="#"]:after,a[href^="javascript:"]:after{content:""}pre{white-space:pre-wrap!important}blockquote,pre{border:1px solid #999}thead{display:table-header-group}h2,h3,p{orphans:3;widows:3}h2,h3{page-break-after:avoid}}

/*! normalize.css v7.0.0 | MIT License | github.com/necolas/normalize.css */button,hr,input{overflow:visible}audio,canvas,progress,video{display:inline-block}progress,sub,sup{vertical-align:baseline}[type=checkbox],[type=radio],legend{box-sizing:border-box;padding:0}html{line-height:1.15;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}body{margin:0}article,aside,details,figcaption,figure,footer,header,main,menu,nav,section{display:block}h1{font-size:2em;margin:.67em 0}figure{margin:1em 40px}hr{box-sizing:content-box;height:0}code,kbd,pre,samp{font-family:monospace,monospace;font-size:1em}a{background-color:transparent;-webkit-text-decoration-skip:objects}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted}b,strong{font-weight:bolder}dfn{font-style:italic}mark{background-color:#ff0;color:#000}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}audio:not([controls]){display:none;height:0}img{border-style:none}svg:not(:root){overflow:hidden}button,input,optgroup,select,textarea{font-family:sans-serif;font-size:100%;line-height:1.15;margin:0}button,select{text-transform:none}[type=reset],[type=submit],button,html [type=button]{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:ButtonText dotted 1px}fieldset{padding:.35em .75em .625em}legend{color:inherit;display:table;max-width:100%;white-space:normal}textarea{overflow:auto}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-cancel-button,[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}[hidden],template{display:none}

/* ryanspice renderer */

* {

	background:rgba(25,25,25,0.05);

}

aside#bar {

	background:black;
	position:fIxed;
	left:0px;
	top:0px;
	width:2em;
	height:100%;
	opacity:0.5;
    transition: width 0.2s;
	transition-timing-function: cubic-bezier(0.25,0.1,0.25,1);
}

aside#bar:hover {

	opacity:0.8;
	width:4em;
    transition: width 0.2s;
	transition-timing-function: cubic-bezier(0.25,0.1,0.25,1);
	cursor:pointer;

}

aside span {

	display:block;
	width:100%;
	height:64px;


}

aside span:hover {

	outline:1px solid rgba(25,25,25,0.25);
	display:block;
	width:100%;
	height:64px;

}



a {


	s {

		>. {

			background:red;
		}
	}
}


.whitebar{

	max-width:64px;
	width:32px;
	border-radius:3px;
	background:white;
	height:3px;
	margin-left:17px;
	margin-top:3px;
	margin-bottom:3px;

}
.whitebar:hover{

		max-width:64px;
		width:32px;
		border-radius:3px;
		background:white;
		height:3px;
		margin-left:17px;
		margin-top:3px;
		margin-bottom:3px;

}

`;
