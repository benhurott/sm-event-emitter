!function(n){function e(r){if(t[r])return t[r].exports;var o=t[r]={exports:{},id:r,loaded:!1};return n[r].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var t={};return e.m=n,e.c=t,e.p="",e(0)}([function(n,e){"use strict";function t(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function n(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}return function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}}(),o=function(){var n=function(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)};return n()+n()+"-"+n()+"-"+n()+"-"+n()+"-"+n()+n()+n()},u=[],i=function(){function n(){t(this,n)}return r(n,null,[{key:"on",value:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){},t=o();return u.push({eventName:n,eventId:t,listener:e}),t}},{key:"remove",value:function(n){u=u.filter(function(e){return e.eventId!==n})}},{key:"emit",value:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};u.filter(function(e){return e.eventName===n}).forEach(function(n){n.listener(e)})}}]),n}();e.default=i}]);