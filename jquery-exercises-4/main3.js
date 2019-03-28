$(function() {
      $("#check").click( function()
           {
             if(!validateEmail($("email").val()))
             {
               alert("Email is good");
             }
             else
             {
               alert("Email is bad");
             }
             if(!phone_validate($("phone").val()))
             {
               alert("Phone is good");
             }
             else
             {
               alert("Phone is bad");
             }
             if(!validateName($("name").val()))
             {
               alert("Name is good");
             }
             else
             {
               alert("Name is bad");
             }
             if(!validateName($("first_name").val()))
             {
               alert("First name is good");
             }
             else
             {
               alert("First name is bad");
             }
           }
      );
});

function validateName(name) {
  var emailReg = new RegExp(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/);
  return emailReg.test(name);
}

function validateEmail(email) {
  var emailReg = new RegExp(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/);
  return emailReg.test(email);
}

function phone_validate(phno)
{
  var regexPattern=new RegExp(/^[0-9-+]+$/);
  return regexPattern.test(phno);
}
