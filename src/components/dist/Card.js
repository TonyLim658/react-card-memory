"use strict";
exports.__esModule = true;
var react_1 = require("react");
var piggy512x512_png_1 = require("../images/piggy512x512.png");
// Styles
var Card_style_1 = require("./Card.style");
var Card = function (_a) {
    var callback = _a.callback, imagePath = _a.imagePath, revealed = _a.revealed;
    return (react_1["default"].createElement(Card_style_1.Wrapper, null,
        react_1["default"].createElement("div", { className: 'card' },
            react_1["default"].createElement("div", { className: 'hexagon' },
                react_1["default"].createElement("button", { disabled: revealed },
                    react_1["default"].createElement("img", { src: revealed ? imagePath : piggy512x512_png_1["default"], alt: 'img' }))))));
};
exports["default"] = Card;
