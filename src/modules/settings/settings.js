//@flow

import View from "../view";
require('./settings.scss');
export default class Settings extends View {

    constructor(ref ? : HTML5Element) {

        super(ref)

        const Setting = (Setting, Text, Action) => `<section onclick="(${Action})()"><i data-feather="${Setting}" ></i><span><h3>${Text}</h3></span></section>`;

        return {
            link: this,
            type: `view`,
            id: 'settings-view',
            className: 'slide',
            style: `margin-top:10%;margin-left:10%;margin:0px auto;text-align: center;`,
            innerHTML: `
					<h2>settings</h2>
					<input style="opacity:0;"></input>
				<br/>
				<spread>
					${Setting('sliders', '<strike style="opacity:0.5;">Defaults</strike>',function(){

						//window.controller.goTo('default-settings');

					})}
					${Setting('info', 'About',()=>{

						window.controller.goTo('info-settings');
					})}
				</spread>
			`,
            onclick: this.click
        }

    }

    click(evt) {

        evt.stopPropagation();


    }

}

export class Info extends View {


    constructor(ref ? : HTML5Element) {

        super(ref)

        return {
            link: this,
            type: `view`,
            id: 'info-settings-view',
            className: 'slide',
            style: ``,
            innerHTML: `
				<column class="col-md-12">
					<h2>about</h2>
					<h4>webpack 4.0.3</h4>
					<h4>winstrap 0.5.12</h4>
					<h4>babel 6.x</h4>
				</column>`,
            onclick: this.click
        }

    }

    click(evt) {

        window.controller.goTo('settings');
        evt.stopPropagation();


    }

}

export class DefaultSettings extends View {


    constructor(ref ? : HTML5Element) {

        super(ref)

        return {
            link: this,
            type: `view`,
            id: 'default-settings-view',
            className: 'slide',
            style: `background:transparent;margin-top:10%;margin-left:10%;margin:0px auto;padding:64px;`,
            innerHTML: `
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
<div class="entity-list">
        <div class="entity-list-item">
            <div class="item-icon">
                <span class="glyph glyph-mail"></span>
            </div>
            <div class="item-content-secondary">
                <button type="button" data-toggle="button" class="btn btn-toggle-switch" autocomplete="off" aria-pressed="false">
            </div>
            <div class="item-content-primary">
                <div class="content-text-primary">Mail and Calendar</div>
                <div class="content-text-secondary">Microsoft Corporation</div>
            </div>
        </div>
        <div class="entity-list-item">
            <div class="item-icon">
                <span class="glyph glyph-camera"></span>
            </div>
            <div class="item-content-secondary">
                <button type="button" data-toggle="button" class="btn btn-toggle-switch" autocomplete="off" aria-pressed="false">
            </div>
            <div class="item-content-primary">
                <div class="content-text-primary">Camera</div>
                <div class="content-text-secondary">Microsoft Corporation</div>
            </div>
        </div>
        <div class="entity-list-item">
            <div class="item-icon">
                <span class="glyph glyph-report-hacked"></span>
            </div>
            <div class="item-content-secondary">
                <button type="button" data-toggle="button" class="btn btn-toggle-switch" autocomplete="off" aria-pressed="false">
            </div>
            <div class="item-content-primary">
                <div class="content-text-primary">Defender</div>
                <div class="content-text-secondary">Microsoft Corporation</div>
            </div>
        </div>
        <div class="entity-list-item">
            <div class="item-icon">
                <span class="glyph glyph-mail"></span>
            </div>
            <div class="item-content-primary">
                <div class="content-text-primary">Mail and Calendar</div>
                <div class="content-text-secondary">Microsoft Corporation</div>
                <div class="progress">
                    <div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 60%;">
                        <span class="sr-only">60%</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="entity-list-item">
            <div class="item-icon">
                <img src=""/>
            </div>
            <div class="item-content-secondary">
                <div  class="content-text-primary">Unavailable</div>
            </div>
            <div class="item-content-primary">
                <div class="content-text-primary">App</div>
                <div class="content-text-secondary">Microsoft Corporation</div>
            </div>
        </div>
    </div>
			</column>
			`,
            onclick: this.click
        }

    }

    click(evt) {

        window.controller.goTo('settings');
        evt.stopPropagation();


    }

}
