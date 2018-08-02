//@flow

window.assign = Object.assign;

export default {

	launchScript:function(SpiceJS, Store){

		let app = SpiceJS.create();
		//TODO: why no work
		//eval("Object.assign(app.options,Store.settings.options)");
		window.assign(app.options,Store.settings.options);

		app.main = {

		    init:function() {

		    },

		    update:function() {

		    },

		    draw:function() {

		       this.visuals.text_ext(this.app.fps,240,25,"#FFFFFF",0.5,1,1,"25","");

		    }

		};

		app.Start(Store.settings.resolution.x, Store.settings.resolution.y);//TODO: make vector compatible

		return app;
	},

	state:0,

	sprites:[],
	objects:[],
	backgrounds:[],

	rooms:[],

	scripts:[],
	libs:[]

}
