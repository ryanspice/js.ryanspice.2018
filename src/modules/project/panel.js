//@flow

import View from "../view";

export default class Panel extends View {

	title:string;
	type:string;
	description:string;

	previous:Array<string> = null;

	buttons:any = {
		ok:'ok',
		cancel:'cancel'
	}

	last = ()=>{

		return this.previous?this.previous[0]:'engine';

	}

	constructor(ref?:HTML5Element){

		super(ref);

		return this.assign({
			link:this,
			type:`view`,
			id:'panel-view',
			className:'slide',
			innerHTML:`
				<column class="col-md-24">
					<template></template>
					<div class="btn-group" >
						<a id="accept" class="btn btn-primary" onclick="(${this.onclick});sessionUpdateData();">${ref.buttons.ok}</a>
						<br/>
						<a id="cancel" class="btn btn-default" onclick="(${this.onclick});" style="color:white; background:#920c00;">${ref.buttons.cancel}</a>
					</div>
				</column>
			`,
			onclick:this.click
		}, ref)

	}

	click(evt){
		
		console.log(this);

		this.controller.goTo(this.session.get('view_previous')||'engine');

		evt.stopPropagation();

	}

}
