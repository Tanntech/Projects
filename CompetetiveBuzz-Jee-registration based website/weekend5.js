function take()
{

var in1=document.getElementById("appno");
var in2=document.getElementById("password");
var in3=document.getElementById("pin");
var in4=document.getElementById("sec");
  
        if (in1.value.trim() =="" || in2.value.trim() =="" || in3.value.trim() =="") 
        {
        alert("*Fill the blank spaces");
        return false;
        }

        else if(in1.value.trim()==""){ 
            alert("*fill the application number");
            return false;
        }

        else if(in1.value.trim().length<10)
        {
         alert("Application number should be of 10 digits.Check again");
        return false;
        }

        else if(in2.value.trim()==""){
            alert("*Enter the password");
            return false;

        }

        else if(in2.value.trim().length<8){
            alert("Enter 8 digit password");
            return false;

        }

        else if(in3.value.trim()==""){
            alert("*Enter the pin");
            return false;

        }

        else if(in3.value != in4.value){
            alert("Pin did not match. Enter correct security pin");
            return false;}



        else{
            true;
        }
    }

    function theme(){
        var element=document.body;
        element.classList.toggle("darkmode");
    }

