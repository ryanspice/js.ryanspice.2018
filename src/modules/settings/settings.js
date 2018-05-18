//@flow

import View from "../view";

const Setting = (Setting, Text, Action) => `<section onclick="(${Action})()"><i data-feather="${Setting}" ></i><span><h3>${Text}</h3></span></section>`;

export default class Settings extends View {

	constructor(ref?:HTML5Element){

		super(ref)

		return {
			link:this,
			type:`view`,
			id:'settings-view',
			className:'slide',
			style:`background:transparent;margin-top:10%;margin-left:10%;margin:0px auto;`,
			innerHTML:`
				<center>
					<h2>Settings</h2>
					<input style="opacity:0;"></input>
				</center>
				<br/>
				<spread>
					${Setting('sliders', 'Defaults',function(){

						window.controller.goTo('default-settings');

					})}
					${Setting('info', 'About',function(){

						window.controller.goTo('info-settings');
					})}
				</spread>
			`,
			onclick:this.click
		}

	}

	click(evt){

		evt.stopPropagation();


	}

}

export class Info extends View {


	constructor(ref?:HTML5Element){

		super(ref)

		return {
			link:this,
			type:`view`,
			id:'info-settings-view',
			className:'slide',
			style:`background:transparent;margin-top:10%;margin-left:10%;margin:0px auto;width:75%;`,
			innerHTML:`
				<h2>About</h2>
				<h4>Webpack 4.0.3</h4>
				<p></p>
			`,
			onclick:this.click
		}

	}

	click(evt){

		window.controller.goTo('settings');
				evt.stopPropagation();


	}

}

export class DefaultSettings extends View {


	constructor(ref?:HTML5Element){

		super(ref)

		return {
			link:this,
			type:`view`,
			id:'default-settings-view',
			className:'slide',
			style:`background:transparent;margin-top:10%;margin-left:10%;margin:0px auto;padding:64px;`,
			innerHTML:`
				<column class='col-md-14'>
									<h2>Defaults</h2>
									<p>
									<div class="btn-group">
									        <button type="button" data-toggle="button" class="btn btn-toggle-switch" autocomplete="off" aria-pressed="false">
									            <span class="stateLabel stateLabel-on">On</span>
									            <span class="stateLabel stateLabel-off">Off</span>
									        </button>
									    </div>
											<br/>
											<div class="btn-group">
					        <button type="button" data-toggle="button" class="btn btn-toggle-switch" autocomplete="off" aria-pressed="false">
					            <span class="stateLabel stateLabel-on">On</span>
					            <span class="stateLabel stateLabel-off">Off</span>
					        </button>
					    </div>
							<br/>
							<br/>
							<form>
					        <div class="form-group">
					            <label for="exampleInputEmail1">Email address</label>
					            <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Enter email">
					        </div>

					        <div class="form-group">
					            <label for="exampleInputPassword1">Password</label>
					            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
					        </div>

					        <div class="form-group">
					            <label for="exampleInputFile">File input</label>
					            <input type="file" id="exampleInputFile">
					            <p class="help-block">Example block-level help text here.</p>
					        </div>

					        <div class="form-group">
					            <p class="form-group-label">Checkbox</p>
					            <div class="checkbox">
					                <label>
					                    <input type="checkbox"></input>
					                    <span>Rest</span>
					                </label>
					            </div>

					            <div class="checkbox">
					                <label>
					                    <input type="checkbox" checked></input>
					                    <span>Checked</span>
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
					                <script type="text/javascript">
					                    (function () {
					                        $("#foo").prop("indeterminate", true);
					                    })();
					                </script>
					            </div>
					        </div>

					        <div class="form-group">
					            <p class="form-group-label">Radio buttons</p>
					            <div class="radio">
					                <label>
					                    <input type="radio" name='radio1'>
					                    <span>Radio</span>
					                </label>
					            </div>
					            <div class="radio">
					                <label>
					                    <input type="radio" name='radio1' checked="checked">
					                    <span>Checked</span>
					                </label>
					            </div>
					            <div class="radio">
					                <label>
					                    <input type="radio" name='radio1' disabled="true">
					                    <span>Disabled</span>
					                </label>
					            </div>
					        </div>

					        <button type="submit" class="btn btn-default">Submit</button>
					    </form>
									</p>
		</column>
			<column class='col-md-6 pull-right'>
				<h2></h2>
				
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
