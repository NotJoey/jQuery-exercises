$(function() {
      $("#calculate").click( function()
           {
             let deduct = $("#salary").val() * (30/100);
             let deducted = $("#salary").val() - deduct;

             if($("#gender").val() == "female")
             {
               deducted += deducted * (2/100);
             }
             if($("#children" == "3"))
             {
               deducted += deducted * (1/100);
             }
             if($("#children" == "4"))
             {
               deducted += deducted * (2/100);
             }
             $("#result").text(deducted);
           }
      );
});
