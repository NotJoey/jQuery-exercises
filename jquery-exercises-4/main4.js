$(function() {
      $("#submit").click( function()
           {
             let fname = $("#first_name").val();
             let name = $("#name").val();
             let pob = $("#pob").val();
             let dob = $("#dob").val();
             let work = $("#work").val();
             let company = $("#company").val();
             let companyloc = $("#company_location").val();
             $("#result").text(fname + " " + name + ", Born " + dob + " in " + pob + ", currently a " + work + " in " + companyloc);
           }
      );
});
