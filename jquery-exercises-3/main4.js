$(function() {
      $("#increase").click( function()
           {
             if($("#rectangle").height() == 100)
             {
               $("#rectangle").height(10);
             }
             else
             {
              $("#rectangle").height($("#rectangle").height() + 10);
             }
           }
      );
      $("#color").click( function()
           {
             $("#rectangle").css("background", "green");
           }
      );
      $("#reset").click( function()
           {
             $("#rectangle").css("background", "red");
           }
      );
      $("#hide").click( function()
           {
             $("#rectangle").hide();
           }
      );
      $("#show").click( function()
           {
             $("#rectangle").show();
           }
      );
});
