define(["exports","./my-app.js"],function(_exports,_myApp){"use strict";Object.defineProperty(_exports,"__esModule",{value:!0});_exports.$counterDefault=_exports.decrement=_exports.increment=_exports.DECREMENT=_exports.INCREMENT=_exports.$counter$1=_exports.$counter=void 0;function _templateObject3_e07119f0587411e9a7ac1b2c94ba09fc(){var data=babelHelpers.taggedTemplateLiteral(["\n      <section>\n        <h2>Redux example: simple counter</h2>\n        <div class=\"circle\">","</div>\n        <p>This page contains a reusable <code>&lt;counter-element&gt;</code>. The\n        element is not built in a Redux-y way (you can think of it as being a\n        third-party element you got from someone else), but this page is connected to the\n        Redux store. When the element updates its counter, this page updates the values\n        in the Redux store, and you can see the current value of the counter reflected in\n        the bubble above.</p>\n        <br><br>\n      </section>\n      <section>\n        <p>\n          <counter-element\n              value=\"","\"\n              clicks=\"","\"\n              @counter-incremented=\"","\"\n              @counter-decremented=\"","\">\n          </counter-element>\n        </p>\n      </section>\n    "]);_templateObject3_e07119f0587411e9a7ac1b2c94ba09fc=function _templateObject3_e07119f0587411e9a7ac1b2c94ba09fc(){return data};return data}function _templateObject2_e07119f0587411e9a7ac1b2c94ba09fc(){var data=babelHelpers.taggedTemplateLiteral(["\n        span {\n          width: 20px;\n          display: inline-block;\n          text-align: center;\n          font-weight: bold;\n        }\n      "]);_templateObject2_e07119f0587411e9a7ac1b2c94ba09fc=function _templateObject2_e07119f0587411e9a7ac1b2c94ba09fc(){return data};return data}function _templateObject_e07119f0587411e9a7ac1b2c94ba09fc(){var data=babelHelpers.taggedTemplateLiteral(["\n      <div>\n        <p>\n          Clicked: <span>","</span> times.\n          Value is <span>","</span>.\n          <button @click=\"","\" title=\"Add 1\">","</button>\n          <button @click=\"","\" title=\"Minus 1\">","</button>\n        </p>\n      </div>\n    "]);_templateObject_e07119f0587411e9a7ac1b2c94ba09fc=function _templateObject_e07119f0587411e9a7ac1b2c94ba09fc(){return data};return data}var INCREMENT="INCREMENT";_exports.INCREMENT=INCREMENT;var DECREMENT="DECREMENT";_exports.DECREMENT=DECREMENT;var increment=function increment(){return{type:INCREMENT}};_exports.increment=increment;var decrement=function decrement(){return{type:DECREMENT}};_exports.decrement=decrement;var counter={INCREMENT:INCREMENT,DECREMENT:DECREMENT,increment:increment,decrement:decrement};_exports.$counter=counter;var CounterElement=function(_LitElement){babelHelpers.inherits(CounterElement,_LitElement);babelHelpers.createClass(CounterElement,[{key:"render",value:function render(){return(0,_myApp.html)(_templateObject_e07119f0587411e9a7ac1b2c94ba09fc(),this.clicks,this.value,this._onIncrement,_myApp.plusIcon,this._onDecrement,_myApp.minusIcon)}}],[{key:"properties",get:function get(){return{clicks:{type:Number},value:{type:Number}}}},{key:"styles",get:function get(){return[_myApp.ButtonSharedStyles,(0,_myApp.css)(_templateObject2_e07119f0587411e9a7ac1b2c94ba09fc())]}}]);function CounterElement(){var _this;babelHelpers.classCallCheck(this,CounterElement);_this=babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(CounterElement).call(this));_this.clicks=0;_this.value=0;return _this}babelHelpers.createClass(CounterElement,[{key:"_onIncrement",value:function _onIncrement(){this.value++;this.clicks++;this.dispatchEvent(new CustomEvent("counter-incremented"))}},{key:"_onDecrement",value:function _onDecrement(){this.value--;this.clicks++;this.dispatchEvent(new CustomEvent("counter-decremented"))}}]);return CounterElement}(_myApp.LitElement);window.customElements.define("counter-element",CounterElement);var INITIAL_STATE={clicks:0,value:0},counter$1=function counter$1(){var state=0<arguments.length&&arguments[0]!==void 0?arguments[0]:INITIAL_STATE,action=1<arguments.length?arguments[1]:void 0;switch(action.type){case INCREMENT:return{clicks:state.clicks+1,value:state.value+1};case DECREMENT:return{clicks:state.clicks+1,value:state.value-1};default:return state;}};_exports.$counterDefault=counter$1;var counter$2={default:counter$1};_exports.$counter$1=counter$2;_myApp.store.addReducers({counter:counter$1});var MyView2=function(_connect){babelHelpers.inherits(MyView2,_connect);function MyView2(){babelHelpers.classCallCheck(this,MyView2);return babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(MyView2).apply(this,arguments))}babelHelpers.createClass(MyView2,[{key:"render",value:function render(){return(0,_myApp.html)(_templateObject3_e07119f0587411e9a7ac1b2c94ba09fc(),this._value,this._value,this._clicks,this._counterIncremented,this._counterDecremented)}},{key:"_counterIncremented",value:function _counterIncremented(){_myApp.store.dispatch(increment())}},{key:"_counterDecremented",value:function _counterDecremented(){_myApp.store.dispatch(decrement())}},{key:"stateChanged",value:function stateChanged(state){this._clicks=state.counter.clicks;this._value=state.counter.value}}],[{key:"properties",get:function get(){return{_clicks:{type:Number},_value:{type:Number}}}},{key:"styles",get:function get(){return[_myApp.SharedStyles]}}]);return MyView2}((0,_myApp.connect)(_myApp.store)(_myApp.PageViewElement));window.customElements.define("my-view2",MyView2)});