let number = Math.floor(Math.random() * 100) + 1 ;
let guess = 0;
$("title").text(number);

$(function() {
      $("#check").click( function()
           {
             guess = new Number($('input:text').val());
             if(guess > number)
             {
               $("p").text("Guess lower!");
             }
             if(guess < number)
             {
               $("p").text("Guess higher!");
             }
             if(guess == number)
             {
               $("p").text("Correct!");
             }
           }
      );
});
