// Write your solution here
$(function() {
      $("#red").hover( function()
           {
             $('#text').css("color", "red");
           }, function() {
             $('#text').css("color", "black");
           }
      );
      $("#green").hover( function()
           {
             $('#text').css("color", "green");
           }, function() {
            $('#text').css("color", "black");
           }
      );
      $("#blue").hover( function()
           {
             $('#text').css("color", "blue");
           }, function() {
             $('#text').css("color", "black");
           }
      );
});
