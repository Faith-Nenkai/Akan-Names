function checkName(){
   var dd, mm , yyyy;
    dd = document.getElementById("dd").value;
    mm = document.getElementById("mm").value;
    yyyy = document.getElementById("yyyy").value;

    var cc = parseInt(yyyy.slice(0,2));
    var yy = parseInt(yyyy.slice(2,4));
   
    var daysOfTheWeek=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]

    var maleNames=["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"]

    var femaleNames=["Akosua","Adwoa","Abenna","Akua","Yaa","Afua","Ama"]

    

    if(document.getElementById("inlineRadioMale").checked){
        gender = "Male";
    }else if(document.getElementById("inlineRadioFemale").checked){
        gender = "Female";
    }else(alert("Please choose gender"));
    
    if(dd<1 && dd>31){
       alert("Please enter a valid date");
    }

    if(mm<1 && mm>12){
      alert("Please enter a valid month");
    }


var f =( ( (cc/4) -2*cc-1) + ((5*yy/4) ) + ((26*(mm+1)/10)) + dd ) % 7
    alert(f)
if(f<1 && gender === "Female"){
  alert("Your akan name is Akosua" );
  alert("Sunday")
 }else if(f<2 && gender === "Female"){
  alert("Your akan name is Adwao");
  alert("Monday")
 }else if(f<3 && gender === "Female"){
   alert("Your akan name is Abenna");
   alert("Tuesday")
 }else if(f<4 && gender === "Female"){
   alert("Your akan name is Akua");
   alert("Wednesday")
 }else if(f<5 && gender === "Female"){
  alert("Your akan name is Yaa");
  alert("Thursday")
 }else if(f<6 && gender === "Female"){
  alert("Your akan name is Afua");
  alert("Friday")
 }else if(f<7 && gender === "Female"){
  alert("Your akan name is Ama");
  alert("Saturday")
 }else if(f<1 && gender === "Male"){
  alert("Your akan name is Kwasi");
  alert("Sunday")
 }else if(f<2 && gender === "Male"){
  alert("Your akan name is Kwadwo");
  alert("Monday")
 }else if(f<3 && gender === "Male"){
   alert("Your akan name is Kwabena");
   alert("Tuesday")
 }else if(f<4 && gender === "Male"){
   alert("Your akan name is Kwaku");
   alert("Wednesday")
 }else if(f<5 && gender === "Male"){
  alert("Your akan name is Yaw");
  alert("Thursday")
 }else if(f<6 && gender === "Male"){
  alert("Your akan name is Kofi");
  alert("Friday")
 }else if(f<7 && gender === "Male"){
  alert("Your akan name is Kwame");
  alert("Saturday")
 } 

};

