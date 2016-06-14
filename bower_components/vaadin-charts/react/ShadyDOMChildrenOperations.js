"use strict";function lightDOMElement(e){return e.__isPolymerInstance__?Polymer.dom(e):e}function getNodeAfter(e,t){return Array.isArray(t)&&(t=t[1]),t?Polymer.dom(t).nextSibling:e.firstChild}function insertLazyTreeChildAt(e,t,r){DOMLazyTree.insertTreeBefore(e,t,r)}function moveChild(e,t,r){Array.isArray(t)?moveDelimitedText(e,t[0],t[1],r):insertChildAt(e,t,r)}function removeChild(e,t){if(Array.isArray(t)){var r=t[1];t=t[0],removeDelimitedText(e,t,r),e.removeChild(r)}e.removeChild(t)}function moveDelimitedText(e,t,r,i){for(var n=t;;){var o=n.nextSibling;if(insertChildAt(e,n,i),n===r)break;n=o}}function removeDelimitedText(e,t,r){for(;;){var i=Polymer.dom(t).nextSibling;if(i===r)break;e.removeChild(i)}}function replaceDelimitedText(e,t,r){var i=lightDOMElement(Polymer.dom(e).parentNode),n=e.nextSibling;n===t?r&&insertChildAt(i,document.createTextNode(r),n):r?(setTextContent(n,r),removeDelimitedText(i,n,t)):removeDelimitedText(i,e,t)}var DOMLazyTree=require("react/lib/DOMLazyTree"),ReactMultiChildUpdateTypes=require("react/lib/ReactMultiChildUpdateTypes"),createMicrosoftUnsafeLocalFunction=require("react/lib/createMicrosoftUnsafeLocalFunction"),setInnerHTML=require("react/lib/setInnerHTML"),setTextContent=require("react/lib/setTextContent"),insertChildAt=createMicrosoftUnsafeLocalFunction(function(e,t,r){e.insertBefore(t,r)}),DOMChildrenOperations={replaceDelimitedText:replaceDelimitedText,processUpdates:function(e,t){e=lightDOMElement(e);for(var r=0;r<t.length;r++){var i=t[r];switch(i.type){case ReactMultiChildUpdateTypes.INSERT_MARKUP:insertLazyTreeChildAt(e,i.content,getNodeAfter(e,i.afterNode));break;case ReactMultiChildUpdateTypes.MOVE_EXISTING:moveChild(e,i.fromNode,getNodeAfter(e,i.afterNode));break;case ReactMultiChildUpdateTypes.SET_MARKUP:setInnerHTML(e,i.content);break;case ReactMultiChildUpdateTypes.TEXT_CONTENT:setTextContent(e,i.content);break;case ReactMultiChildUpdateTypes.REMOVE_NODE:removeChild(e,i.fromNode)}}}};module.exports=DOMChildrenOperations;