"use strict";var moveCursorOnPossibleMoves=function(r,n,i,e){var f=n.cursorPosition,o=null;if(e.upArrow)for(var t=function(n){var i={y:f.y+n,x:f.x};if(r.find(function(r){return r.y===i.y&&r.x===i.x}))o=i;else for(var e=function(n){var e=i.y,f=i.x+n,t=i.y,u=i.x-n,a=r.find(function(r){return r.y===e&&r.x===f});if(a)return o=a,"break";var x=r.find(function(r){return r.y===t&&r.x===u});return x?(o=x,"break"):void 0},t=1;t<=2;t++){if("break"===e(t))break}if(o)return"break"},u=1;u<=2;u++){if("break"===t(u))break}if(e.downArrow)for(var a=function(n){var i={y:f.y-n,x:f.x};if(r.find(function(r){return r.y===i.y&&r.x===i.x}))o=i;else for(var e=function(n){var e=i.y,f=i.x+n,t=i.y,u=i.x-n,a=r.find(function(r){return r.y===e&&r.x===f});if(a)return o=a,"break";var x=r.find(function(r){return r.y===t&&r.x===u});return x?(o=x,"break"):void 0},t=1;t<=2;t++){if("break"===e(t))break}},x=1;x<=2;x++)a(x);if(e.leftArrow)for(var y=function(n){var i={x:f.x-n,y:f.y};if(r.find(function(r){return r.y===i.y&&r.x===i.x}))o=i;else for(var e=function(n){var e=i.x,f=i.y+n,t=i.x,u=i.y-n,a=r.find(function(r){return r.y===f&&r.x===e});if(a)return o=a,"break";var x=r.find(function(r){return r.y===u&&r.x===t});return x?(o=x,"break"):void 0},t=1;t<=2;t++){if("break"===e(t))break}if(o)return"break"},v=1;v<=2;v++){if("break"===y(v))break}if(e.rightArrow)for(var b=function(n){var i={x:f.x+n,y:f.y};if(r.find(function(r){return r.y===i.y&&r.x===i.x}))o=i;else for(var e=function(n){var e=i.x,f=i.y+n,t=i.x,u=i.y-n,a=r.find(function(r){return r.y===f&&r.x===e});if(a)return o=a,"break";var x=r.find(function(r){return r.y===u&&r.x===t});return x?(o=x,"break"):void 0},t=1;t<=2;t++){if("break"===e(t))break}if(o)return"break"},c=1;c<=2;c++){if("break"===b(c))break}o&&i(Object.assign(Object.assign({},n),{cursorPosition:o}))};module.exports=moveCursorOnPossibleMoves;