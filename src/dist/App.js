"use strict";
exports.__esModule = true;
var react_1 = require("react");
var logo_svg_1 = require("./logo.svg");
require("./App.css");
// Components
var Card_1 = require("./components/Card");
var App = function () {
    var checkAnswer = function (e) {
    };
    return (react_1["default"].createElement("div", { className: "App" },
        react_1["default"].createElement("header", { className: "App-header" },
            react_1["default"].createElement("img", { src: logo_svg_1["default"], className: "App-logo", alt: "logo" }),
            react_1["default"].createElement(Card_1["default"], { callback: checkAnswer, imagePath: './images/master_seal.jpg', revealed: false }))));
};
exports["default"] = App;
