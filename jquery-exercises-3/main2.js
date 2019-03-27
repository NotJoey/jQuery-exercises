$(function() {
  let clicks = 0;
  $("input:text").val(clicks);
      $("#add").click( function()
           {
             $("input:text").val(++clicks);
           }
      );
      $("#subtract").click( function()
           {
             $("input:text").val(--clicks);
           }
      );
});
