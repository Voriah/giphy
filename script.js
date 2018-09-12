var topics = ["overwatch", "destiny", "warcraft", "fails", "wins", "cats", "wat"];

$(document).ready(function () {
  $('.carousel').carousel();
  $('.carousel-slider').slider({ full_width: true });

  for (i = 0; i < topics.length; i++) {
    $(".buttons").append(`
  <a class="searchBtn waves-effect waves-light btn">${topics[i]}</a>
  `);
  }
});

var carnum = 0;

function doit() {
  event.preventDefault();
  var query = $("#search").val();
  $(".buttons").append(`
  <a class="searchBtn waves-effect waves-light btn">${query}</a>
  `);
  $("#search").val("")
}

$(document).on("click", ".searchBtn", function () {
  var query = $(this).text();
  console.log(query)
  var url = $.get(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=GlK3OuB6tPyAXkwD6jclG9HFFVuCHlFa`)
  .then (function (response) { 
    console.log(response); 
    var ids = "car" + carnum;
    $(".gifHolder").append(`<div id="${ids}" class="carousel carousel-slider"></div>`)
    for (i = 0; i < 10; i++) {
      $(`#${ids}`).append(`<a class="carousel-item"><img class="gifs" src='${response.data[i].images.original_still.url}' alt="${response.data[i].images.original.url}"></a>`);
    };
    carnum++

    setTimeout(function() {
    $('.carousel').carousel();
    $('.carousel-slider').slider({ full_width: true });
    }, 500)
  }).catch() 
  
});

$(document).on("click", ".gifs", function () {
  var still = $(this).attr("src")
  var anim = $(this).attr("alt")

  $(this).attr("src", anim)
  $(this).attr("alt", still)
});