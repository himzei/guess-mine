(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleNewMessage = void 0;

var _sockets = require("./sockets");

var messages = document.getElementById("jsMessages");
var sendMsg = document.getElementById("jsSendMsg");

var appendMsg = function appendMsg(text, nickname) {
  var li = document.createElement("li");
  li.innerHTML = "\n        <span class=\"author ".concat(nickname ? "out" : "self", "\">").concat(nickname ? nickname : "You", " : </span> ").concat(text, "\n    ");
  messages.appendChild(li);
};

var handleSendMsg = function handleSendMsg(event) {
  event.preventDefault();
  var input = sendMsg.querySelector("input");
  var value = input.value;
  (0, _sockets.getSocket)().emit(window.events.sendMsg, {
    message: value
  });
  input.value = "";
  appendMsg(value);
};

var handleNewMessage = function handleNewMessage(_ref) {
  var message = _ref.message,
      nickname = _ref.nickname;
  return appendMsg(message, nickname);
};

exports.handleNewMessage = handleNewMessage;

if (sendMsg) {
  sendMsg.addEventListener("submit", handleSendMsg);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXQuanMiXSwibmFtZXMiOlsibWVzc2FnZXMiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwic2VuZE1zZyIsImFwcGVuZE1zZyIsInRleHQiLCJuaWNrbmFtZSIsImxpIiwiY3JlYXRlRWxlbWVudCIsImlubmVySFRNTCIsImFwcGVuZENoaWxkIiwiaGFuZGxlU2VuZE1zZyIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJpbnB1dCIsInF1ZXJ5U2VsZWN0b3IiLCJ2YWx1ZSIsImVtaXQiLCJ3aW5kb3ciLCJldmVudHMiLCJtZXNzYWdlIiwiaGFuZGxlTmV3TWVzc2FnZSIsImFkZEV2ZW50TGlzdGVuZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFFQSxJQUFNQSxRQUFRLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixZQUF4QixDQUFqQjtBQUNBLElBQU1DLE9BQU8sR0FBR0YsUUFBUSxDQUFDQyxjQUFULENBQXdCLFdBQXhCLENBQWhCOztBQUVBLElBQU1FLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUNDLElBQUQsRUFBT0MsUUFBUCxFQUFvQjtBQUNwQyxNQUFNQyxFQUFFLEdBQUdOLFFBQVEsQ0FBQ08sYUFBVCxDQUF1QixJQUF2QixDQUFYO0FBQ0FELEVBQUFBLEVBQUUsQ0FBQ0UsU0FBSCw0Q0FDNEJILFFBQVEsR0FBRyxLQUFILEdBQVcsTUFEL0MsZ0JBRUVBLFFBQVEsR0FBR0EsUUFBSCxHQUFjLEtBRnhCLHdCQUdjRCxJQUhkO0FBS0FMLEVBQUFBLFFBQVEsQ0FBQ1UsV0FBVCxDQUFxQkgsRUFBckI7QUFDRCxDQVJEOztBQVVBLElBQU1JLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsQ0FBQ0MsS0FBRCxFQUFXO0FBQy9CQSxFQUFBQSxLQUFLLENBQUNDLGNBQU47QUFDQSxNQUFNQyxLQUFLLEdBQUdYLE9BQU8sQ0FBQ1ksYUFBUixDQUFzQixPQUF0QixDQUFkO0FBRitCLE1BR3ZCQyxLQUh1QixHQUdiRixLQUhhLENBR3ZCRSxLQUh1QjtBQUkvQiw0QkFBWUMsSUFBWixDQUFpQkMsTUFBTSxDQUFDQyxNQUFQLENBQWNoQixPQUEvQixFQUF3QztBQUFFaUIsSUFBQUEsT0FBTyxFQUFFSjtBQUFYLEdBQXhDO0FBQ0FGLEVBQUFBLEtBQUssQ0FBQ0UsS0FBTixHQUFjLEVBQWQ7QUFDQVosRUFBQUEsU0FBUyxDQUFDWSxLQUFELENBQVQ7QUFDRCxDQVBEOztBQVNPLElBQU1LLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUI7QUFBQSxNQUFHRCxPQUFILFFBQUdBLE9BQUg7QUFBQSxNQUFZZCxRQUFaLFFBQVlBLFFBQVo7QUFBQSxTQUM5QkYsU0FBUyxDQUFDZ0IsT0FBRCxFQUFVZCxRQUFWLENBRHFCO0FBQUEsQ0FBekI7Ozs7QUFHUCxJQUFJSCxPQUFKLEVBQWE7QUFDWEEsRUFBQUEsT0FBTyxDQUFDbUIsZ0JBQVIsQ0FBeUIsUUFBekIsRUFBbUNYLGFBQW5DO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXRTb2NrZXQgfSBmcm9tIFwiLi9zb2NrZXRzXCI7XHJcblxyXG5jb25zdCBtZXNzYWdlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwianNNZXNzYWdlc1wiKTtcclxuY29uc3Qgc2VuZE1zZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwianNTZW5kTXNnXCIpO1xyXG5cclxuY29uc3QgYXBwZW5kTXNnID0gKHRleHQsIG5pY2tuYW1lKSA9PiB7XHJcbiAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcbiAgbGkuaW5uZXJIVE1MID0gYFxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwiYXV0aG9yICR7bmlja25hbWUgPyBcIm91dFwiIDogXCJzZWxmXCJ9XCI+JHtcclxuICAgIG5pY2tuYW1lID8gbmlja25hbWUgOiBcIllvdVwiXHJcbiAgfSA6IDwvc3Bhbj4gJHt0ZXh0fVxyXG4gICAgYDtcclxuICBtZXNzYWdlcy5hcHBlbmRDaGlsZChsaSk7XHJcbn07XHJcblxyXG5jb25zdCBoYW5kbGVTZW5kTXNnID0gKGV2ZW50KSA9PiB7XHJcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICBjb25zdCBpbnB1dCA9IHNlbmRNc2cucXVlcnlTZWxlY3RvcihcImlucHV0XCIpO1xyXG4gIGNvbnN0IHsgdmFsdWUgfSA9IGlucHV0O1xyXG4gIGdldFNvY2tldCgpLmVtaXQod2luZG93LmV2ZW50cy5zZW5kTXNnLCB7IG1lc3NhZ2U6IHZhbHVlIH0pO1xyXG4gIGlucHV0LnZhbHVlID0gXCJcIjtcclxuICBhcHBlbmRNc2codmFsdWUpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGhhbmRsZU5ld01lc3NhZ2UgPSAoeyBtZXNzYWdlLCBuaWNrbmFtZSB9KSA9PlxyXG4gIGFwcGVuZE1zZyhtZXNzYWdlLCBuaWNrbmFtZSk7XHJcblxyXG5pZiAoc2VuZE1zZykge1xyXG4gIHNlbmRNc2cuYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBoYW5kbGVTZW5kTXNnKTtcclxufVxyXG4iXX0=
},{"./sockets":6}],2:[function(require,module,exports){
"use strict";

require("./sockets");

require("./login");

require("./chat");

require("./paint");
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZha2VfNGFiMzdlMjMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIi4vc29ja2V0c1wiO1xyXG5pbXBvcnQgXCIuL2xvZ2luXCI7XHJcbmltcG9ydCBcIi4vY2hhdFwiO1xyXG5pbXBvcnQgXCIuL3BhaW50XCI7XHJcbiJdfQ==
},{"./chat":1,"./login":3,"./paint":5,"./sockets":6}],3:[function(require,module,exports){
"use strict";

var _sockets = require("./sockets");

var body = document.querySelector("body");
var loginForm = document.getElementById("jsLogin");
var NICKNAME = "nickname";
var LOGGED_OUT = "loggedOut";
var LOGGED_IN = "loggedIn";
var nickname = localStorage.getItem(NICKNAME);

var logIn = function logIn(nickname) {
  var socket = io("/");
  socket.emit(window.events.setNickname, {
    nickname: nickname
  });
  (0, _sockets.initSockets)(socket);
};

if (nickname === null) {
  body.className = LOGGED_OUT;
} else {
  body.className = LOGGED_IN;
  logIn(nickname);
}

var handleFormSubmit = function handleFormSubmit(e) {
  e.preventDefault();
  var input = loginForm.querySelector("input");
  var value = input.value;
  input.value = "";
  localStorage.setItem(NICKNAME, value);
  body.className = LOGGED_IN;
  logIn(value);
};

if (loginForm) {
  loginForm.addEventListener("submit", handleFormSubmit);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmpzIl0sIm5hbWVzIjpbImJvZHkiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJsb2dpbkZvcm0iLCJnZXRFbGVtZW50QnlJZCIsIk5JQ0tOQU1FIiwiTE9HR0VEX09VVCIsIkxPR0dFRF9JTiIsIm5pY2tuYW1lIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImxvZ0luIiwic29ja2V0IiwiaW8iLCJlbWl0Iiwid2luZG93IiwiZXZlbnRzIiwic2V0Tmlja25hbWUiLCJjbGFzc05hbWUiLCJoYW5kbGVGb3JtU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiaW5wdXQiLCJ2YWx1ZSIsInNldEl0ZW0iLCJhZGRFdmVudExpc3RlbmVyIl0sIm1hcHBpbmdzIjoiOztBQUFBOztBQUVBLElBQU1BLElBQUksR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLE1BQXZCLENBQWI7QUFDQSxJQUFNQyxTQUFTLEdBQUdGLFFBQVEsQ0FBQ0csY0FBVCxDQUF3QixTQUF4QixDQUFsQjtBQUVBLElBQU1DLFFBQVEsR0FBRyxVQUFqQjtBQUNBLElBQU1DLFVBQVUsR0FBRyxXQUFuQjtBQUNBLElBQU1DLFNBQVMsR0FBRyxVQUFsQjtBQUVBLElBQU1DLFFBQVEsR0FBR0MsWUFBWSxDQUFDQyxPQUFiLENBQXFCTCxRQUFyQixDQUFqQjs7QUFFQSxJQUFNTSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxDQUFDSCxRQUFELEVBQWM7QUFDMUIsTUFBTUksTUFBTSxHQUFHQyxFQUFFLENBQUMsR0FBRCxDQUFqQjtBQUNBRCxFQUFBQSxNQUFNLENBQUNFLElBQVAsQ0FBWUMsTUFBTSxDQUFDQyxNQUFQLENBQWNDLFdBQTFCLEVBQXVDO0FBQUVULElBQUFBLFFBQVEsRUFBUkE7QUFBRixHQUF2QztBQUNBLDRCQUFZSSxNQUFaO0FBQ0QsQ0FKRDs7QUFNQSxJQUFJSixRQUFRLEtBQUssSUFBakIsRUFBdUI7QUFDckJSLEVBQUFBLElBQUksQ0FBQ2tCLFNBQUwsR0FBaUJaLFVBQWpCO0FBQ0QsQ0FGRCxNQUVPO0FBQ0xOLEVBQUFBLElBQUksQ0FBQ2tCLFNBQUwsR0FBaUJYLFNBQWpCO0FBQ0FJLEVBQUFBLEtBQUssQ0FBQ0gsUUFBRCxDQUFMO0FBQ0Q7O0FBRUQsSUFBTVcsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixDQUFDQyxDQUFELEVBQU87QUFDOUJBLEVBQUFBLENBQUMsQ0FBQ0MsY0FBRjtBQUNBLE1BQU1DLEtBQUssR0FBR25CLFNBQVMsQ0FBQ0QsYUFBVixDQUF3QixPQUF4QixDQUFkO0FBRjhCLE1BR3RCcUIsS0FIc0IsR0FHWkQsS0FIWSxDQUd0QkMsS0FIc0I7QUFLOUJELEVBQUFBLEtBQUssQ0FBQ0MsS0FBTixHQUFjLEVBQWQ7QUFDQWQsRUFBQUEsWUFBWSxDQUFDZSxPQUFiLENBQXFCbkIsUUFBckIsRUFBK0JrQixLQUEvQjtBQUNBdkIsRUFBQUEsSUFBSSxDQUFDa0IsU0FBTCxHQUFpQlgsU0FBakI7QUFDQUksRUFBQUEsS0FBSyxDQUFDWSxLQUFELENBQUw7QUFDRCxDQVREOztBQVdBLElBQUlwQixTQUFKLEVBQWU7QUFDYkEsRUFBQUEsU0FBUyxDQUFDc0IsZ0JBQVYsQ0FBMkIsUUFBM0IsRUFBcUNOLGdCQUFyQztBQUNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaW5pdFNvY2tldHMgfSBmcm9tIFwiLi9zb2NrZXRzXCI7XHJcblxyXG5jb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XHJcbmNvbnN0IGxvZ2luRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwianNMb2dpblwiKTtcclxuXHJcbmNvbnN0IE5JQ0tOQU1FID0gXCJuaWNrbmFtZVwiO1xyXG5jb25zdCBMT0dHRURfT1VUID0gXCJsb2dnZWRPdXRcIjtcclxuY29uc3QgTE9HR0VEX0lOID0gXCJsb2dnZWRJblwiO1xyXG5cclxuY29uc3Qgbmlja25hbWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShOSUNLTkFNRSk7XHJcblxyXG5jb25zdCBsb2dJbiA9IChuaWNrbmFtZSkgPT4ge1xyXG4gIGNvbnN0IHNvY2tldCA9IGlvKFwiL1wiKTtcclxuICBzb2NrZXQuZW1pdCh3aW5kb3cuZXZlbnRzLnNldE5pY2tuYW1lLCB7IG5pY2tuYW1lIH0pO1xyXG4gIGluaXRTb2NrZXRzKHNvY2tldCk7XHJcbn07XHJcblxyXG5pZiAobmlja25hbWUgPT09IG51bGwpIHtcclxuICBib2R5LmNsYXNzTmFtZSA9IExPR0dFRF9PVVQ7XHJcbn0gZWxzZSB7XHJcbiAgYm9keS5jbGFzc05hbWUgPSBMT0dHRURfSU47XHJcbiAgbG9nSW4obmlja25hbWUpO1xyXG59XHJcblxyXG5jb25zdCBoYW5kbGVGb3JtU3VibWl0ID0gKGUpID0+IHtcclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgY29uc3QgaW5wdXQgPSBsb2dpbkZvcm0ucXVlcnlTZWxlY3RvcihcImlucHV0XCIpO1xyXG4gIGNvbnN0IHsgdmFsdWUgfSA9IGlucHV0O1xyXG5cclxuICBpbnB1dC52YWx1ZSA9IFwiXCI7XHJcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oTklDS05BTUUsIHZhbHVlKTtcclxuICBib2R5LmNsYXNzTmFtZSA9IExPR0dFRF9JTjtcclxuICBsb2dJbih2YWx1ZSk7XHJcbn07XHJcblxyXG5pZiAobG9naW5Gb3JtKSB7XHJcbiAgbG9naW5Gb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgaGFuZGxlRm9ybVN1Ym1pdCk7XHJcbn1cclxuIl19
},{"./sockets":6}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleDisconnected = exports.handleNewUser = void 0;
var body = document.querySelector("body");

var fireNotification = function fireNotification(text, color) {
  var notification = document.createElement("div");
  notification.innerText = text;
  notification.style.backgroundColor = color;
  notification.className = "notification";
  body.appendChild(notification);
};

var handleNewUser = function handleNewUser(_ref) {
  var nickname = _ref.nickname;
  return fireNotification("".concat(nickname, " just joined!"), "rgb(0, 122, 255)");
};

exports.handleNewUser = handleNewUser;

var handleDisconnected = function handleDisconnected(_ref2) {
  var nickname = _ref2.nickname;
  return fireNotification("".concat(nickname, " just left!"), "rgb(255, 149, 0)");
};

exports.handleDisconnected = handleDisconnected;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vdGlmaWNhdGlvbnMuanMiXSwibmFtZXMiOlsiYm9keSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImZpcmVOb3RpZmljYXRpb24iLCJ0ZXh0IiwiY29sb3IiLCJub3RpZmljYXRpb24iLCJjcmVhdGVFbGVtZW50IiwiaW5uZXJUZXh0Iiwic3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjbGFzc05hbWUiLCJhcHBlbmRDaGlsZCIsImhhbmRsZU5ld1VzZXIiLCJuaWNrbmFtZSIsImhhbmRsZURpc2Nvbm5lY3RlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsSUFBTUEsSUFBSSxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsTUFBdkIsQ0FBYjs7QUFFQSxJQUFNQyxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLENBQUNDLElBQUQsRUFBT0MsS0FBUCxFQUFpQjtBQUN4QyxNQUFNQyxZQUFZLEdBQUdMLFFBQVEsQ0FBQ00sYUFBVCxDQUF1QixLQUF2QixDQUFyQjtBQUNBRCxFQUFBQSxZQUFZLENBQUNFLFNBQWIsR0FBeUJKLElBQXpCO0FBQ0FFLEVBQUFBLFlBQVksQ0FBQ0csS0FBYixDQUFtQkMsZUFBbkIsR0FBcUNMLEtBQXJDO0FBQ0FDLEVBQUFBLFlBQVksQ0FBQ0ssU0FBYixHQUF5QixjQUF6QjtBQUNBWCxFQUFBQSxJQUFJLENBQUNZLFdBQUwsQ0FBaUJOLFlBQWpCO0FBQ0QsQ0FORDs7QUFRTyxJQUFNTyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCO0FBQUEsTUFBR0MsUUFBSCxRQUFHQSxRQUFIO0FBQUEsU0FDM0JYLGdCQUFnQixXQUFJVyxRQUFKLG9CQUE2QixrQkFBN0IsQ0FEVztBQUFBLENBQXRCOzs7O0FBR0EsSUFBTUMsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQjtBQUFBLE1BQUdELFFBQUgsU0FBR0EsUUFBSDtBQUFBLFNBQ2hDWCxnQkFBZ0IsV0FBSVcsUUFBSixrQkFBMkIsa0JBQTNCLENBRGdCO0FBQUEsQ0FBM0IiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XHJcblxyXG5jb25zdCBmaXJlTm90aWZpY2F0aW9uID0gKHRleHQsIGNvbG9yKSA9PiB7XHJcbiAgY29uc3Qgbm90aWZpY2F0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBub3RpZmljYXRpb24uaW5uZXJUZXh0ID0gdGV4dDtcclxuICBub3RpZmljYXRpb24uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gY29sb3I7XHJcbiAgbm90aWZpY2F0aW9uLmNsYXNzTmFtZSA9IFwibm90aWZpY2F0aW9uXCI7XHJcbiAgYm9keS5hcHBlbmRDaGlsZChub3RpZmljYXRpb24pO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGhhbmRsZU5ld1VzZXIgPSAoeyBuaWNrbmFtZSB9KSA9PlxyXG4gIGZpcmVOb3RpZmljYXRpb24oYCR7bmlja25hbWV9IGp1c3Qgam9pbmVkIWAsIFwicmdiKDAsIDEyMiwgMjU1KVwiKTtcclxuXHJcbmV4cG9ydCBjb25zdCBoYW5kbGVEaXNjb25uZWN0ZWQgPSAoeyBuaWNrbmFtZSB9KSA9PlxyXG4gIGZpcmVOb3RpZmljYXRpb24oYCR7bmlja25hbWV9IGp1c3QgbGVmdCFgLCBcInJnYigyNTUsIDE0OSwgMClcIik7XHJcbiJdfQ==
},{}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleStrokedPath = exports.handleBeganPath = void 0;

var _sockets = require("./sockets");

var canvas = document.getElementById("jsCanvas");
var ctx = canvas.getContext("2d");
var colors = document.getElementsByClassName("jsColor");
var mode = document.getElementById("jsMode");
var INITIAL_COLOR = "#2c2c2c";
var CANVAS_SIZE = 700;
canvas.width = CANVAS_SIZE;
canvas.height = CANVAS_SIZE;
ctx.fillStyle = "white";
ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
ctx.strokeStyle = INITIAL_COLOR;
ctx.fillStyle = INITIAL_COLOR;
ctx.lineWidth = 2.5;
var painting = false;
var filling = false;

function stopPainting() {
  painting = false;
}

function startPainting() {
  painting = true;
}

var beginPath = function beginPath(x, y) {
  ctx.beginPath();
  ctx.moveTo(x, y);
};

var strokePath = function strokePath(x, y) {
  ctx.lineTo(x, y);
  ctx.stroke();
};

function onMouseMove(event) {
  var x = event.offsetX;
  var y = event.offsetY;

  if (!painting) {
    beginPath(x, y);
    (0, _sockets.getSocket)().emit(window.events.beginPath, {
      x: x,
      y: y
    });
  } else {
    strokePath(x, y);
    (0, _sockets.getSocket)().emit(window.events.strokePath, {
      x: x,
      y: y
    });
  }
}

function handleColorClick(event) {
  var color = event.target.style.backgroundColor;
  ctx.strokeStyle = color;
  ctx.fillStyle = color;
}

function handleModeClick() {
  if (filling === true) {
    filling = false;
    mode.innerText = "Fill";
  } else {
    filling = true;
    mode.innerText = "Paint";
  }
}

function handleCanvasClick() {
  if (filling) {
    ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
  }
}

function handleCM(event) {
  event.preventDefault();
}

if (canvas) {
  canvas.addEventListener("mousemove", onMouseMove);
  canvas.addEventListener("mousedown", startPainting);
  canvas.addEventListener("mouseup", stopPainting);
  canvas.addEventListener("mouseleave", stopPainting);
  canvas.addEventListener("click", handleCanvasClick);
  canvas.addEventListener("contextmenu", handleCM);
}

Array.from(colors).forEach(function (color) {
  return color.addEventListener("click", handleColorClick);
});

if (mode) {
  mode.addEventListener("click", handleModeClick);
}

var handleBeganPath = function handleBeganPath(_ref) {
  var x = _ref.x,
      y = _ref.y;
  return beginPath(x, y);
};

exports.handleBeganPath = handleBeganPath;

var handleStrokedPath = function handleStrokedPath(_ref2) {
  var x = _ref2.x,
      y = _ref2.y;
  return strokePath(x, y);
};

exports.handleStrokedPath = handleStrokedPath;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhaW50LmpzIl0sIm5hbWVzIjpbImNhbnZhcyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjdHgiLCJnZXRDb250ZXh0IiwiY29sb3JzIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsIm1vZGUiLCJJTklUSUFMX0NPTE9SIiwiQ0FOVkFTX1NJWkUiLCJ3aWR0aCIsImhlaWdodCIsImZpbGxTdHlsZSIsImZpbGxSZWN0Iiwic3Ryb2tlU3R5bGUiLCJsaW5lV2lkdGgiLCJwYWludGluZyIsImZpbGxpbmciLCJzdG9wUGFpbnRpbmciLCJzdGFydFBhaW50aW5nIiwiYmVnaW5QYXRoIiwieCIsInkiLCJtb3ZlVG8iLCJzdHJva2VQYXRoIiwibGluZVRvIiwic3Ryb2tlIiwib25Nb3VzZU1vdmUiLCJldmVudCIsIm9mZnNldFgiLCJvZmZzZXRZIiwiZW1pdCIsIndpbmRvdyIsImV2ZW50cyIsImhhbmRsZUNvbG9yQ2xpY2siLCJjb2xvciIsInRhcmdldCIsInN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwiaGFuZGxlTW9kZUNsaWNrIiwiaW5uZXJUZXh0IiwiaGFuZGxlQ2FudmFzQ2xpY2siLCJoYW5kbGVDTSIsInByZXZlbnREZWZhdWx0IiwiYWRkRXZlbnRMaXN0ZW5lciIsIkFycmF5IiwiZnJvbSIsImZvckVhY2giLCJoYW5kbGVCZWdhblBhdGgiLCJoYW5kbGVTdHJva2VkUGF0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUVBLElBQU1BLE1BQU0sR0FBR0MsUUFBUSxDQUFDQyxjQUFULENBQXdCLFVBQXhCLENBQWY7QUFDQSxJQUFNQyxHQUFHLEdBQUdILE1BQU0sQ0FBQ0ksVUFBUCxDQUFrQixJQUFsQixDQUFaO0FBQ0EsSUFBTUMsTUFBTSxHQUFHSixRQUFRLENBQUNLLHNCQUFULENBQWdDLFNBQWhDLENBQWY7QUFDQSxJQUFNQyxJQUFJLEdBQUdOLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixRQUF4QixDQUFiO0FBRUEsSUFBTU0sYUFB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QUFBQSxNQUFNQyxDQUFOLFNBQU1BLENBQU47QUFBQSxTQUFjRSxVQUFVLENBQUNILENBQUQsRUFBSUMsQ0FBSixDQUF4QjtBQUFBLENBQTFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0U29ja2V0IH0gZnJvbSBcIi4vc29ja2V0c1wiO1xyXG5cclxuY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJqc0NhbnZhc1wiKTtcclxuY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcclxuY29uc3QgY29sb3JzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImpzQ29sb3JcIik7XHJcbmNvbnN0IG1vZGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImpzTW9kZVwiKTtcclxuXHJcbmNvbnN0IElOSVRJQUxfQ09MT1IgPSBcIiMyYzJjMmNcIjtcclxuY29uc3QgQ0FOVkFTX1NJWkUgPSA3MDA7XHJcblxyXG5jYW52YXMud2lkdGggPSBDQU5WQVNfU0laRTtcclxuY2FudmFzLmhlaWdodCA9IENBTlZBU19TSVpFO1xyXG5cclxuY3R4LmZpbGxTdHlsZSA9IFwid2hpdGVcIjtcclxuY3R4LmZpbGxSZWN0KDAsIDAsIENBTlZBU19TSVpFLCBDQU5WQVNfU0laRSk7XHJcbmN0eC5zdHJva2VTdHlsZSA9IElOSVRJQUxfQ09MT1I7XHJcbmN0eC5maWxsU3R5bGUgPSBJTklUSUFMX0NPTE9SO1xyXG5jdHgubGluZVdpZHRoID0gMi41O1xyXG5cclxubGV0IHBhaW50aW5nID0gZmFsc2U7XHJcbmxldCBmaWxsaW5nID0gZmFsc2U7XHJcblxyXG5mdW5jdGlvbiBzdG9wUGFpbnRpbmcoKSB7XHJcbiAgcGFpbnRpbmcgPSBmYWxzZTtcclxufVxyXG5cclxuZnVuY3Rpb24gc3RhcnRQYWludGluZygpIHtcclxuICBwYWludGluZyA9IHRydWU7XHJcbn1cclxuXHJcbmNvbnN0IGJlZ2luUGF0aCA9ICh4LCB5KSA9PiB7XHJcbiAgY3R4LmJlZ2luUGF0aCgpO1xyXG4gIGN0eC5tb3ZlVG8oeCwgeSk7XHJcbn07XHJcblxyXG5jb25zdCBzdHJva2VQYXRoID0gKHgsIHkpID0+IHtcclxuICBjdHgubGluZVRvKHgsIHkpO1xyXG4gIGN0eC5zdHJva2UoKTtcclxufTtcclxuXHJcbmZ1bmN0aW9uIG9uTW91c2VNb3ZlKGV2ZW50KSB7XHJcbiAgY29uc3QgeCA9IGV2ZW50Lm9mZnNldFg7XHJcbiAgY29uc3QgeSA9IGV2ZW50Lm9mZnNldFk7XHJcbiAgaWYgKCFwYWludGluZykge1xyXG4gICAgYmVnaW5QYXRoKHgsIHkpO1xyXG4gICAgZ2V0U29ja2V0KCkuZW1pdCh3aW5kb3cuZXZlbnRzLmJlZ2luUGF0aCwgeyB4LCB5IH0pO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBzdHJva2VQYXRoKHgsIHkpO1xyXG4gICAgZ2V0U29ja2V0KCkuZW1pdCh3aW5kb3cuZXZlbnRzLnN0cm9rZVBhdGgsIHsgeCwgeSB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhhbmRsZUNvbG9yQ2xpY2soZXZlbnQpIHtcclxuICBjb25zdCBjb2xvciA9IGV2ZW50LnRhcmdldC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3I7XHJcbiAgY3R4LnN0cm9rZVN0eWxlID0gY29sb3I7XHJcbiAgY3R4LmZpbGxTdHlsZSA9IGNvbG9yO1xyXG59XHJcblxyXG5mdW5jdGlvbiBoYW5kbGVNb2RlQ2xpY2soKSB7XHJcbiAgaWYgKGZpbGxpbmcgPT09IHRydWUpIHtcclxuICAgIGZpbGxpbmcgPSBmYWxzZTtcclxuICAgIG1vZGUuaW5uZXJUZXh0ID0gXCJGaWxsXCI7XHJcbiAgfSBlbHNlIHtcclxuICAgIGZpbGxpbmcgPSB0cnVlO1xyXG4gICAgbW9kZS5pbm5lclRleHQgPSBcIlBhaW50XCI7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBoYW5kbGVDYW52YXNDbGljaygpIHtcclxuICBpZiAoZmlsbGluZykge1xyXG4gICAgY3R4LmZpbGxSZWN0KDAsIDAsIENBTlZBU19TSVpFLCBDQU5WQVNfU0laRSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBoYW5kbGVDTShldmVudCkge1xyXG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbn1cclxuXHJcbmlmIChjYW52YXMpIHtcclxuICBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBvbk1vdXNlTW92ZSk7XHJcbiAgY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgc3RhcnRQYWludGluZyk7XHJcbiAgY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsIHN0b3BQYWludGluZyk7XHJcbiAgY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsIHN0b3BQYWludGluZyk7XHJcbiAgY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoYW5kbGVDYW52YXNDbGljayk7XHJcbiAgY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJjb250ZXh0bWVudVwiLCBoYW5kbGVDTSk7XHJcbn1cclxuXHJcbkFycmF5LmZyb20oY29sb3JzKS5mb3JFYWNoKChjb2xvcikgPT5cclxuICBjb2xvci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlQ29sb3JDbGljaylcclxuKTtcclxuXHJcbmlmIChtb2RlKSB7XHJcbiAgbW9kZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlTW9kZUNsaWNrKTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGhhbmRsZUJlZ2FuUGF0aCA9ICh7IHgsIHkgfSkgPT4gYmVnaW5QYXRoKHgsIHkpO1xyXG5leHBvcnQgY29uc3QgaGFuZGxlU3Ryb2tlZFBhdGggPSAoeyB4LCB5IH0pID0+IHN0cm9rZVBhdGgoeCwgeSk7XHJcbiJdfQ==
},{"./sockets":6}],6:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initSockets = exports.updateSocket = exports.getSocket = void 0;

var _notifications = require("./notifications");

var _chat = require("./chat");

var _paint = require("./paint");

var socket = null;

var getSocket = function getSocket() {
  return socket;
};

exports.getSocket = getSocket;

var updateSocket = function updateSocket(aSocket) {
  return socket = aSocket;
};

exports.updateSocket = updateSocket;

var initSockets = function initSockets(aSocket) {
  var _window = window,
      events = _window.events;
  updateSocket(aSocket);
  aSocket.on(events.newUser, _notifications.handleNewUser);
  aSocket.on(events.disconnected, _notifications.handleDisconnected);
  aSocket.on(events.newMsg, _chat.handleNewMessage);
  aSocket.on(events.beganPath, _paint.handleBeganPath);
  aSocket.on(events.strokedPath, _paint.handleStrokedPath);
};

exports.initSockets = initSockets;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNvY2tldHMuanMiXSwibmFtZXMiOlsic29ja2V0IiwiZ2V0U29ja2V0IiwidXBkYXRlU29ja2V0IiwiYVNvY2tldCIsImluaXRTb2NrZXRzIiwid2luZG93IiwiZXZlbnRzIiwib24iLCJuZXdVc2VyIiwiaGFuZGxlTmV3VXNlciIsImRpc2Nvbm5lY3RlZCIsImhhbmRsZURpc2Nvbm5lY3RlZCIsIm5ld01zZyIsImhhbmRsZU5ld01lc3NhZ2UiLCJiZWdhblBhdGgiLCJoYW5kbGVCZWdhblBhdGgiLCJzdHJva2VkUGF0aCIsImhhbmRsZVN0cm9rZWRQYXRoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBRUEsSUFBSUEsTUFBTSxHQUFHLElBQWI7O0FBRU8sSUFBTUMsU0FBUyxHQUFHLFNBQVpBLFNBQVk7QUFBQSxTQUFNRCxNQUFOO0FBQUEsQ0FBbEI7Ozs7QUFFQSxJQUFNRSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDQyxPQUFEO0FBQUEsU0FBY0gsTUFBTSxHQUFHRyxPQUF2QjtBQUFBLENBQXJCOzs7O0FBRUEsSUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ0QsT0FBRCxFQUFhO0FBQUEsZ0JBQ25CRSxNQURtQjtBQUFBLE1BQzlCQyxNQUQ4QixXQUM5QkEsTUFEOEI7QUFFdENKLEVBQUFBLFlBQVksQ0FBQ0MsT0FBRCxDQUFaO0FBQ0FBLEVBQUFBLE9BQU8sQ0FBQ0ksRUFBUixDQUFXRCxNQUFNLENBQUNFLE9BQWxCLEVBQTJCQyw0QkFBM0I7QUFDQU4sRUFBQUEsT0FBTyxDQUFDSSxFQUFSLENBQVdELE1BQU0sQ0FBQ0ksWUFBbEIsRUFBZ0NDLGlDQUFoQztBQUNBUixFQUFBQSxPQUFPLENBQUNJLEVBQVIsQ0FBV0QsTUFBTSxDQUFDTSxNQUFsQixFQUEwQkMsc0JBQTFCO0FBQ0FWLEVBQUFBLE9BQU8sQ0FBQ0ksRUFBUixDQUFXRCxNQUFNLENBQUNRLFNBQWxCLEVBQTZCQyxzQkFBN0I7QUFDQVosRUFBQUEsT0FBTyxDQUFDSSxFQUFSLENBQVdELE1BQU0sQ0FBQ1UsV0FBbEIsRUFBK0JDLHdCQUEvQjtBQUNELENBUk0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBoYW5kbGVOZXdVc2VyLCBoYW5kbGVEaXNjb25uZWN0ZWQgfSBmcm9tIFwiLi9ub3RpZmljYXRpb25zXCI7XHJcbmltcG9ydCB7IGhhbmRsZU5ld01lc3NhZ2UgfSBmcm9tIFwiLi9jaGF0XCI7XHJcbmltcG9ydCB7IGhhbmRsZUJlZ2FuUGF0aCwgaGFuZGxlU3Ryb2tlZFBhdGggfSBmcm9tIFwiLi9wYWludFwiO1xyXG5cclxubGV0IHNvY2tldCA9IG51bGw7XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U29ja2V0ID0gKCkgPT4gc29ja2V0O1xyXG5cclxuZXhwb3J0IGNvbnN0IHVwZGF0ZVNvY2tldCA9IChhU29ja2V0KSA9PiAoc29ja2V0ID0gYVNvY2tldCk7XHJcblxyXG5leHBvcnQgY29uc3QgaW5pdFNvY2tldHMgPSAoYVNvY2tldCkgPT4ge1xyXG4gIGNvbnN0IHsgZXZlbnRzIH0gPSB3aW5kb3c7XHJcbiAgdXBkYXRlU29ja2V0KGFTb2NrZXQpO1xyXG4gIGFTb2NrZXQub24oZXZlbnRzLm5ld1VzZXIsIGhhbmRsZU5ld1VzZXIpO1xyXG4gIGFTb2NrZXQub24oZXZlbnRzLmRpc2Nvbm5lY3RlZCwgaGFuZGxlRGlzY29ubmVjdGVkKTtcclxuICBhU29ja2V0Lm9uKGV2ZW50cy5uZXdNc2csIGhhbmRsZU5ld01lc3NhZ2UpO1xyXG4gIGFTb2NrZXQub24oZXZlbnRzLmJlZ2FuUGF0aCwgaGFuZGxlQmVnYW5QYXRoKVxyXG4gIGFTb2NrZXQub24oZXZlbnRzLnN0cm9rZWRQYXRoLCBoYW5kbGVTdHJva2VkUGF0aClcclxufTtcclxuIl19
},{"./chat":1,"./notifications":4,"./paint":5}]},{},[2])