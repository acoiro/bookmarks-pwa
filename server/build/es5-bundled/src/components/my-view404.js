define(["./my-app.js"],function(_myApp){"use strict";function _templateObject_e088e7b0587411e9a7ac1b2c94ba09fc(){var data=babelHelpers.taggedTemplateLiteral(["\n      <section>\n        <h2>Oops! You hit a 404</h2>\n        <p>\n          The page you're looking for doesn't seem to exist. Head back\n          <a href=\"/\">home</a> and try again?\n        </p>\n      </section>\n    "]);_templateObject_e088e7b0587411e9a7ac1b2c94ba09fc=function _templateObject_e088e7b0587411e9a7ac1b2c94ba09fc(){return data};return data}var MyView404=function(_PageViewElement){babelHelpers.inherits(MyView404,_PageViewElement);function MyView404(){babelHelpers.classCallCheck(this,MyView404);return babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(MyView404).apply(this,arguments))}babelHelpers.createClass(MyView404,[{key:"render",value:function render(){return(0,_myApp.html)(_templateObject_e088e7b0587411e9a7ac1b2c94ba09fc())}}],[{key:"styles",get:function get(){return[_myApp.SharedStyles]}}]);return MyView404}(_myApp.PageViewElement);window.customElements.define("my-view404",MyView404)});