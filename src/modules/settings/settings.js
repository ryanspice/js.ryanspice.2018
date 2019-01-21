//@flow

import View from "../view";

export default class Settings extends View {

		test = null

    constructor(ref ? : HTML5Element) {
        super(ref);
        return {
          link: this,
          type: `view`,
          id: 'settings-view',
          className: 'slide',
          innerHTML: `
						<h2>settings</h2>
						<input style="opacity:0;"></input>
						<br/>
						<spread></spread>
					`,
					mounted:async ()=>{

						require('./settings.scss');

						await template.defer.push(new SettingsIcon(this,{
								title:'<strike style="opacity:0.5;">Defaults</strike>',
								icon:'sliders',
								path:'default-settings',
								action:SettingsDefaults
						}));

						await template.defer.push(new SettingsIcon(this,{
								title:'about',
								icon:'info',
								path:'info-settings',
								action:SettingsInfo
						}));

						await template.iterateTemplate();
					}

        }

    }

}

class SettingsIcon extends View {

	test:any = null;

	 constructor(ref,settings){

		 super(ref);

		 return {
			type:'section',
			renderTo:'#settings-view spread',
			innerHTML:`<i data-feather="${settings.icon}" >23123</i><span><h3>${settings.title}</h3></span>`,
			onclick:async ()=>{

					if (!this.test){

						this.test = new settings.action(this);
						template.defer = await [];
						template.template[0] = await [this.test];
						await template.a();
						await template.iterateTemplate();
						await this.controller.goTo(settings.path);

				} else {

					await this.controller.goTo(settings.path);

				}

		 },
		 mounted:()=>{
			 window.icons.replace();
		 }

	 }

	}

}

class SettingsInfo extends View {


    constructor(ref ? : HTML5Element) {

        super(ref)

        return {
            link: this,
            type: `view`,
            id: 'info-settings-view',
            className: 'slide',
            style: ``,
            innerHTML: `
						<column class="col-md-24"style="text-align:center;">
					<h2>about</h2>
					<h4>webpack 4</h4>
					<h4>winstrap 0.5.12</h4>
					<h4>babel 6</h4>
					<h4>async.2018</h4>
				</column>`,
            onclick: this.click
        }

    }

    click(evt) {

        this.controller.goTo('settings');
        evt.stopPropagation();


    }

}

class SettingsDefaults extends View {


    constructor(ref ? : HTML5Element) {

        super(ref)

        return {
            link: this,
            type: `view`,
            id: 'default-settings-view',
            className: 'slide',
            style: `background:transparent;margin-top:10%;margin-left:10%;margin:0px auto;padding:64px;`,
            innerHTML: `
				<column class='col-md-12'>
					<h2>defaults</h2>
					<p>
					<div class="btn-group">
					        <button type="button" data-toggle="button" class="btn btn-toggle-switch" autocomplete="off" aria-pressed="false">
					            <span class="stateLabel stateLabel-on">Do load previous project on load</span>
									            <span class="stateLabel stateLabel-off">Do not load previous project on load</span>
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
							<form class="hidden">
					        <div class="form-group">
					            <label for="exampleInputEmail1">Email address</label>
					            <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Enter email">
					        </div>

					        <div class="form-group">
					            <label for="exampleInputPassword1">Password</label>
					            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
					        </div>

					        <div class="form-group hidden">
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
			<column class='col-md-12'>
				<h2>extensions</h2>
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

        this.controller.goTo('settings');
        evt.stopPropagation();


    }

}
