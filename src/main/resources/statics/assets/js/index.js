webpackJsonp([0],{

/***/ 0:
/*!**************************************!*\
  !*** ./src/js/entry/index/entry.jsx ***!
  \**************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _react = __webpack_require__(/*! react */ 1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(/*! react-dom */ 33);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _index = __webpack_require__(/*! ./index.jsx */ 168);
	
	var _index2 = _interopRequireDefault(_index);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	_reactDom2.default.render(_react2.default.createElement(_index2.default, null), document.getElementById('common-body'));

/***/ },

/***/ 168:
/*!**************************************!*\
  !*** ./src/js/entry/index/index.jsx ***!
  \**************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _index = __webpack_require__(/*! ./index.css */ 169);
	
	var _index2 = _interopRequireDefault(_index);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Index = function (_React$Component) {
	    _inherits(Index, _React$Component);
	
	    function Index(props) {
	        _classCallCheck(this, Index);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Index).call(this, props));
	    }
	
	    _createClass(Index, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                { className: _index2.default.test },
	                _react2.default.createElement(
	                    'h1',
	                    null,
	                    'Index'
	                )
	            );
	        }
	    }]);
	
	    return Index;
	}(_react2.default.Component);
	
	exports.default = Index;

/***/ },

/***/ 169:
/*!**************************************!*\
  !*** ./src/js/entry/index/index.css ***!
  \**************************************/
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"test":"index__test___1XtFj"};

/***/ }

});
//# sourceMappingURL=index.js.map