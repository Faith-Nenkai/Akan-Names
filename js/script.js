function checkName(){
   var dd, mm , yyyy;
    dd = document.getElementById("dd").value;
    mm = document.getElementById("mm").value;
    yyyy = document.getElementById("yyyy").value;

    var cc = parseInt(yyyy.slice(0,2));
    var yy = parseInt(yyyy.slice(2,4));
   

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

    var f =  ( (cc/4) -((2*cc)-1) + ((5*yy)/4) + (26*(mm+1)/10) + dd ) % 7;
    alert(f)
  
if(f<6.1120 && gender === "Female"){
  alert("Your akan name is Akosua")
 }else if(f<6.1130 && gender === "Female"){
  alert("Your akan name is Adwao")
 }else if(f<6.1140 && gender === "Female"){
   alert("Your akan name is Abenna")
 }else if(f<6.1150 && gender === "Female"){
   alert("Your akan name is Akua")
 }else if(f<6.1160 && gender === "Female"){
  alert("Your akan name is Yaa")
 }else if(f<6.1170 && gender === "Female"){
  alert("Your akan name is Afua")
 }else if(f<6.1180 && gender === "Female"){
  alert("Your akan name is Ama")
 }else if(f<6.1120 && gender === "Male"){
  alert("Your akan name is Kwasi")
 }else if(f<6.1130 && gender === "Male"){
  alert("Your akan name is Kwadwo")
 }else if(f<6.1140 && gender === "Male"){
   alert("Your akan name is Kwabena")
 }else if(f<6.1150 && gender === "Male"){
   alert("Your akan name is Kwaku")
 }else if(f<6.1160 && gender === "Male"){
  alert("Your akan name is Yaw")
 }else if(f<6.1170 && gender === "Male"){
  alert("Your akan name is Kofi")
 }else if(f<6.1180 && gender === "Male"){
  alert("Your akan name is Kwame")
 } 
};

