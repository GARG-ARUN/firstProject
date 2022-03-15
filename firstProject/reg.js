function validation1()
{
var x = document.forms["login"]["Name"].value;
if(x == "")
{
alert("User name is incorrect");
return false;
}
var x = document.forms["login"]["password"].value;
var y = document.forms["login"]["confirmpass"].value;
if(x.length<4)
{
alert("enter password is incorrect");
return false;
}
if(x != y)
{
alert("enter pass");
return false;
}
var x = document.forms["login"]["last"].value;
if(x == "")
{
alert("User last name is incorrect");
return false;
}
var x = document.forms["login"]["age"].value;
if(x.length>3)
{
alert("Enter the correct age");
return false;
}
var x = document.forms["login"]["mobile"].value;
if(x.length !==10)
{
alert("Mobile is incorrect");
return false;
var  x = document.forms["login"]["email"].value;
var atposition=x.indexOf("@");  
var dotposition=x.lastIndexOf(".");  
if (atposition<1 || dotposition<atposition+2 || dotposition+2>=x.length){  
  alert("Please enter a valid e-mail address \n atpostion:"+atposition+"\n dotposition:"+dotposition);  
  return false;  
  }  
}
}