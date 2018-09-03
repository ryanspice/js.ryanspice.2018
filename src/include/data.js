//@flow

import {default as css} from "./style.js";

import {default as loop} from '../../node_modules/async.2018/src/core/def/loop';

import Controller from './controller';

const controller = new Controller();
window.controller = controller;

/* */

export default new Array(controller.views);
