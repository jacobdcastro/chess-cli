"use strict";var examineAllPossibleMoves=function(e,o,s){var t=[];return("w"===s.color?o.active.white:o.active.black).forEach(function(o){var s=o.getPossibleMoves(e);s.length>0&&t.push({piece:o,possibleMoves:s})}),t},chooseRandomMove=function(e){var o=e[Math.floor(Math.random()*e.length)],s=Math.floor(Math.random()*o.possibleMoves.length),t=o.possibleMoves[s];return{selectedPiece:o.piece,newCoords:t}},botMovePiece=function(e,o,s,t){var i=examineAllPossibleMoves(e,o,s),n=chooseRandomMove(i);t(n.selectedPiece,n.newCoords)};module.exports=botMovePiece;