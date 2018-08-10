
import View from "../view";

export default class New extends View {


	constructor(ref?:HTML5Element){

		super(ref)

		return {
			link:this,
			type:`view`,
			id:'new-view',
			className:'slide',
			style:`
	      z-index: 200;
		    position: absolute;
		    background: black;
		    margin: 0px;
		    padding: 48px;
				width:100%;
				height:100%;
				max-width:720px;
				opacity:1 !important;
				`,
			innerHTML:`
				<column class="col-md-12">
					<h2 >new project</h2>
					<br/>
					<h3><input placeholder="project0"></input></h3>
					<p></p>

			        <div class="form-group">
			            <p class="form-group-label">Core Properties</p>
			            <div class="checkbox">
			                <label>
			                    <input type="checkbox" checked disabled></input>
			                    <span>ES6</span>
			                </label>
			            </div>

			            <div class="checkbox">
			                <label>
			                    <input type="checkbox" checked disabled></input>
			                    <span>FlowType</span>
			                </label>
			            </div>

			            <div class="checkbox">
			                <label>
			                    <input type="checkbox" disabled="true"></input>
			                    <span>Disabled</span>
			                </label>
			            </div>

						<div class="btn-group" >
							<a class="btn btn-primary" disabled>Create</a>
							<a class="btn btn-default">Cancel</a>
						</div>
			        </div>
				</column>
			`,
			onclick:this.click
		}

	}

	click(evt){

		window.controller.goTo('settings');
				evt.stopPropagation();


	}

}
