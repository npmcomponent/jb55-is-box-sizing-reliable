// from jquery

module.exports = (function() {
  var div = window.__testdiv || (window.__testdiv = document.createElement("div"));
  return (window.getComputedStyle(div, null) || { width: "4px" }).width === "4px";
})()
