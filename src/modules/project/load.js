
import View from "../view";

export default class Load extends View {

	test:any = 'test'

	constructor(ref?:HTML5Element){

		super(ref)

		return {
			link:this,
			type:`view`,
			id:'load-view',
			className:'slide',
			style:``,
			innerHTML:`
				<column class="col-md-12">
					<h2 >load project</h2>
					<br/>

					<div class="entity-list entity-list-expandable" onclick="(${this.gotonew})()">
					<div class="entity-list-item">
					<div class="item-icon">
					<span class="glyph glyph-mail"></span>
					</div>
					<div class="item-content-secondary">
					<div class="content-text-primary">00.0 MB</div>
					<div class="content-text-secondary"></div>
					</div>
					<div class="item-content-primary">
					<div class="content-text-primary">No Projects</div>
					<div class="content-text-secondary"></div>
					<div class="progress hidden">
					<div class="progress-bar hidden" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 60%;">
					<span class="sr-only hidden">60%</span>
					</div>
					</div>
					</div>
					<div class="item-content-expanded">
					<button class="btn btn-default" disabled="disabled">Uninstall</button>
					<button class="btn btn-default">Move</button>
					</div>
					</div>
					</div>




					<div class="entity-list entity-list-expandable hidden">
					<div class="entity-list-item">
					<div class="item-icon">
					<span class="glyph glyph-mail"></span>
					</div>
					<div class="item-content-secondary">
					<div class="content-text-primary">25.3 MB</div>
					<div class="content-text-secondary">25/08/2016</div>
					</div>
					<div class="item-content-primary">
					<div class="content-text-primary">Demo (F)</div>
					<div class="content-text-secondary">${this.test}</div>
					<div class="progress hidden">
					<div class="progress-bar hidden" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 60%;">
					<span class="sr-only hidden">60%</span>
					</div>
					</div>
					</div>
					<div class="item-content-expanded">
					<button class="btn btn-default" disabled="disabled">Uninstall</button>
					<button class="btn btn-default">Move</button>
					</div>
					</div>
					</div>
				</column>
			`,
			onclick:this.click
		}

	}

	gotonew = ()=>{

		window.controller.goTo('new');

	}

	click(evt){

		evt.stopPropagation();
		window.controller.goTo('settings');

	}

}
