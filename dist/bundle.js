!function(e){var t={};function n(r){if(t[r])return t[r].exports;var c=t[r]={i:r,l:!1,exports:{}};return e[r].call(c.exports,c,c.exports,n),c.l=!0,c.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)n.d(r,c,function(t){return e[t]}.bind(null,c));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=5)}([function(e,t,n){"use strict";function r(e,t){var n=new XMLHttpRequest;n.overrideMimeType("application/json"),n.open("GET",e,!0),n.onreadystatechange=function(){4===n.readyState&&"200"==n.status&&t(n.responseText)},n.send(null)}n.r(t),n.d(t,"readTextFile",(function(){return r}))},function(e,t,n){"use strict";function r(){document.getElementById("myUL").addEventListener("click",(function(e){var t=e.target;"LI"===t.tagName&&t.classList.toggle("checked")}),!1)}n.r(t),n.d(t,"checked",(function(){return r}))},function(e,t,n){"use strict";function r(){for(var e=document.getElementsByTagName("LI"),t=0;t<e.length;t++){var n=document.createElement("SPAN"),r=document.createTextNode("×");n.className="close",n.appendChild(r),e[t].appendChild(n)}}n.r(t),n.d(t,"addBtn",(function(){return r}))},function(e,t,n){"use strict";function r(){var e=document.createElement("li");e.className="element";var t=document.getElementById("myInput").value,n=document.createTextNode(t);e.appendChild(n),""===t?alert("You must write something!"):document.getElementById("myUL").appendChild(e),document.getElementById("myInput").value="";var r=document.createElement("SPAN"),c=document.createTextNode("×");r.className="close",r.appendChild(c),e.appendChild(r)}n.r(t),n.d(t,"newElement",(function(){return r}))},function(e,t,n){"use strict";function r(e){e.parentElement.remove()}n.r(t),n.d(t,"delet",(function(){return r}))},function(e,t,n){n(0),n(6),n(2),n(4),n(3),n(1)},function(e,t,n){"use strict";n.r(t);var r=n(0),c=n(1),o=n(2),u=n(3),a=n(4);window.onload=function(){Object(r.readTextFile)("../data.json",(function(e){for(var t=JSON.parse(e),n=0;n<t.length;n++){var r=document.createElement("li");1==t[n].check?r.className="element checked":r.className="element";var d=document.createTextNode(t[n].info);r.appendChild(d),document.getElementById("myUL").appendChild(r)}Object(c.checked)(),Object(o.addBtn)(),document.getElementById("addbtn").onclick=function(){Object(u.newElement)()},document.getElementById("myUL").addEventListener("click",(function(e){var t=e.target;"SPAN"===t.tagName&&"close"===t.className&&Object(a.delet)(t)}),!1)}))}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vanMvcmVhZFRleHRGaWxlLnRzIiwid2VicGFjazovLy8uL2pzL2NoZWNrZWQudHMiLCJ3ZWJwYWNrOi8vLy4vanMvYWRkQnRuLnRzIiwid2VicGFjazovLy8uL2pzL2NyZWF0ZS50cyIsIndlYnBhY2s6Ly8vLi9qcy9kZWxldC50cyIsIndlYnBhY2s6Ly8vLi9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9qcy9pbml0RGF0YS50cyJdLCJuYW1lcyI6WyJpbnN0YWxsZWRNb2R1bGVzIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsIm1vZHVsZUlkIiwiZXhwb3J0cyIsIm1vZHVsZSIsImkiLCJsIiwibW9kdWxlcyIsImNhbGwiLCJtIiwiYyIsImQiLCJuYW1lIiwiZ2V0dGVyIiwibyIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZW51bWVyYWJsZSIsImdldCIsInIiLCJTeW1ib2wiLCJ0b1N0cmluZ1RhZyIsInZhbHVlIiwidCIsIm1vZGUiLCJfX2VzTW9kdWxlIiwibnMiLCJjcmVhdGUiLCJrZXkiLCJiaW5kIiwibiIsIm9iamVjdCIsInByb3BlcnR5IiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJwIiwicyIsInJlYWRUZXh0RmlsZSIsImZpbGUiLCJjYWxsYmFjayIsInJhd0ZpbGUiLCJYTUxIdHRwUmVxdWVzdCIsIm92ZXJyaWRlTWltZVR5cGUiLCJvcGVuIiwib25yZWFkeXN0YXRlY2hhbmdlIiwicmVhZHlTdGF0ZSIsInN0YXR1cyIsInJlc3BvbnNlVGV4dCIsInNlbmQiLCJjaGVja2VkIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJldiIsInRhcmdldCIsInRhZ05hbWUiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJhZGRCdG4iLCJteU5vZGVsaXN0IiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJsZW5ndGgiLCJzcGFuIiwiY3JlYXRlRWxlbWVudCIsInR4dCIsImNyZWF0ZVRleHROb2RlIiwiY2xhc3NOYW1lIiwiYXBwZW5kQ2hpbGQiLCJuZXdFbGVtZW50IiwibGkiLCJpbnB1dFZhbHVlIiwiYWxlcnQiLCJkZWxldCIsImVsZW0iLCJwYXJlbnRFbGVtZW50IiwicmVtb3ZlIiwid2luZG93Iiwib25sb2FkIiwidGV4dCIsImpzb24iLCJKU09OIiwicGFyc2UiLCJjaGVjayIsImluZm8iLCJvbmNsaWNrIl0sIm1hcHBpbmdzIjoiYUFDRSxJQUFJQSxFQUFtQixHQUd2QixTQUFTQyxFQUFvQkMsR0FHNUIsR0FBR0YsRUFBaUJFLEdBQ25CLE9BQU9GLEVBQWlCRSxHQUFVQyxRQUduQyxJQUFJQyxFQUFTSixFQUFpQkUsR0FBWSxDQUN6Q0csRUFBR0gsRUFDSEksR0FBRyxFQUNISCxRQUFTLElBVVYsT0FOQUksRUFBUUwsR0FBVU0sS0FBS0osRUFBT0QsUUFBU0MsRUFBUUEsRUFBT0QsUUFBU0YsR0FHL0RHLEVBQU9FLEdBQUksRUFHSkYsRUFBT0QsUUFLZkYsRUFBb0JRLEVBQUlGLEVBR3hCTixFQUFvQlMsRUFBSVYsRUFHeEJDLEVBQW9CVSxFQUFJLFNBQVNSLEVBQVNTLEVBQU1DLEdBQzNDWixFQUFvQmEsRUFBRVgsRUFBU1MsSUFDbENHLE9BQU9DLGVBQWViLEVBQVNTLEVBQU0sQ0FBRUssWUFBWSxFQUFNQyxJQUFLTCxLQUtoRVosRUFBb0JrQixFQUFJLFNBQVNoQixHQUNYLG9CQUFYaUIsUUFBMEJBLE9BQU9DLGFBQzFDTixPQUFPQyxlQUFlYixFQUFTaUIsT0FBT0MsWUFBYSxDQUFFQyxNQUFPLFdBRTdEUCxPQUFPQyxlQUFlYixFQUFTLGFBQWMsQ0FBRW1CLE9BQU8sS0FRdkRyQixFQUFvQnNCLEVBQUksU0FBU0QsRUFBT0UsR0FFdkMsR0FEVSxFQUFQQSxJQUFVRixFQUFRckIsRUFBb0JxQixJQUMvQixFQUFQRSxFQUFVLE9BQU9GLEVBQ3BCLEdBQVcsRUFBUEUsR0FBOEIsaUJBQVZGLEdBQXNCQSxHQUFTQSxFQUFN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Q3hDZCxFQUFHRixZQUFZNUMsR0FDZjJCLFNBQVNDLGVBQWUsUUFBUWdCLFlBQVlFLEdBR2hELG9CQUNBLG1CQUNBbkIsU0FBU0MsZUFBZSxVQUFVaUMsUUFBVSxXQUN4Qyx3QkFHSWxDLFNBQVNDLGVBQWUsUUFDOUJDLGlCQUFpQixTQUFTLFNBQVVDLEdBQ3RDLElBQUlDLEVBQStCRCxFQUFHQyxPQUNYLFNBQW5CQSxFQUFPQyxTQUEyQyxVQUFyQkQsRUFBT1ksV0FDcEMsZ0JBQU1aLE1BRVgiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDUpO1xuIiwiZXhwb3J0IGZ1bmN0aW9uIHJlYWRUZXh0RmlsZShmaWxlOiBhbnksIGNhbGxiYWNrOiBhbnkpIHtcclxuICAgIHZhciByYXdGaWxlOmFueSA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG4gICAgcmF3RmlsZS5vdmVycmlkZU1pbWVUeXBlKFwiYXBwbGljYXRpb24vanNvblwiKTtcclxuICAgIHJhd0ZpbGUub3BlbihcIkdFVFwiLCBmaWxlLCB0cnVlKTtcclxuICAgIHJhd0ZpbGUub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmIChyYXdGaWxlLnJlYWR5U3RhdGUgPT09IDQgJiYgcmF3RmlsZS5zdGF0dXMgPT0gXCIyMDBcIikge1xyXG4gICAgICAgICAgICBjYWxsYmFjayhyYXdGaWxlLnJlc3BvbnNlVGV4dCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmF3RmlsZS5zZW5kKG51bGwpO1xyXG59XHJcbiIsImV4cG9ydCBmdW5jdGlvbiBjaGVja2VkKCkge1xyXG4gICAgLy8gQWRkIGEgXCJjaGVja2VkXCIgc3ltYm9sIHdoZW4gY2xpY2tpbmcgb24gYSBsaXN0IGl0ZW1cclxuICAgIHZhciB0b2RvbGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibXlVTFwiKTtcclxuICAgIHRvZG9saXN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGV2KSB7XHJcblxyXG4gICAgICAgIGxldCB0YXJnZXQgPSAoPEhUTUxUZXh0QXJlYUVsZW1lbnQ+ZXYudGFyZ2V0KTtcclxuXHJcbiAgICAgICAgaWYgKHRhcmdldC50YWdOYW1lID09PSAnTEknKSB7XHJcbiAgICAgICAgICAgIHRhcmdldC5jbGFzc0xpc3QudG9nZ2xlKCdjaGVja2VkJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgZmFsc2UpO1xyXG59IiwiZXhwb3J0IGZ1bmN0aW9uIGFkZEJ0bigpe1xyXG4gICAgLy8gQ3JlYXRlIGEgXCJjbG9zZVwiIGJ1dHRvbiBhbmQgYXBwZW5kIGl0IHRvIGVhY2ggbGlzdCBpdGVtXHJcbiAgICB2YXIgbXlOb2RlbGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiTElcIik7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBteU5vZGVsaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgdmFyIHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiU1BBTlwiKTtcclxuLy8gICAgICAgIHNwYW4uc2V0QXR0cmlidXRlKFwib25jbGlja1wiLCBcImRlbGV0KHRoaXMpXCIpO1xyXG4gICAgICAgIHZhciB0eHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlxcdTAwRDdcIik7XHJcbiAgICAgICAgc3Bhbi5jbGFzc05hbWUgPSBcImNsb3NlXCI7XHJcbiAgICAgICAgc3Bhbi5hcHBlbmRDaGlsZCh0eHQpO1xyXG4gICAgICAgIG15Tm9kZWxpc3RbaV0uYXBwZW5kQ2hpbGQoc3Bhbik7XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgZnVuY3Rpb24gbmV3RWxlbWVudCgpIHtcclxuICAgIHZhciBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcclxuICAgIGxpLmNsYXNzTmFtZSA9IFwiZWxlbWVudFwiO1xyXG4gICAgdmFyIGlucHV0VmFsdWUgPSAoPEhUTUxJbnB1dEVsZW1lbnQ+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJteUlucHV0XCIpKS52YWx1ZTtcclxuICAgIHZhciB0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoaW5wdXRWYWx1ZSk7XHJcbiAgICBsaS5hcHBlbmRDaGlsZCh0KTtcclxuICAgIGlmIChpbnB1dFZhbHVlID09PSAnJykge1xyXG4gICAgICAgIGFsZXJ0KFwiWW91IG11c3Qgd3JpdGUgc29tZXRoaW5nIVwiKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJteVVMXCIpLmFwcGVuZENoaWxkKGxpKTtcclxuICAgIH1cclxuICAgICg8SFRNTElucHV0RWxlbWVudD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm15SW5wdXRcIikpLnZhbHVlID0gXCJcIjtcclxuXHJcbiAgICB2YXIgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJTUEFOXCIpO1xyXG4vLyAgICBzcGFuLnNldEF0dHJpYnV0ZShcIm9uY2xpY2tcIiwgXCJkZWxldCh0aGlzKVwiKTtcclxuICAgIHZhciB0eHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlxcdTAwRDdcIik7XHJcbiAgICBzcGFuLmNsYXNzTmFtZSA9IFwiY2xvc2VcIjtcclxuICAgIHNwYW4uYXBwZW5kQ2hpbGQodHh0KTtcclxuICAgIGxpLmFwcGVuZENoaWxkKHNwYW4pO1xyXG5cclxuLy8gICAgZm9yIChpID0gMDsgaSA8IGNsb3NlLmxlbmd0aDsgaSsrKSB7XHJcbi8vICAgICAgICBjbG9zZVtpXS5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xyXG4vLyAgICAgICAgICAgIHZhciBkaXYgPSB0aGlzLnBhcmVudEVsZW1lbnQ7XHJcbi8vICAgICAgICAgICAgZGl2LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuLy8gICAgICAgIH1cclxuLy8gICAgfVxyXG59IiwiZXhwb3J0IGZ1bmN0aW9uIGRlbGV0KGVsZW06IGFueSl7ICAgIFxyXG4gICAgLy8gQ2xpY2sgb24gYSBjbG9zZSBidXR0b24gdG8gaGlkZSB0aGUgY3VycmVudCBsaXN0IGl0ZW1cclxuICAgIHZhciBkaXYgPSBlbGVtLnBhcmVudEVsZW1lbnQ7XHJcbiAgICBkaXYucmVtb3ZlKCk7XHJcbn0iLCJyZXF1aXJlKFwiLi9qcy9yZWFkVGV4dEZpbGUudHNcIik7XHJcbnJlcXVpcmUoXCIuL2pzL2luaXREYXRhLnRzXCIpO1xyXG5yZXF1aXJlKFwiLi9qcy9hZGRCdG4udHNcIik7XHJcbnJlcXVpcmUoXCIuL2pzL2RlbGV0LnRzXCIpO1xyXG5yZXF1aXJlKFwiLi9qcy9jcmVhdGUudHNcIik7XHJcbnJlcXVpcmUoXCIuL2pzL2NoZWNrZWQudHNcIik7IiwiaW1wb3J0IHsgcmVhZFRleHRGaWxlIH0gZnJvbSBcIi4vcmVhZFRleHRGaWxlXCI7XHJcbmltcG9ydCB7IGNoZWNrZWQgfSBmcm9tIFwiLi9jaGVja2VkXCI7XHJcbmltcG9ydCB7IGFkZEJ0biB9IGZyb20gXCIuL2FkZEJ0blwiO1xyXG5pbXBvcnQgeyBuZXdFbGVtZW50IH0gZnJvbSBcIi4vY3JlYXRlXCI7XHJcbmltcG9ydCB7IGRlbGV0IH0gZnJvbSBcIi4vZGVsZXRcIjtcclxuXHJcbndpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICByZWFkVGV4dEZpbGUoXCIuLi9kYXRhLmpzb25cIiwgZnVuY3Rpb24gKHRleHQ6c3RyaW5nKSB7XHJcbiAgICAgICAgdmFyIGpzb24gPSBKU09OLnBhcnNlKHRleHQpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwganNvbi5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB2YXIgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcbiAgICAgICAgICAgIGlmIChqc29uW2ldLmNoZWNrID09IDEpIHtcclxuICAgICAgICAgICAgICAgIGxpLmNsYXNzTmFtZSA9IFwiZWxlbWVudCBjaGVja2VkXCI7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBsaS5jbGFzc05hbWUgPSBcImVsZW1lbnRcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB2YXIgdCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGpzb25baV0uaW5mbyk7XHJcbiAgICAgICAgICAgIGxpLmFwcGVuZENoaWxkKHQpO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm15VUxcIikuYXBwZW5kQ2hpbGQobGkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY2hlY2tlZCgpO1xyXG4gICAgICAgIGFkZEJ0bigpO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkYnRuXCIpLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIG5ld0VsZW1lbnQoKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB2YXIgeCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibXlVTFwiKTtcclxuICAgICAgICB4LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGV2KSB7XHJcbiAgICAgICAgbGV0IHRhcmdldCA9ICg8SFRNTFRleHRBcmVhRWxlbWVudD5ldi50YXJnZXQpO1xyXG4gICAgICAgICAgICBpZiAodGFyZ2V0LnRhZ05hbWUgPT09ICdTUEFOJyAmJiB0YXJnZXQuY2xhc3NOYW1lID09PSAnY2xvc2UnKSB7XHJcbiAgICAgICAgICAgICAgICBkZWxldCh0YXJnZXQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgZmFsc2UpO1xyXG4gICAgfSk7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9