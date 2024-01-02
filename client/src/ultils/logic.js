$(document).ready(function () {
  var numItems = $(".product").length;
  var itemsToShow = 5;
  var hidden = numItems - itemsToShow;
  $(".product:gt(" + (itemsToShow - 1) + ")").hide();

  $("#nextButton").click(function () {
    var currentShowing = $(".product:visible").length;
    if (currentShowing + itemsToShow <= numItems) {
      $(".product:visible")
        .last()
        .nextAll(":lt(" + itemsToShow + ")")
        .show();
      $("html, body").animate(
        {
          scrollLeft: $(".product-container").width(),
        },
        800
      );
    } else {
      $(".product:visible").last().nextAll().show();
      $(this).hide();
    }
  });
});
