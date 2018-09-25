//@flow

declare module "SpiceJS" {


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
