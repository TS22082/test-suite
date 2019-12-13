$(document).ready(() => {
  $.ajax({
    type: "GET",
    url: "/api"
  }).then(res => {
    console.log(res);
  });
});
