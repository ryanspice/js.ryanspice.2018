
import View from "../view";

export default class New extends View {


	constructor(ref?:HTML5Element){

		super(ref)

		return {
			link:this,
			type:`view`,
			id:'new-view',
			className:'slide',
			style:`margin-top:10%;margin-left:10%;margin:0px auto;width:75%;`,
			innerHTML:`
				<h2>new project</h2>
				<input placeholder="project0"></input>
				<p></p>

									        <div class="form-group">
									            <p class="form-group-label">Core Properties</p>
									            <div class="checkbox">
									                <label>
									                    <input type="checkbox"></input>
									                    <span>ES6</span>
									                </label>
									            </div>

									            <div class="checkbox">
									                <label>
									                    <input type="checkbox" checked></input>
									                    <span>FlowType</span>
									                </label>
									            </div>

									            <div class="checkbox">
									                <label>
									                    <input type="checkbox" disabled="true"></input>
									                    <span>Disabled</span>
									                </label>
									            </div>

									            <div class="checkbox">
									                <label>
									                    <input type="checkbox" id="foo"></input>
									                    <span>Indeterminate</span>
									                </label>
									            </div>
									        </div>
			`,
			onclick:this.click
		}

	}

	click(evt){

		window.controller.goTo('settings');
				evt.stopPropagation();


	}

}
