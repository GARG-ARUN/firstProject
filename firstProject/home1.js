function validation2()
{
var x = document.forms["login"]["Name"].value;
if(x == "" || x>5)
{
alert("User name is incorrect");
return false;
}
var x = document.forms["login"]["password"].value;
if(x == "")
{
alert("enter password is incorrect");
return false;
}
}