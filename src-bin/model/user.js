"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Data = exports.User2 = exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var User = function User(name, age) {
  _classCallCheck(this, User);

  this.name = name;
  this.age = age;
};

exports["default"] = User;

var User2 = function User2(name) {
  _classCallCheck(this, User2);

  this.name = name;
};

exports.User2 = User2;

var Data = function Data(url, header) {
  _classCallCheck(this, Data);

  this.url = url;
  this.header = header;
};

exports.Data = Data;
//# sourceMappingURL=user.js.map