define(["./my-app.js"],function(_myApp){"use strict";function _templateObject_f279d0305a2511e9a7190fe50fc9bf92(){var data=babelHelpers.taggedTemplateLiteral(["\n      <section>\n        <h2>Sign in</h2>\n      </section>\n    "]);_templateObject_f279d0305a2511e9a7190fe50fc9bf92=function _templateObject_f279d0305a2511e9a7190fe50fc9bf92(){return data};return data}var AppSignIn=function(_PageViewElement){babelHelpers.inherits(AppSignIn,_PageViewElement);function AppSignIn(){babelHelpers.classCallCheck(this,AppSignIn);return babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(AppSignIn).apply(this,arguments))}babelHelpers.createClass(AppSignIn,[{key:"render",value:function render(){return(0,_myApp.html)(_templateObject_f279d0305a2511e9a7190fe50fc9bf92())}}],[{key:"styles",get:function get(){return[_myApp.SharedStyles]}}]);return AppSignIn}(_myApp.PageViewElement);window.customElements.define("app-signin",AppSignIn)});