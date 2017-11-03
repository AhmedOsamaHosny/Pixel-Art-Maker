$(document).ready(function() {
  $('#submitted').unbind('click').click(makeGrid);
  let color, height, width;

  function makeGrid(e) {
    e.preventDefault();
    color = $('#colorPicker').val();
    height = $('#input_height').val();
    width = $('#input_width').val();

    for (let i = 0; i < height; i++) {
      $("#pixel_canvas").append("<tr></tr>");
      for (let j = 0; j < width; j++) {
        $("tr").last().append("<td></td>");
      }
    }
  };

  $(document).unbind('click').on("click", "td", function() {
    $(this).css("background-color", color);
  });
});
