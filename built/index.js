"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var backstabMode;
(function (backstabMode) {
    backstabMode["cover"] = "cover";
    backstabMode["mixin"] = "mixin";
})(backstabMode || (backstabMode = {}));
var Backstab = /** @class */ (function () {
    function Backstab(config) {
        this.content = config.content || '';
        this.mode = config.mode || 'cover';
        this.container = config.container || document.body;
        this.style = this.initStyle(config.style);
        this.generateDOM();
    }
    Backstab.prototype.initStyle = function (styleConfig) {
        if (styleConfig === void 0) { styleConfig = {}; }
        return styleConfig = __assign({ gridHeight: 60, gridWidth: 150, fontSize: 20, opacity: 0.5, rotate: -15 }, styleConfig);
    };
    Backstab.prototype.generateDOM = function () {
        var mask = document.createElement('div');
        mask.style.position = 'fixed';
        mask.style.pointerEvents = 'none';
        mask.style.top = '0';
        mask.style.left = '0';
        mask.style.right = '0';
        mask.style.bottom = '0';
        mask.style.zIndex = '9999';
        this.container.appendChild(mask);
        var screenWidth = window.screen.width;
        var screenHeight = window.screen.height;
        var xGridNum = Math.ceil(window.screen.width / this.style.gridWidth);
        var yGridNum = Math.ceil(window.screen.height / this.style.gridHeight);
        var childrenHTML = '';
        for (var i = 0; i < yGridNum; i++) {
            for (var j = 0; j < xGridNum; j++) {
                var style = [
                    "position: fixed",
                    "width: " + this.style.gridWidth + "px",
                    "height: " + this.style.gridHeight + "px",
                    "left: " + j * this.style.gridWidth + "px",
                    "top: " + i * this.style.gridHeight + "px",
                    "display: flex",
                    "align-items: center",
                    "justify-content: center",
                    "font-size: " + this.style.fontSize + "px",
                    "opacity: " + this.style.opacity,
                    "transform: rotate(" + this.style.rotate + "deg)",
                    "font-weight: 700"
                ];
                childrenHTML += "<div style=\"" + style.join(';') + "\">" + this.content + "</div>";
            }
        }
        mask.innerHTML = childrenHTML;
    };
    return Backstab;
}());
exports.default = Backstab;
