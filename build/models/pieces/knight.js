"use strict";function _typeof(t){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var r=0;r<e.length;r++){var o=e[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function _createClass(t,e,r){return e&&_defineProperties(t.prototype,e),r&&_defineProperties(t,r),t}function _createSuper(t){return function(){var e,r=_getPrototypeOf(t);if(_isNativeReflectConstruct()){var o=_getPrototypeOf(this).constructor;e=Reflect.construct(r,arguments,o)}else e=r.apply(this,arguments);return _possibleConstructorReturn(this,e)}}function _possibleConstructorReturn(t,e){return!e||"object"!==_typeof(e)&&"function"!=typeof e?_assertThisInitialized(t):e}function _assertThisInitialized(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}function _getPrototypeOf(t){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&_setPrototypeOf(t,e)}function _setPrototypeOf(t,e){return(_setPrototypeOf=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var Piece=require("../piece"),checkIsWhite=require("../../helpers/checkIsWhite"),Knight=function(t){_inherits(r,Piece);var e=_createSuper(r);function r(t,o,n){var i;return _classCallCheck(this,r),(i=e.call(this,t,o,"♞ ","♘ ",3))._id=(t?"N":"n")+n.toString(),i.getPossibleMoves=i.getPossibleMoves,i}return _createClass(r,[{key:"getPossibleMoves",value:function(t){var e=this,r=[],o=this.position,n=o.x,i=o.y;return[{x:n+1,y:i+2},{x:n+2,y:i+1},{x:n+2,y:i-1},{x:n+1,y:i-2},{x:n-1,y:i-2},{x:n-2,y:i-1},{x:n-2,y:i+1},{x:n-1,y:i+2}].forEach(function(o){if(o.x<8&&o.x>=0&&o.y<8&&o.y>=0){var n=t[o.y][o.x].piece;null!==n?checkIsWhite(n._id)!==e.isWhite?r.push(o):n.isWhite===e.isWhite&&r.push():r.push(o)}}),r}}]),r}();module.exports=Knight;