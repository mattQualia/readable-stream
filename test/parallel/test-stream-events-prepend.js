"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/*<replacement>*/
var bufferShim = require('safe-buffer').Buffer;
/*</replacement>*/


var common = require('../common');

var stream = require('../../');

var Writable =
/*#__PURE__*/
function (_stream$Writable) {
  _inherits(Writable, _stream$Writable);

  function Writable() {
    var _this;

    _classCallCheck(this, Writable);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Writable).call(this));
    _this.prependListener = undefined;
    return _this;
  }

  _createClass(Writable, [{
    key: "_write",
    value: function _write(chunk, end, cb) {
      cb();
    }
  }]);

  return Writable;
}(stream.Writable);

var Readable =
/*#__PURE__*/
function (_stream$Readable) {
  _inherits(Readable, _stream$Readable);

  function Readable() {
    _classCallCheck(this, Readable);

    return _possibleConstructorReturn(this, _getPrototypeOf(Readable).apply(this, arguments));
  }

  _createClass(Readable, [{
    key: "_read",
    value: function _read() {
      this.push(null);
    }
  }]);

  return Readable;
}(stream.Readable);

var w = new Writable();
w.on('pipe', common.mustCall());
var r = new Readable();
r.pipe(w);
;

(function () {
  var t = require('tap');

  t.pass('sync run');
})();

var _list = process.listeners('uncaughtException');

process.removeAllListeners('uncaughtException');

_list.pop();

_list.forEach(function (e) {
  return process.on('uncaughtException', e);
});