"use strict";function _slicedToArray(r,e){return _arrayWithHoles(r)||_iterableToArrayLimit(r,e)||_unsupportedIterableToArray(r,e)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(r,e){if(r){if("string"==typeof r)return _arrayLikeToArray(r,e);var t=Object.prototype.toString.call(r).slice(8,-1);return"Object"===t&&r.constructor&&(t=r.constructor.name),"Map"===t||"Set"===t?Array.from(t):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?_arrayLikeToArray(r,e):void 0}}function _arrayLikeToArray(r,e){(null==e||e>r.length)&&(e=r.length);for(var t=0,a=new Array(e);t<e;t++)a[t]=r[t];return a}function _iterableToArrayLimit(r,e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(r)){var t=[],a=!0,n=!1,o=void 0;try{for(var i,u=r[Symbol.iterator]();!(a=(i=u.next()).done)&&(t.push(i.value),!e||t.length!==e);a=!0);}catch(r){n=!0,o=r}finally{try{a||null==u.return||u.return()}finally{if(n)throw o}}return t}}function _arrayWithHoles(r){if(Array.isArray(r))return r}var React=require("react"),Game=require("../models/game"),useChessGame=function(){var r=_slicedToArray(React.useState(new Game),2);return{game:r[0],setGame:r[1]}};module.exports=useChessGame;