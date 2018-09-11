
function doit() {
  var query = $("#search").val();
console.log(query);
  var url = $.get(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=GlK3OuB6tPyAXkwD6jclG9HFFVuCHlFa`);
  url.then (function (data) { console.log("success got data", data); });
}
