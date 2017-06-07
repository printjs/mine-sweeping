(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["MyLibrary"] = factory();
	else
		root["MyLibrary"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/assets/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 扫雷的棋盘
 * author：wjt
 * date:2017/6/6
 * params @param{type}
 * ten 十个雷 棋盘大小8X8
 * forty 四十个雷 棋盘大小16X16
 * ninetyNine 九十九个雷 棋盘大小30X16
 */
var Checkerboard = (function () {
    function Checkerboard(type) {
        var _this = this;
        this.initCheckBoard = function (x, y, mine) {
            for (var i = 0; i < x; i++) {
                _this.checkBoard[i] = new Array();
                for (var j = 0; j < y; j++) {
                    _this.checkBoard[i][j] = 0;
                }
            }
            for (var $index in mine) {
                var arr = void 0;
                arr = {
                    1: {
                        message: typeof _this.checkBoard[mine[$index].x - 1] == "undefined" ? null : typeof _this.checkBoard[mine[$index].x - 1][mine[$index].y - 1] == "undefined" ? null : _this.checkBoard[mine[$index].x - 1][mine[$index].y - 1],
                        x: mine[$index].x - 1,
                        y: mine[$index].y - 1
                    },
                    2: {
                        message: typeof _this.checkBoard[mine[$index].x - 1] == "undefined" ? null : typeof _this.checkBoard[mine[$index].x - 1][mine[$index].y] == "undefined" ? null : _this.checkBoard[mine[$index].x - 1][mine[$index].y],
                        x: mine[$index].x - 1,
                        y: mine[$index].y
                    },
                    3: {
                        message: typeof _this.checkBoard[mine[$index].x - 1] == "undefined" ? null : typeof _this.checkBoard[mine[$index].x - 1][mine[$index].y + 1] == "undefined" ? null : _this.checkBoard[mine[$index].x - 1][mine[$index].y + 1],
                        x: mine[$index].x - 1,
                        y: mine[$index].y + 1
                    },
                    4: {
                        message: typeof _this.checkBoard[mine[$index].x] == "undefined" ? null : typeof _this.checkBoard[mine[$index].x][mine[$index].y - 1] == "undefined" ? null : _this.checkBoard[mine[$index].x][mine[$index].y - 1],
                        x: mine[$index].x,
                        y: mine[$index].y - 1
                    },
                    5: {
                        message: typeof _this.checkBoard[mine[$index].x] == "undefined" ? null : typeof _this.checkBoard[mine[$index].x][mine[$index].y + 1] == "undefined" ? null : _this.checkBoard[mine[$index].x][mine[$index].y + 1],
                        x: mine[$index].x,
                        y: mine[$index].y + 1
                    },
                    6: {
                        message: typeof _this.checkBoard[mine[$index].x + 1] == "undefined" ? null : typeof _this.checkBoard[mine[$index].x + 1][mine[$index].y - 1] == "undefined" ? null : _this.checkBoard[mine[$index].x + 1][mine[$index].y - 1],
                        x: mine[$index].x + 1,
                        y: mine[$index].y - 1
                    },
                    7: {
                        message: typeof _this.checkBoard[mine[$index].x + 1] == "undefined" ? null : typeof _this.checkBoard[mine[$index].x + 1][mine[$index].y] == "undefined" ? null : _this.checkBoard[mine[$index].x + 1][mine[$index].y],
                        x: mine[$index].x + 1,
                        y: mine[$index].y
                    },
                    8: {
                        message: typeof _this.checkBoard[mine[$index].x + 1] == "undefined" ? null : typeof _this.checkBoard[mine[$index].x + 1][mine[$index].y + 1] == "undefined" ? null : _this.checkBoard[mine[$index].x + 1][mine[$index].y + 1],
                        x: mine[$index].x + 1,
                        y: mine[$index].y + 1
                    }
                };
                _this.checkBoard[mine[$index].x][mine[$index].y] = -1;
                for (var $index_1 in arr) {
                    if (typeof arr[$index_1].message != "object" && arr[$index_1].message != -1) {
                        _this.checkBoard[arr[$index_1].x][arr[$index_1].y] += 1;
                    }
                }
            }
        };
        this.createMine = function (x, y, amount) {
            var temp = new function () { };
            var condition = amount;
            var arr = Object.keys(temp);
            var count = arr.length;
            var m;
            var n;
            while (count < condition) {
                m = Math.floor(Math.random() * (x - 1));
                n = Math.floor(Math.random() * (y - 1));
                temp[m + '' + n] = {
                    x: m,
                    y: n
                };
                arr = Object.keys(temp);
                count = arr.length;
            }
            return temp;
        };
        this.checkBoard = new Array();
        this.initObj = {
            "ten": function (x, y) {
                if (x === void 0) { x = 8; }
                if (y === void 0) { y = 8; }
                _this.initCheckBoard(x, y, _this.createMine(x, y, 10));
            },
            "forty": function (x, y) {
                if (x === void 0) { x = 16; }
                if (y === void 0) { y = 16; }
                _this.initCheckBoard(x, y, _this.createMine(x, y, 40));
            },
            "ninetyNine": function (x, y) {
                if (x === void 0) { x = 30; }
                if (y === void 0) { y = 16; }
                _this.initCheckBoard(x, y, _this.createMine(x, y, 99));
            }
        };
        this.initObj[type]();
    }
    return Checkerboard;
}());
exports.Checkerboard = Checkerboard;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var checkBoard_1 = __webpack_require__(0);
var test = new checkBoard_1.Checkerboard("ninetyNine");
console.log(test.checkBoard);
var mineClearance = (function () {
    function mineClearance() {
    }
    return mineClearance;
}());


/***/ })
/******/ ]);
});
//# sourceMappingURL=main.js.map