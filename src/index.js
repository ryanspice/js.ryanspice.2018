//@flow

import * as bootstrap from 'bootstrap.native/dist/bootstrap-native-v4';

require(`./assets/css/global.scss`);

//import * as winstrap from '../node_modules/winstrap/src/scss/winstrap.scss';

import * as Template from "./render/template";

import render from "./render";
console.log(render);
import menu from "./data/menu";

const context:HTMLDocument = document;
context.onreadystatechange = evt => new Template.AsyncRenderPipe(evt);
