/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(10);


/***/ },

/***/ 10:
/***/ function(module, exports) {

	eval("/*** IMPORTS FROM imports-loader ***/\nvar define = false;\n\n//     Zepto.js\r\n//     (c) 2010-2016 Thomas Fuchs\r\n//     Zepto.js may be freely distributed under the MIT license.\r\n\r\n;(function($){\r\n  var touch = {},\r\n    touchTimeout, tapTimeout, swipeTimeout, longTapTimeout,\r\n    longTapDelay = 750,\r\n    gesture\r\n\r\n  function swipeDirection(x1, x2, y1, y2) {\r\n    return Math.abs(x1 - x2) >=\r\n      Math.abs(y1 - y2) ? (x1 - x2 > 0 ? 'Left' : 'Right') : (y1 - y2 > 0 ? 'Up' : 'Down')\r\n  }\r\n\r\n  function longTap() {\r\n    longTapTimeout = null\r\n    if (touch.last) {\r\n      touch.el.trigger('longTap')\r\n      touch = {}\r\n    }\r\n  }\r\n\r\n  function cancelLongTap() {\r\n    if (longTapTimeout) clearTimeout(longTapTimeout)\r\n    longTapTimeout = null\r\n  }\r\n\r\n  function cancelAll() {\r\n    if (touchTimeout) clearTimeout(touchTimeout)\r\n    if (tapTimeout) clearTimeout(tapTimeout)\r\n    if (swipeTimeout) clearTimeout(swipeTimeout)\r\n    if (longTapTimeout) clearTimeout(longTapTimeout)\r\n    touchTimeout = tapTimeout = swipeTimeout = longTapTimeout = null\r\n    touch = {}\r\n  }\r\n\r\n  function isPrimaryTouch(event){\r\n    return (event.pointerType == 'touch' ||\r\n      event.pointerType == event.MSPOINTER_TYPE_TOUCH)\r\n      && event.isPrimary\r\n  }\r\n\r\n  function isPointerEventType(e, type){\r\n    return (e.type == 'pointer'+type ||\r\n      e.type.toLowerCase() == 'mspointer'+type)\r\n  }\r\n\r\n  $(document).ready(function(){\r\n    var now, delta, deltaX = 0, deltaY = 0, firstTouch, _isPointerType\r\n\r\n    if ('MSGesture' in window) {\r\n      gesture = new MSGesture()\r\n      gesture.target = document.body\r\n    }\r\n\r\n    $(document)\r\n      .bind('MSGestureEnd', function(e){\r\n        var swipeDirectionFromVelocity =\r\n          e.velocityX > 1 ? 'Right' : e.velocityX < -1 ? 'Left' : e.velocityY > 1 ? 'Down' : e.velocityY < -1 ? 'Up' : null;\r\n        if (swipeDirectionFromVelocity) {\r\n          touch.el.trigger('swipe')\r\n          touch.el.trigger('swipe'+ swipeDirectionFromVelocity)\r\n        }\r\n      })\r\n      .on('touchstart MSPointerDown pointerdown', function(e){\r\n        if((_isPointerType = isPointerEventType(e, 'down')) &&\r\n          !isPrimaryTouch(e)) return\r\n        firstTouch = _isPointerType ? e : e.touches[0]\r\n        if (e.touches && e.touches.length === 1 && touch.x2) {\r\n          // Clear out touch movement data if we have it sticking around\r\n          // This can occur if touchcancel doesn't fire due to preventDefault, etc.\r\n          touch.x2 = undefined\r\n          touch.y2 = undefined\r\n        }\r\n        now = Date.now()\r\n        delta = now - (touch.last || now)\r\n        touch.el = $('tagName' in firstTouch.target ?\r\n          firstTouch.target : firstTouch.target.parentNode)\r\n        touchTimeout && clearTimeout(touchTimeout)\r\n        touch.x1 = firstTouch.pageX\r\n        touch.y1 = firstTouch.pageY\r\n        if (delta > 0 && delta <= 250) touch.isDoubleTap = true\r\n        touch.last = now\r\n        longTapTimeout = setTimeout(longTap, longTapDelay)\r\n        // adds the current touch contact for IE gesture recognition\r\n        if (gesture && _isPointerType) gesture.addPointer(e.pointerId);\r\n      })\r\n      .on('touchmove MSPointerMove pointermove', function(e){\r\n        if((_isPointerType = isPointerEventType(e, 'move')) &&\r\n          !isPrimaryTouch(e)) return\r\n        firstTouch = _isPointerType ? e : e.touches[0]\r\n        cancelLongTap()\r\n        touch.x2 = firstTouch.pageX\r\n        touch.y2 = firstTouch.pageY\r\n\r\n        deltaX += Math.abs(touch.x1 - touch.x2)\r\n        deltaY += Math.abs(touch.y1 - touch.y2)\r\n      })\r\n      .on('touchend MSPointerUp pointerup', function(e){\r\n        if((_isPointerType = isPointerEventType(e, 'up')) &&\r\n          !isPrimaryTouch(e)) return\r\n        cancelLongTap()\r\n\r\n        // swipe\r\n        if ((touch.x2 && Math.abs(touch.x1 - touch.x2) > 30) ||\r\n            (touch.y2 && Math.abs(touch.y1 - touch.y2) > 30))\r\n\r\n          swipeTimeout = setTimeout(function() {\r\n            touch.el.trigger('swipe')\r\n            touch.el.trigger('swipe' + (swipeDirection(touch.x1, touch.x2, touch.y1, touch.y2)))\r\n            touch = {}\r\n          }, 0)\r\n\r\n        // normal tap\r\n        else if ('last' in touch)\r\n          // don't fire tap when delta position changed by more than 30 pixels,\r\n          // for instance when moving to a point and back to origin\r\n          if (deltaX < 30 && deltaY < 30) {\r\n            // delay by one tick so we can cancel the 'tap' event if 'scroll' fires\r\n            // ('tap' fires before 'scroll')\r\n            tapTimeout = setTimeout(function() {\r\n\r\n              // trigger universal 'tap' with the option to cancelTouch()\r\n              // (cancelTouch cancels processing of single vs double taps for faster 'tap' response)\r\n              var event = $.Event('tap')\r\n              event.cancelTouch = cancelAll\r\n              touch.el.trigger(event)\r\n\r\n              // trigger double tap immediately\r\n              if (touch.isDoubleTap) {\r\n                if (touch.el) touch.el.trigger('doubleTap')\r\n                touch = {}\r\n              }\r\n\r\n              // trigger single tap after 250ms of inactivity\r\n              else {\r\n                touchTimeout = setTimeout(function(){\r\n                  touchTimeout = null\r\n                  if (touch.el) touch.el.trigger('singleTap')\r\n                  touch = {}\r\n                }, 250)\r\n              }\r\n            }, 0)\r\n          } else {\r\n            touch = {}\r\n          }\r\n          deltaX = deltaY = 0\r\n\r\n      })\r\n      // when the browser window loses focus,\r\n      // for example when a modal dialog is shown,\r\n      // cancel all ongoing events\r\n      .on('touchcancel MSPointerCancel pointercancel', cancelAll)\r\n\r\n    // scrolling the window indicates intention of the user\r\n    // to scroll, not tap or swipe, so cancel all ongoing events\r\n    $(window).on('scroll', cancelAll)\r\n  })\r\n\r\n  ;['swipe', 'swipeLeft', 'swipeRight', 'swipeUp', 'swipeDown',\r\n    'doubleTap', 'tap', 'singleTap', 'longTap'].forEach(function(eventName){\r\n    $.fn[eventName] = function(callback){ return this.on(eventName, callback) }\r\n  })\r\n})(Zepto)\n\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvemVwdG8tdGFwLmpzPzI4ZDYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsQ0FBQztBQUNELGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7O0FBRVg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0EsYUFBYTtBQUNiLFdBQVc7QUFDWDtBQUNBO0FBQ0E7O0FBRUEsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUgsR0FBRztBQUNIO0FBQ0EseUNBQXlDO0FBQ3pDLEdBQUc7QUFDSCxDQUFDIiwiZmlsZSI6IjEwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqKiBJTVBPUlRTIEZST00gaW1wb3J0cy1sb2FkZXIgKioqL1xudmFyIGRlZmluZSA9IGZhbHNlO1xuXG4vLyAgICAgWmVwdG8uanNcclxuLy8gICAgIChjKSAyMDEwLTIwMTYgVGhvbWFzIEZ1Y2hzXHJcbi8vICAgICBaZXB0by5qcyBtYXkgYmUgZnJlZWx5IGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBNSVQgbGljZW5zZS5cclxuXHJcbjsoZnVuY3Rpb24oJCl7XHJcbiAgdmFyIHRvdWNoID0ge30sXHJcbiAgICB0b3VjaFRpbWVvdXQsIHRhcFRpbWVvdXQsIHN3aXBlVGltZW91dCwgbG9uZ1RhcFRpbWVvdXQsXHJcbiAgICBsb25nVGFwRGVsYXkgPSA3NTAsXHJcbiAgICBnZXN0dXJlXHJcblxyXG4gIGZ1bmN0aW9uIHN3aXBlRGlyZWN0aW9uKHgxLCB4MiwgeTEsIHkyKSB7XHJcbiAgICByZXR1cm4gTWF0aC5hYnMoeDEgLSB4MikgPj1cclxuICAgICAgTWF0aC5hYnMoeTEgLSB5MikgPyAoeDEgLSB4MiA+IDAgPyAnTGVmdCcgOiAnUmlnaHQnKSA6ICh5MSAtIHkyID4gMCA/ICdVcCcgOiAnRG93bicpXHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBsb25nVGFwKCkge1xyXG4gICAgbG9uZ1RhcFRpbWVvdXQgPSBudWxsXHJcbiAgICBpZiAodG91Y2gubGFzdCkge1xyXG4gICAgICB0b3VjaC5lbC50cmlnZ2VyKCdsb25nVGFwJylcclxuICAgICAgdG91Y2ggPSB7fVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gY2FuY2VsTG9uZ1RhcCgpIHtcclxuICAgIGlmIChsb25nVGFwVGltZW91dCkgY2xlYXJUaW1lb3V0KGxvbmdUYXBUaW1lb3V0KVxyXG4gICAgbG9uZ1RhcFRpbWVvdXQgPSBudWxsXHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBjYW5jZWxBbGwoKSB7XHJcbiAgICBpZiAodG91Y2hUaW1lb3V0KSBjbGVhclRpbWVvdXQodG91Y2hUaW1lb3V0KVxyXG4gICAgaWYgKHRhcFRpbWVvdXQpIGNsZWFyVGltZW91dCh0YXBUaW1lb3V0KVxyXG4gICAgaWYgKHN3aXBlVGltZW91dCkgY2xlYXJUaW1lb3V0KHN3aXBlVGltZW91dClcclxuICAgIGlmIChsb25nVGFwVGltZW91dCkgY2xlYXJUaW1lb3V0KGxvbmdUYXBUaW1lb3V0KVxyXG4gICAgdG91Y2hUaW1lb3V0ID0gdGFwVGltZW91dCA9IHN3aXBlVGltZW91dCA9IGxvbmdUYXBUaW1lb3V0ID0gbnVsbFxyXG4gICAgdG91Y2ggPSB7fVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gaXNQcmltYXJ5VG91Y2goZXZlbnQpe1xyXG4gICAgcmV0dXJuIChldmVudC5wb2ludGVyVHlwZSA9PSAndG91Y2gnIHx8XHJcbiAgICAgIGV2ZW50LnBvaW50ZXJUeXBlID09IGV2ZW50Lk1TUE9JTlRFUl9UWVBFX1RPVUNIKVxyXG4gICAgICAmJiBldmVudC5pc1ByaW1hcnlcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGlzUG9pbnRlckV2ZW50VHlwZShlLCB0eXBlKXtcclxuICAgIHJldHVybiAoZS50eXBlID09ICdwb2ludGVyJyt0eXBlIHx8XHJcbiAgICAgIGUudHlwZS50b0xvd2VyQ2FzZSgpID09ICdtc3BvaW50ZXInK3R5cGUpXHJcbiAgfVxyXG5cclxuICAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe1xyXG4gICAgdmFyIG5vdywgZGVsdGEsIGRlbHRhWCA9IDAsIGRlbHRhWSA9IDAsIGZpcnN0VG91Y2gsIF9pc1BvaW50ZXJUeXBlXHJcblxyXG4gICAgaWYgKCdNU0dlc3R1cmUnIGluIHdpbmRvdykge1xyXG4gICAgICBnZXN0dXJlID0gbmV3IE1TR2VzdHVyZSgpXHJcbiAgICAgIGdlc3R1cmUudGFyZ2V0ID0gZG9jdW1lbnQuYm9keVxyXG4gICAgfVxyXG5cclxuICAgICQoZG9jdW1lbnQpXHJcbiAgICAgIC5iaW5kKCdNU0dlc3R1cmVFbmQnLCBmdW5jdGlvbihlKXtcclxuICAgICAgICB2YXIgc3dpcGVEaXJlY3Rpb25Gcm9tVmVsb2NpdHkgPVxyXG4gICAgICAgICAgZS52ZWxvY2l0eVggPiAxID8gJ1JpZ2h0JyA6IGUudmVsb2NpdHlYIDwgLTEgPyAnTGVmdCcgOiBlLnZlbG9jaXR5WSA+IDEgPyAnRG93bicgOiBlLnZlbG9jaXR5WSA8IC0xID8gJ1VwJyA6IG51bGw7XHJcbiAgICAgICAgaWYgKHN3aXBlRGlyZWN0aW9uRnJvbVZlbG9jaXR5KSB7XHJcbiAgICAgICAgICB0b3VjaC5lbC50cmlnZ2VyKCdzd2lwZScpXHJcbiAgICAgICAgICB0b3VjaC5lbC50cmlnZ2VyKCdzd2lwZScrIHN3aXBlRGlyZWN0aW9uRnJvbVZlbG9jaXR5KVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICAgLm9uKCd0b3VjaHN0YXJ0IE1TUG9pbnRlckRvd24gcG9pbnRlcmRvd24nLCBmdW5jdGlvbihlKXtcclxuICAgICAgICBpZigoX2lzUG9pbnRlclR5cGUgPSBpc1BvaW50ZXJFdmVudFR5cGUoZSwgJ2Rvd24nKSkgJiZcclxuICAgICAgICAgICFpc1ByaW1hcnlUb3VjaChlKSkgcmV0dXJuXHJcbiAgICAgICAgZmlyc3RUb3VjaCA9IF9pc1BvaW50ZXJUeXBlID8gZSA6IGUudG91Y2hlc1swXVxyXG4gICAgICAgIGlmIChlLnRvdWNoZXMgJiYgZS50b3VjaGVzLmxlbmd0aCA9PT0gMSAmJiB0b3VjaC54Mikge1xyXG4gICAgICAgICAgLy8gQ2xlYXIgb3V0IHRvdWNoIG1vdmVtZW50IGRhdGEgaWYgd2UgaGF2ZSBpdCBzdGlja2luZyBhcm91bmRcclxuICAgICAgICAgIC8vIFRoaXMgY2FuIG9jY3VyIGlmIHRvdWNoY2FuY2VsIGRvZXNuJ3QgZmlyZSBkdWUgdG8gcHJldmVudERlZmF1bHQsIGV0Yy5cclxuICAgICAgICAgIHRvdWNoLngyID0gdW5kZWZpbmVkXHJcbiAgICAgICAgICB0b3VjaC55MiA9IHVuZGVmaW5lZFxyXG4gICAgICAgIH1cclxuICAgICAgICBub3cgPSBEYXRlLm5vdygpXHJcbiAgICAgICAgZGVsdGEgPSBub3cgLSAodG91Y2gubGFzdCB8fCBub3cpXHJcbiAgICAgICAgdG91Y2guZWwgPSAkKCd0YWdOYW1lJyBpbiBmaXJzdFRvdWNoLnRhcmdldCA/XHJcbiAgICAgICAgICBmaXJzdFRvdWNoLnRhcmdldCA6IGZpcnN0VG91Y2gudGFyZ2V0LnBhcmVudE5vZGUpXHJcbiAgICAgICAgdG91Y2hUaW1lb3V0ICYmIGNsZWFyVGltZW91dCh0b3VjaFRpbWVvdXQpXHJcbiAgICAgICAgdG91Y2gueDEgPSBmaXJzdFRvdWNoLnBhZ2VYXHJcbiAgICAgICAgdG91Y2gueTEgPSBmaXJzdFRvdWNoLnBhZ2VZXHJcbiAgICAgICAgaWYgKGRlbHRhID4gMCAmJiBkZWx0YSA8PSAyNTApIHRvdWNoLmlzRG91YmxlVGFwID0gdHJ1ZVxyXG4gICAgICAgIHRvdWNoLmxhc3QgPSBub3dcclxuICAgICAgICBsb25nVGFwVGltZW91dCA9IHNldFRpbWVvdXQobG9uZ1RhcCwgbG9uZ1RhcERlbGF5KVxyXG4gICAgICAgIC8vIGFkZHMgdGhlIGN1cnJlbnQgdG91Y2ggY29udGFjdCBmb3IgSUUgZ2VzdHVyZSByZWNvZ25pdGlvblxyXG4gICAgICAgIGlmIChnZXN0dXJlICYmIF9pc1BvaW50ZXJUeXBlKSBnZXN0dXJlLmFkZFBvaW50ZXIoZS5wb2ludGVySWQpO1xyXG4gICAgICB9KVxyXG4gICAgICAub24oJ3RvdWNobW92ZSBNU1BvaW50ZXJNb3ZlIHBvaW50ZXJtb3ZlJywgZnVuY3Rpb24oZSl7XHJcbiAgICAgICAgaWYoKF9pc1BvaW50ZXJUeXBlID0gaXNQb2ludGVyRXZlbnRUeXBlKGUsICdtb3ZlJykpICYmXHJcbiAgICAgICAgICAhaXNQcmltYXJ5VG91Y2goZSkpIHJldHVyblxyXG4gICAgICAgIGZpcnN0VG91Y2ggPSBfaXNQb2ludGVyVHlwZSA/IGUgOiBlLnRvdWNoZXNbMF1cclxuICAgICAgICBjYW5jZWxMb25nVGFwKClcclxuICAgICAgICB0b3VjaC54MiA9IGZpcnN0VG91Y2gucGFnZVhcclxuICAgICAgICB0b3VjaC55MiA9IGZpcnN0VG91Y2gucGFnZVlcclxuXHJcbiAgICAgICAgZGVsdGFYICs9IE1hdGguYWJzKHRvdWNoLngxIC0gdG91Y2gueDIpXHJcbiAgICAgICAgZGVsdGFZICs9IE1hdGguYWJzKHRvdWNoLnkxIC0gdG91Y2gueTIpXHJcbiAgICAgIH0pXHJcbiAgICAgIC5vbigndG91Y2hlbmQgTVNQb2ludGVyVXAgcG9pbnRlcnVwJywgZnVuY3Rpb24oZSl7XHJcbiAgICAgICAgaWYoKF9pc1BvaW50ZXJUeXBlID0gaXNQb2ludGVyRXZlbnRUeXBlKGUsICd1cCcpKSAmJlxyXG4gICAgICAgICAgIWlzUHJpbWFyeVRvdWNoKGUpKSByZXR1cm5cclxuICAgICAgICBjYW5jZWxMb25nVGFwKClcclxuXHJcbiAgICAgICAgLy8gc3dpcGVcclxuICAgICAgICBpZiAoKHRvdWNoLngyICYmIE1hdGguYWJzKHRvdWNoLngxIC0gdG91Y2gueDIpID4gMzApIHx8XHJcbiAgICAgICAgICAgICh0b3VjaC55MiAmJiBNYXRoLmFicyh0b3VjaC55MSAtIHRvdWNoLnkyKSA+IDMwKSlcclxuXHJcbiAgICAgICAgICBzd2lwZVRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICB0b3VjaC5lbC50cmlnZ2VyKCdzd2lwZScpXHJcbiAgICAgICAgICAgIHRvdWNoLmVsLnRyaWdnZXIoJ3N3aXBlJyArIChzd2lwZURpcmVjdGlvbih0b3VjaC54MSwgdG91Y2gueDIsIHRvdWNoLnkxLCB0b3VjaC55MikpKVxyXG4gICAgICAgICAgICB0b3VjaCA9IHt9XHJcbiAgICAgICAgICB9LCAwKVxyXG5cclxuICAgICAgICAvLyBub3JtYWwgdGFwXHJcbiAgICAgICAgZWxzZSBpZiAoJ2xhc3QnIGluIHRvdWNoKVxyXG4gICAgICAgICAgLy8gZG9uJ3QgZmlyZSB0YXAgd2hlbiBkZWx0YSBwb3NpdGlvbiBjaGFuZ2VkIGJ5IG1vcmUgdGhhbiAzMCBwaXhlbHMsXHJcbiAgICAgICAgICAvLyBmb3IgaW5zdGFuY2Ugd2hlbiBtb3ZpbmcgdG8gYSBwb2ludCBhbmQgYmFjayB0byBvcmlnaW5cclxuICAgICAgICAgIGlmIChkZWx0YVggPCAzMCAmJiBkZWx0YVkgPCAzMCkge1xyXG4gICAgICAgICAgICAvLyBkZWxheSBieSBvbmUgdGljayBzbyB3ZSBjYW4gY2FuY2VsIHRoZSAndGFwJyBldmVudCBpZiAnc2Nyb2xsJyBmaXJlc1xyXG4gICAgICAgICAgICAvLyAoJ3RhcCcgZmlyZXMgYmVmb3JlICdzY3JvbGwnKVxyXG4gICAgICAgICAgICB0YXBUaW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgICAgICAgLy8gdHJpZ2dlciB1bml2ZXJzYWwgJ3RhcCcgd2l0aCB0aGUgb3B0aW9uIHRvIGNhbmNlbFRvdWNoKClcclxuICAgICAgICAgICAgICAvLyAoY2FuY2VsVG91Y2ggY2FuY2VscyBwcm9jZXNzaW5nIG9mIHNpbmdsZSB2cyBkb3VibGUgdGFwcyBmb3IgZmFzdGVyICd0YXAnIHJlc3BvbnNlKVxyXG4gICAgICAgICAgICAgIHZhciBldmVudCA9ICQuRXZlbnQoJ3RhcCcpXHJcbiAgICAgICAgICAgICAgZXZlbnQuY2FuY2VsVG91Y2ggPSBjYW5jZWxBbGxcclxuICAgICAgICAgICAgICB0b3VjaC5lbC50cmlnZ2VyKGV2ZW50KVxyXG5cclxuICAgICAgICAgICAgICAvLyB0cmlnZ2VyIGRvdWJsZSB0YXAgaW1tZWRpYXRlbHlcclxuICAgICAgICAgICAgICBpZiAodG91Y2guaXNEb3VibGVUYXApIHtcclxuICAgICAgICAgICAgICAgIGlmICh0b3VjaC5lbCkgdG91Y2guZWwudHJpZ2dlcignZG91YmxlVGFwJylcclxuICAgICAgICAgICAgICAgIHRvdWNoID0ge31cclxuICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgIC8vIHRyaWdnZXIgc2luZ2xlIHRhcCBhZnRlciAyNTBtcyBvZiBpbmFjdGl2aXR5XHJcbiAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0b3VjaFRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICAgIHRvdWNoVGltZW91dCA9IG51bGxcclxuICAgICAgICAgICAgICAgICAgaWYgKHRvdWNoLmVsKSB0b3VjaC5lbC50cmlnZ2VyKCdzaW5nbGVUYXAnKVxyXG4gICAgICAgICAgICAgICAgICB0b3VjaCA9IHt9XHJcbiAgICAgICAgICAgICAgICB9LCAyNTApXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LCAwKVxyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdG91Y2ggPSB7fVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgZGVsdGFYID0gZGVsdGFZID0gMFxyXG5cclxuICAgICAgfSlcclxuICAgICAgLy8gd2hlbiB0aGUgYnJvd3NlciB3aW5kb3cgbG9zZXMgZm9jdXMsXHJcbiAgICAgIC8vIGZvciBleGFtcGxlIHdoZW4gYSBtb2RhbCBkaWFsb2cgaXMgc2hvd24sXHJcbiAgICAgIC8vIGNhbmNlbCBhbGwgb25nb2luZyBldmVudHNcclxuICAgICAgLm9uKCd0b3VjaGNhbmNlbCBNU1BvaW50ZXJDYW5jZWwgcG9pbnRlcmNhbmNlbCcsIGNhbmNlbEFsbClcclxuXHJcbiAgICAvLyBzY3JvbGxpbmcgdGhlIHdpbmRvdyBpbmRpY2F0ZXMgaW50ZW50aW9uIG9mIHRoZSB1c2VyXHJcbiAgICAvLyB0byBzY3JvbGwsIG5vdCB0YXAgb3Igc3dpcGUsIHNvIGNhbmNlbCBhbGwgb25nb2luZyBldmVudHNcclxuICAgICQod2luZG93KS5vbignc2Nyb2xsJywgY2FuY2VsQWxsKVxyXG4gIH0pXHJcblxyXG4gIDtbJ3N3aXBlJywgJ3N3aXBlTGVmdCcsICdzd2lwZVJpZ2h0JywgJ3N3aXBlVXAnLCAnc3dpcGVEb3duJyxcclxuICAgICdkb3VibGVUYXAnLCAndGFwJywgJ3NpbmdsZVRhcCcsICdsb25nVGFwJ10uZm9yRWFjaChmdW5jdGlvbihldmVudE5hbWUpe1xyXG4gICAgJC5mbltldmVudE5hbWVdID0gZnVuY3Rpb24oY2FsbGJhY2speyByZXR1cm4gdGhpcy5vbihldmVudE5hbWUsIGNhbGxiYWNrKSB9XHJcbiAgfSlcclxufSkoWmVwdG8pXG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2pzL3plcHRvLXRhcC5qc1xuICoqIG1vZHVsZSBpZCA9IDEwXG4gKiogbW9kdWxlIGNodW5rcyA9IDUgOSAxMCAxMSAxNSAxNiAxNyAxOCAyMyAyNVxuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ }

/******/ });