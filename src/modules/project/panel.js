//@flow

import View from "../view";

export default class Panel extends View {

	title:string;
	type:string;
	description:string;

	buttons:any = {
		ok:'ok',
		cancel:'cancel'
	}

	constructor(ref?:HTML5Element){

		super(ref);

		return this.assign({
			link:this,
			type:`view`,
			id:'panel-view',
			style:`overflow-y: scroll;z-index: 201; position: absolute; background: black; margin-top: 0px; margin-left:0px; padding: 48px; width: 100%; height: 100%; max-width: 450px; border-right: 1px solid white; opacity: 1 !important;`,
			className:'slide',
			innerHTML:`
				<column class="col-md-24">
					<template></template>
					<div class="btn-group" >
						<a id="accept" class="btn btn-primary" onclick="window.controller.goTo('engine');sessionUpdateData();">${ref.buttons.ok}</a>
						<br/>
						<a id="cancel" class="btn btn-default" onclick="window.controller.goTo('engine');" style="color:white; background:#920c00;">${ref.buttons.cancel}</a>
					</div>
				</column>
			`,
			onclick:this.click
		}, ref)

	}

	click(evt){

		window.controller.goTo('settings');
		evt.stopPropagation();

	}

}
