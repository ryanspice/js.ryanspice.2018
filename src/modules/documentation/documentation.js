/* @flow */

import View from "../view";

const docs = `

				<div style="">

            <p>
                </p><h1><span class="pageTitle0" style="position: relative; opacity: 11;">App</span></h1>
                <span class="indent pageParagraph0" id="pageParagraph0"><p></p><h5>.OnLoad</h5><p>For your app to correctly initialize. During this time you can specify <i>App.options</i> before the application begins. Every app must include an App.OnLoad override function.</p><pre><code class="js hljs javascript javascript javascript javascript javascript javascript javascript javascript javascript javascript javascript javascript">App.OnLoad = <span class="hljs-function"><span class="hljs-keyword"><span class="hljs-function"><span class="hljs-keyword"><span class="hljs-function"><span class="hljs-keyword"><span class="hljs-function"><span class="hljs-keyword"><span class="hljs-function"><span class="hljs-keyword"><span class="hljs-function"><span class="hljs-keyword"><span class="hljs-function"><span class="hljs-keyword"><span class="hljs-function"><span class="hljs-keyword"><span class="hljs-function"><span class="hljs-keyword"><span class="hljs-function"><span class="hljs-keyword"><span class="hljs-function"><span class="hljs-keyword"><span class="hljs-function"><span class="hljs-keyword">function</span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span><span class="hljs-params"><span class="hljs-function"><span class="hljs-params"><span class="hljs-function"><span class="hljs-params"><span class="hljs-function"><span class="hljs-params"><span class="hljs-function"><span class="hljs-params"><span class="hljs-function"><span class="hljs-params"><span class="hljs-function"><span class="hljs-params"><span class="hljs-function"><span class="hljs-params"><span class="hljs-function"><span class="hljs-params"><span class="hljs-function"><span class="hljs-params"><span class="hljs-function"><span class="hljs-params"><span class="hljs-function"><span class="hljs-params">()</span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span>{

    <span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment">//App.Init(String::title, Int::width, Int::height)</span></span></span></span></span></span></span></span></span></span></span></span>
    App.Init(<span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string">"Title"</span></span></span></span></span></span></span></span></span></span></span></span>, <span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number">1920</span></span></span></span></span></span></span></span></span></span></span></span>, <span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number">480</span></span></span></span></span></span></span></span></span></span></span></span>);

};</code></pre><h5>.main</h5><p>At this point the application won't do anything aside from positioning and scaling the canvas. In order to begin programming your application you must override the <i>main loop</i>.</p><p>This is what an empty <i>App.main</i> override function looks like.</p><pre><code class="js hljs javascript javascript javascript javascript javascript javascript javascript javascript javascript javascript javascript javascript">App.main = {

 init:<span class="hljs-function"><span class="hljs-keyword"><span class="hljs-function"><span class="hljs-keyword"><span class="hljs-function"><span class="hljs-keyword"><span class="hljs-function"><span class="hljs-keyword"><span class="hljs-function"><span class="hljs-keyword"><span class="hljs-function"><span class="hljs-keyword"><span class="hljs-function"><span class="hljs-keyword"><span class="hljs-function"><span class="hljs-keyword"><span class="hljs-function"><span class="hljs-keyword"><span class="hljs-function"><span class="hljs-keyword"><span class="hljs-function"><span class="hljs-keyword"><span class="hljs-function"><span class="hljs-keyword">function</span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span><span class="hljs-params"><span class="hljs-function"><span class="hljs-params"><span class="hljs-function"><span class="hljs-params"><span class="hljs-function"><span class="hljs-params"><span class="hljs-function"><span class="hljs-params"><span class="hljs-function"><span class="hljs-params"><span class="hljs-function"><span class="hljs-params"><span class="hljs-function"><span class="hljs-params"><span class="hljs-function"><span class="hljs-params"><span class="hljs-function"><span class="hljs-params"><span class="hljs-function"><span class="hljs-params"><span class="hljs-function"><span class="hljs-params">()</span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span>{},

 update:<span class="hljs-function"><span class="hljs-keyword"><span class="hljs-function"><span class="hljs-keyword"><span class="hljs-function"><span class="hljs-keyword"><span class="hljs-function"><span class="hljs-keyword"><span class="hljs-function"><span class="hljs-keyword"><span class="hljs-function"><span class="hljs-keyword"><span class="hljs-function"><span class="hljs-keyword"><span class="hljs-function"><span class="hljs-keyword"><span class="hljs-function"><span class="hljs-keyword"><span class="hljs-function"><span class="hljs-keyword"><span class="hljs-function"><span class="hljs-keyword"><span class="hljs-function"><span class="hljs-keyword">function</span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span><span class="hljs-params"><span class="hljs-function"><span class="hljs-params"><span class="hljs-function"><span class="hljs-params"><span class="hljs-function"><span class="hljs-params"><span class="hljs-function"><span class="hljs-params"><span class="hljs-function"><span class="hljs-params"><span class="hljs-function"><span class="hljs-params"><span class="hljs-function"><span class="hljs-params"><span class="hljs-function"><span class="hljs-params"><span class="hljs-function"><span class="hljs-params"><span class="hljs-function"><span class="hljs-params"><span class="hljs-function"><span class="hljs-params">()</span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span>{},

 draw:<span class="hljs-function"><span class="hljs-keyword"><span class="hljs-function"><span class="hljs-keyword"><span class="hljs-function"><span class="hljs-keyword"><span class="hljs-function"><span class="hljs-keyword"><span class="hljs-function"><span class="hljs-keyword"><span class="hljs-function"><span class="hljs-keyword"><span class="hljs-function"><span class="hljs-keyword"><span class="hljs-function"><span class="hljs-keyword"><span class="hljs-function"><span class="hljs-keyword"><span class="hljs-function"><span class="hljs-keyword"><span class="hljs-function"><span class="hljs-keyword"><span class="hljs-function"><span class="hljs-keyword">function</span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span><span class="hljs-params"><span class="hljs-function"><span class="hljs-params"><span class="hljs-function"><span class="hljs-params"><span class="hljs-function"><span class="hljs-params"><span class="hljs-function"><span class="hljs-params"><span class="hljs-function"><span class="hljs-params"><span class="hljs-function"><span class="hljs-params"><span class="hljs-function"><span class="hljs-params"><span class="hljs-function"><span class="hljs-params"><span class="hljs-function"><span class="hljs-params"><span class="hljs-function"><span class="hljs-params"><span class="hljs-function"><span class="hljs-params">()</span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span>{}

};</code></pre><p>You must have these functions in order for the application to function properly.</p><h5>.create(prototype)</h5><p>Returns an object constructed from a <a href="?page=2&amp;tag=Room">Room</a> prototype, will inherit: <i>app, visuals, and graphics</i>.</p><h5>.getCurrent()</h5><p>Returns the current state object.</p><h5>.getDelta()</h5><p>Returns a float, the application's delta time.</p><h5>.getScale()</h5><p>Returns the scale of the canvas.</p><h5>.getWidth()</h5><p>Returns the set width of the canvas.</p><h5>.getHeight()</h5><p>Returns the set height of the canvas.</p><h5>.getScaledHeight()</h5><p>Returns the scaled height of the canvas.</p><h5>.getScaledWidth()</h5><p>Returns scaled width of the canvas.</p></span>
            <p></p>

            <p>
                </p><h2><span class="pageTitle1">user</span></h2>
                <span class="indent pageParagraph2" id="pageParagraph2"><h5>.response</h5><p><i>App.user.response</i> is the main user object which contains response data retrieved from facebook. {name,id,locale,gender,update_time,timezone,quotes,response,} </p><p>A simple way to get a facebook response.</p><pre><code class="js hljs javascript javascript javascript javascript javascript javascript javascript javascript javascript javascript"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment">//To ensure your data is filled, use a callback return your response data.</span></span></span></span></span></span></span></span></span></span>
<span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword">var</span></span></span></span></span></span></span></span></span></span> facebook = <span class="hljs-function"><span class="hljs-keyword"><span class="hljs-function"><span class="hljs-keyword"><span class="hljs-function"><span class="hljs-keyword"><span class="hljs-function"><span class="hljs-keyword"><span class="hljs-function"><span class="hljs-keyword"><span class="hljs-function"><span class="hljs-keyword"><span class="hljs-function"><span class="hljs-keyword"><span class="hljs-function"><span class="hljs-keyword"><span class="hljs-function"><span class="hljs-keyword"><span class="hljs-function"><span class="hljs-keyword">function</span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span><span class="hljs-params"><span class="hljs-function"><span class="hljs-params"><span class="hljs-function"><span class="hljs-params"><span class="hljs-function"><span class="hljs-params"><span class="hljs-function"><span class="hljs-params"><span class="hljs-function"><span class="hljs-params"><span class="hljs-function"><span class="hljs-params"><span class="hljs-function"><span class="hljs-params"><span class="hljs-function"><span class="hljs-params"><span class="hljs-function"><span class="hljs-params">()</span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span>{ <span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword">return</span></span></span></span></span></span></span></span></span></span> App.user.pull(); };

<span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment">//Your facebook ID, callback function</span></span></span></span></span></span></span></span></span></span>
App.user.fbconnect(id, facebook);</code></pre><h5>.fbconnect(id, callback)</h5><p> Providing your facebook userid, you can populate <i>App.user.request</i>. Passing a CallBack function allows you to call <i>App.user.pull()</i> as soon as the data has arrived. </p><h5>.pull()</h5><p>Returns the response data from a facebook connect. You must call <i>App.user.facebook_connect(FacebookID, CallBack)</i> to populate the response data.</p></span>
            <p></p>

            <p>
                </p><h2><span class="pageTitle2">ext</span></h2>
                <span class="indent pageParagraph3" id="pageParagraph3"><h5>.ext.useragent</h5><p>Useragent assists in trying to figure out just exactly what kind of device you are on. <i>App.ext.useragent.agent</i> will store your browsers useragent.</p><p>The app will then sniff the agent and other features to populate the following values:</p><pre><code class="js hljs javascript javascript javascript javascript javascript javascript javascript javascript javascript"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment">//Since your useragent doesnt change, you can simply query the following.</span></span></span></span></span></span></span></span></span>
.useragent.agent 		<span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment">//Your navigator.useragent, </span></span></span></span></span></span></span></span></span>
.useragent.mouse 		<span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment">// true or false</span></span></span></span></span></span></span></span></span>
.useragent.touch 		<span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment">//</span></span></span></span></span></span></span></span></span>
.useragent.keyboard 	/
.useragent.windows
.useragent.chrome
.useragent.safari
.useragent.iemobile
.useragent.nokia
.useragent.ie
.useragent.blackberry
.useragent.playbook
.useragent.bb10
.useragent.mobile 	</code></pre><h5>.ext.colour</h5><p>SpiceJS colour includes getting and setting methods, and works to helps reduce calls to the canvas when drawing within the loop.</p><pre><code class="js hljs javascript javascript javascript javascript javascript javascript javascript javascript javascript"><span class="hljs-literal"><span class="hljs-literal"><span class="hljs-literal"><span class="hljs-literal"><span class="hljs-literal"><span class="hljs-literal"><span class="hljs-literal"><span class="hljs-literal"><span class="hljs-literal">undefined</span></span></span></span></span></span></span></span></span></code></pre><h5>.ext.metatag</h5><p>SpiceJS metatag allows you to keep a clean looking index while still being able to pick and choose what metatags get injected.</p><pre><code class="js hljs javascript javascript javascript javascript javascript javascript javascript javascript javascript"><span class="hljs-literal"><span class="hljs-literal"><span class="hljs-literal"><span class="hljs-literal"><span class="hljs-literal"><span class="hljs-literal"><span class="hljs-literal"><span class="hljs-literal"><span class="hljs-literal">undefined</span></span></span></span></span></span></span></span></span></code></pre><h5>.ext.cursor</h5><p>SpiceJS cursor has built in methods to change the current cursor. The function also helps reduce calls when assigning cursors in the loopp.</p><pre><code class="js hljs javascript javascript javascript javascript javascript javascript javascript javascript javascript"><span class="hljs-literal"><span class="hljs-literal"><span class="hljs-literal"><span class="hljs-literal"><span class="hljs-literal"><span class="hljs-literal"><span class="hljs-literal"><span class="hljs-literal"><span class="hljs-literal">undefined</span></span></span></span></span></span></span></span></span></code></pre><h5>.ext.connect</h5><p>Makes an ajax request. If the response comes back returns true otherwise false. A connected flag determines wither or not you are on internet.</p><pre><code class="js hljs javascript javascript javascript javascript javascript javascript javascript javascript javascript"><span class="hljs-literal"><span class="hljs-literal"><span class="hljs-literal"><span class="hljs-literal"><span class="hljs-literal"><span class="hljs-literal"><span class="hljs-literal"><span class="hljs-literal"><span class="hljs-literal">undefined</span></span></span></span></span></span></span></span></span></code></pre> <h5>.ext.title(title)</h5><p>Call this function at any time to dynamically assign the title of the document. Note that this is also done in App.init.</p><p></p><h5>.ext.top(bool)</h5><p>This function tells the canvas wither or not to snap to the top of the page and scale based on the height of the document rather than the width.</p> </span>
            <p></p>

            <p>
                </p><h2><span class="pageTitle3">input</span></h2>
                <span class="indent pageParagraph4" id="pageParagraph4"><h5>mouse</h5><p>SpiceJS tracks input data and stores it in side App.ext.input. Below you can see a list of tested and accessable funtions used for mouse input:</p><pre><code class="js hljs javascript javascript javascript javascript javascript javascript javascript javascript"></code></pre><h5>keyboard</h5><p>SpiceJS logs the keys which are currently pressed and or released. Horizontal and Vertical values will also be logged as input with w,a,s,d and the arrow keys. </p><pre><code class="js hljs javascript javascript javascript javascript javascript javascript javascript javascript"></code></pre><h5>touched</h5><p>App.ext.input.touched stores data for touch screen devices, this compontent is currently in the works and is being tested.</p><pre><code class="js hljs javascript javascript javascript javascript javascript javascript javascript javascript"></code></pre></span>
            <p></p>

            <p>
                </p><h2><span class="pageTitle4">client</span></h2>
                <span class="indent pageParagraph5" id="pageParagraph5"><pre><code class="js hljs javascript javascript javascript javascript javascript javascript javascript"><span class="hljs-literal"><span class="hljs-literal"><span class="hljs-literal"><span class="hljs-literal"><span class="hljs-literal"><span class="hljs-literal"><span class="hljs-literal">undefined</span></span></span></span></span></span></span></code></pre></span>
            <p></p>

            <p>
                </p><h2><span class="pageTitle5">math + update loop</span></h2>
                <span class="indent pageParagraph6" id="pageParagraph6"><pre><code class="js hljs javascript javascript javascript javascript javascript javascript"><span class="hljs-literal"><span class="hljs-literal"><span class="hljs-literal"><span class="hljs-literal"><span class="hljs-literal"><span class="hljs-literal">undefined</span></span></span></span></span></span></code></pre></span>
            <p></p>

            <p>
                </p><h2><span class="pageTitle6">graphics</span></h2>
                <span class="indent pageParagraph7" id="pageParagraph7"><pre><code class="js hljs javascript javascript javascript javascript javascript"><span class="hljs-literal"><span class="hljs-literal"><span class="hljs-literal"><span class="hljs-literal"><span class="hljs-literal">undefined</span></span></span></span></span></code></pre></span>
            <p></p>

            <p>
                </p><h2><span class="pageTitle7">visuals</span></h2>
                <span class="indent pageParagraph8" id="pageParagraph8"><pre><code class="js hljs javascript javascript javascript javascript"><span class="hljs-literal"><span class="hljs-literal"><span class="hljs-literal"><span class="hljs-literal">undefined</span></span></span></span></code></pre></span>
            <p></p>

            <p>
                </p><h2><span class="pageTitle8">audio</span></h2>
                <span class="indent pageParagraph9" id="pageParagraph9"><pre><code class="js hljs javascript javascript javascript"><span class="hljs-literal"><span class="hljs-literal"><span class="hljs-literal">undefined</span></span></span></code></pre></span>
            <p></p>

            <p>
                </p><h2><span class="pageTitle9">cookies</span></h2>
                <span class="indent pageParagraph10" id="pageParagraph10"></span>
            <p></p>

            <p>
                </p><h2><span class="pageTitle11"></span></h2>
                <span class="indent pageParagraph1" id="pageParagraph1"></span>
            <p></p>

            <p>
                </p><h5><a href="#" onclick="window.scrollTo(0,0)"><div class="pageRelated">Back to Top</div><br><br></a></h5>
            <p></p>

        </div>
				`;


export default class Documentation extends View {

	constructor(ref){

		super(ref)

		return {
			link:this,
			type:`view`,
			id:'tertiary-view',
			className:'slide ',
			style:``,
			innerHTML:`
				<column class="col-md-4 hidden-sm hidden-xs pull-left hidden">
          <div id="sideBar">
              <p class="sideBarNav"><a href="#">home</a></p>
              <p class="sideBarNav"><a href="#">documentation</a></p>
              <p class="sideBarNav"><a href="#">about</a> </p>
              <p class="sideBarNav"><a href="#">develop</a> </p>
              <p class="sideBarNav"><a href="#">publish</a> </p>
              <p class="sideBarNav"><a href="#">community</a> </p>
              <p class="sideBarNav"><a href="#">download</a></p>
          </div>

				</column>
				<column class="col-xl-22 col-md-offset-1 col-sm-offset-1">
					<h2>documentation</h2>
					${docs}
				</column>`
		}

	}

}
