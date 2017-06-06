var Checkerboard = (function () {
    function Checkerboard(type) {
        var _this = this;
        this.initCheckBoard = function (x, y, mine) {
            var temp = [];
            for (var i = 0; i < x; i++) {
                var xTemp = [];
                for (var j = 0; j < y; j++) {
                    xTemp.push(0);
                }
                temp.push(xTemp);
            }
            console.log(temp);
            var _loop_1 = function ($index) {
                var arr = [
                    (function () {
                        if (temp[mine[$index].x - 1]) {
                            return typeof temp[mine[$index].x - 1][mine[$index].y - 1] == "undefined" ? null : temp[mine[$index].x - 1][mine[$index].y - 1];
                        }
                        else {
                            return null;
                        }
                    })(),
                    (function () {
                        if (temp[mine[$index].x - 1]) {
                            return typeof temp[mine[$index].x - 1][mine[$index].y] == "undefined" ? null : temp[mine[$index].x - 1][mine[$index].y - 1];
                        }
                        else {
                            return null;
                        }
                    })(),
                    (function () {
                        if (temp[mine[$index].x - 1]) {
                            return typeof temp[mine[$index].x - 1][mine[$index].y + 1] == "undefined" ? null : temp[mine[$index].x - 1][mine[$index].y - 1];
                        }
                        else {
                            return null;
                        }
                    })(),
                    (function () {
                        if (temp[mine[$index].x]) {
                            return typeof temp[mine[$index].x][mine[$index].y - 1] == "undefined" ? null : temp[mine[$index].x][mine[$index].y - 1];
                        }
                        else {
                            return null;
                        }
                    })(),
                    (function () {
                        if (temp[mine[$index].x]) {
                            return typeof temp[mine[$index].x][mine[$index].y + 1] == "undefined" ? null : temp[mine[$index].x][mine[$index].y + 1];
                        }
                        else {
                            return null;
                        }
                    })(),
                    (function () {
                        if (temp[mine[$index].x + 1]) {
                            return typeof temp[mine[$index].x + 1][mine[$index].y - 1] == "undefined" ? null : temp[mine[$index].x + 1][mine[$index].y - 1];
                        }
                        else {
                            return null;
                        }
                    })(),
                    (function () {
                        if (temp[mine[$index].x + 1]) {
                            return typeof temp[mine[$index].x + 1][mine[$index].y] == "undefined" ? null : temp[mine[$index].x + 1][mine[$index].y];
                        }
                        else {
                            return null;
                        }
                    })(),
                    (function () {
                        if (temp[mine[$index].x + 1]) {
                            return typeof temp[mine[$index].x + 1][mine[$index].y + 1] == "undefined" ? null : temp[mine[$index].x + 1][mine[$index].y + 1];
                        }
                        else {
                            return null;
                        }
                    })()
                    // temp[mine[$index].x-1]||typeof temp[mine[$index].x-1][mine[$index].y] == "undefined"?null:temp[mine[$index].x-1][mine[$index].y],
                    // temp[mine[$index].x-1]||typeof temp[mine[$index].x-1][mine[$index].y+1] == "undefined"?null:temp[mine[$index].x-1][mine[$index].y+1],
                    // temp[mine[$index].x]||typeof temp[mine[$index].x][mine[$index].y-1] == "undefined"?null:temp[mine[$index].x][mine[$index].y-1],
                    // temp[mine[$index].x]||typeof temp[mine[$index].x][mine[$index].y+1] == "undefined"?null:temp[mine[$index].x][mine[$index].y+1],
                    // temp[mine[$index].x+1]||typeof temp[mine[$index].x+1][mine[$index].y-1] == "undefined"?null:temp[mine[$index].x+1][mine[$index].y-1],
                    // temp[mine[$index].x+1]||typeof temp[mine[$index].x+1][mine[$index].y] == "undefined"?null:temp[mine[$index].x+1][mine[$index].y],
                    // temp[mine[$index].x+1]||typeof temp[mine[$index].x+1][mine[$index].y+1] == "undefined"?null:temp[mine[$index].x+1][mine[$index].y+1]
                ];
                temp[mine[$index].x][mine[$index].y] = -1;
                for (var i = 0, len = arr.length; i < len; i++) {
                    if (typeof arr[i] != "object" && arr[i] != -1) {
                        arr[i] += 1;
                    }
                }
                console.log(arr);
            };
            for (var $index in mine) {
                _loop_1($index);
            }
            return temp;
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
        this.initObj = {
            "ten": function (x, y) {
                if (x === void 0) { x = 8; }
                if (y === void 0) { y = 8; }
                _this.checkBoard = _this.initCheckBoard(x, y, _this.createMine(x, y, 10));
            },
            "forty": function (x, y) {
                if (x === void 0) { x = 16; }
                if (y === void 0) { y = 16; }
                _this.checkBoard = _this.initCheckBoard(x, y, _this.createMine(x, y, 40));
            },
            "ninetyNine": function (x, y) {
                if (x === void 0) { x = 30; }
                if (y === void 0) { y = 16; }
                _this.checkBoard = _this.initCheckBoard(x, y, _this.createMine(x, y, 99));
            }
        };
        this.initObj[type]();
    }
    return Checkerboard;
}());
var test = new Checkerboard("ten");
console.log(test.checkBoard);
var mineClearance = (function () {
    function mineClearance() {
    }
    return mineClearance;
}());
//# sourceMappingURL=tsc.js.map