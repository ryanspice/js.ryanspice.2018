//@flow

declare module "SpiceJS" {


}

declare module "feather-icons" {


}

declare module "../node_modules/async.2018/src/index" {
	//core:any;
}

interface Document extends Document {

	onreadystatechange:Function;
	state:number;

}

interface Storage extends Storage {

	setObject:Function;
	getObject:Function;

}

interface AsyncPipes {

	requireCSS:Function;
	requireHTML:Function;
	requireIcons:Function;
	requireListeners:Function;
	requireMSG:Function;


}
