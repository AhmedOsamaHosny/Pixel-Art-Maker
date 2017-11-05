document.addEventListener("DOMContentLoaded", function() {
  $('#submitted').unbind('click').click(makeGrid);
  let color, height, width;
  // This function makes the grid (draws the cols and rows)
  function makeGrid(e) {
    e.preventDefault();
    delete_prev_grid();
    height = $('#input_height').val();
    width = $('#input_width').val();

    for (let i = 0; i < height; i++) {
      $("#pixel_canvas").append("<tr></tr>");
      for (let j = 0; j < width; j++) {
        $("tr").last().append("<td></td>");
      }
    }
  };
  //This function deletes the previous grid
  function delete_prev_grid() {
    var table = document.getElementById("pixel_canvas");
    var rowCount = table.rows.length;
    while (table.rows.length > 0) {
      table.deleteRow(0);
    }
  };
  //This function is to color the cells 
  $(document).on("click", "td", function() {
    color = $('#colorPicker').val();
    $(this).css("background-color", color);
  });
});
