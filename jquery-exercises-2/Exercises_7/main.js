$(document).ready(function(){
    /* On click: Enlarge the font (120%) */
    $("#1").click( function()
         {
           $('#content').css("font-size", "120%");
         }
    );

    /* On click: Decrease the font size (80%) */
    $("#2").click( function()
         {
           $('#content').css("font-size", "80%");
         }
    );

    /* On click: Bold or normalize the green words */
    let green_status = "normal";
    $("#3").click( function()
         {
           if(green_status == "normal")
           {
             green_status = "bold";
             $('.green').css("font-weight", "bold");
           }
           else if (green_status == "bold")
           {
             green_status = "normal";
             $('.green').css("font-weight", "normal");
           }
         }
    );

    /* On click: Bold or normalize the red words */
    let red_status = "none";
    $("#4").click( function()
         {
           if(red_status == "none")
           {
             red_status = "underline";
             $('.red').css("text-decoration", "underline");
           }
           else if (red_status == "underline")
           {
             red_status = "none";
             $('.red').css("text-decoration", "none");
           }
         }
    );

    /* On click: Replace the logo with another image */
    $("#5").hover( function()
         {
           $("#img").attr("src","images/koala.jpg");
         }, function() {
           $("#img").attr("src","images/jquery-logo.png");
         }
    );

    /* On hover: Display the URL of links in a tooltip when hovering over links */
    $("a").hover( function()
         {
           $("a").css("color", "pink");
         }, function() {
           $("a").css("color", "blue");
         }
    );

    /* On click: add "Chapter 1:" before the 1st title h2 and "Chapter 2:" before the 2nd title h2 */
    $("#7").click( function()
         {
           $("#h2_1").prepend("Chapter 1: ");
           $("#h2_2").prepend("Chapter 2: ");
         }
    );
});
