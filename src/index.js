//@flow

//import * as bootstrap from 'bootstrap.native/dist/bootstrap-native-v4';

require(`./assets/css/global.scss`);

import * as Template from "./render/template";

const context:HTMLDocument = document;
context.onreadystatechange = evt => new Template.AsyncRenderPipe(evt);
