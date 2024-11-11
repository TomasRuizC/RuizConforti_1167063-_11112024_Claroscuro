$(document).ready(function () {
  $("#modoClaro").click(function () {
    $("body").removeClass("bg-dark text-white").addClass("bg-light text-dark");
    $("table").removeClass("table-dark");
  });

  $("#modoOscuro").click(function () {
    $("body").removeClass("bg-light text-dark").addClass("bg-dark text-white");
    $("table").addClass("table-dark");
  });
});
