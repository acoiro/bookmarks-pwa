define(["./my-app.js"],function(_myApp){"use strict";function _templateObject2_f27738205a2511e9a7190fe50fc9bf92(){var data=babelHelpers.taggedTemplateLiteral(["\n        .price {\n          text-align: center;\n        }\n\n        .price .tag {\n          font-size: 82px;\n          font-weight: bold;\n        }\n\n        .price .frequency {\n          font-size: 12px;\n          opacity: 0.8;\n        }\n      "]);_templateObject2_f27738205a2511e9a7190fe50fc9bf92=function _templateObject2_f27738205a2511e9a7190fe50fc9bf92(){return data};return data}function _templateObject_f27738205a2511e9a7190fe50fc9bf92(){var data=babelHelpers.taggedTemplateLiteral(["\n      <div>\n        <app-header></app-header>\n        <section>\n          <h2>Pricing</h2>\n          <div class=\"price\">\n            <div class=\"tag\">$1</div>\n            <div class=\"frequency\">per month</div>\n          </div>\n        </section>\n      </div>\n    "]);_templateObject_f27738205a2511e9a7190fe50fc9bf92=function _templateObject_f27738205a2511e9a7190fe50fc9bf92(){return data};return data}var AppPricing=function(_PageViewElement){babelHelpers.inherits(AppPricing,_PageViewElement);function AppPricing(){babelHelpers.classCallCheck(this,AppPricing);return babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(AppPricing).apply(this,arguments))}babelHelpers.createClass(AppPricing,[{key:"render",value:function render(){return(0,_myApp.html)(_templateObject_f27738205a2511e9a7190fe50fc9bf92())}}],[{key:"styles",get:function get(){return[_myApp.SharedStyles,(0,_myApp.css)(_templateObject2_f27738205a2511e9a7190fe50fc9bf92())]}}]);return AppPricing}(_myApp.PageViewElement);window.customElements.define("app-pricing",AppPricing)});