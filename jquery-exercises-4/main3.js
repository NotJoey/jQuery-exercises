$(function() {
      $("#check").click( function()
           {

           }
      );
});

function validateEmail(email) {
  var emailReg = new RegExp(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/);
  return emailReg.test(email);
}
function phone_validate(phno)
{
  var regexPattern=new RegExp(/^[0-9-+]+$/);
  return regexPattern.test(phno);
}
