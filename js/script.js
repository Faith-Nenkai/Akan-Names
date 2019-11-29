function checkName(){
  var dd = document.getElementsByName("dd");
  var mm = document.getElementsByName("mm");
  var yyyy = document.getElementsByName("yyyy").toString();

  var cc = parseInt(yyyy.slice(0,2));
  var yy = parseInt(yyyy.slice(2,4));

  var akan;

  if(document.getElementsById("inlineRadioMale").checked){
    var gender = "Male";
  }else if(document.getElementsById("inlineRadioFemale").checked){
    var gender = "Female";
  }else{
    alert("Please choose gender")
  }

  if(dd>=1 && dd<=31){
    continue;
  }else{
    alert("Please enter a valid date");
    break;
  }

  if(mm>=1 && mm<=12){
    continue;
  }else{
    alert("Please enter a valid month");
    break;
  }


  var f = ( ( (cc/4) -2*cc-1) + ((5*yy/4) ) + ((26*(mm+1)/10)) + dd ) % 7;

  if(f<1.5 && gender=="Male"){
    akan="Kwasi"
  }else if(f>=1.5 && f<2.5 && gender=="Male"){
    akan="Kwadwo"
  }else if(f>=2.5 && f<3.5 && gender=="Male"){
    akan="Kwabena"
  }else if(f>=3.5 && f<4.5 && gender=="Male"){
    akan="Kwaku"
  }else if(f>=4.5 && f<5.5 && gender=="Male"){
    akan="Yaw"
  }else if(f>=5.5 && f<6.5 && gender=="Male"){
    akan="Kofi"
  }else if(f>=6.5 && f<7.5 && gender=="Male"){
    akan="Kwame"
  }else if(f,1.5 && gender=="Female"){
    akan="Akosua"
  }else if(f>=1.5 && f<2.5 && gender=="Female"){
    akan="Adwoa"
  }else if(f>=2.5 && f<3.5 && gender=="Female"){
    akan="Abenna"
  }else if(f>=3.5 && f<4.5 && gender=="Female"){
    akan="Akua"
  }else if(f>=4.5 && f<5.5 && gender=="Female"){
    akan="Yaa"
  }else if(f>=5.5 && f<6.5 && gender=="Female"){
    akan="Afua"
  }else if(f>=6.5 && f<7.5 && gender=="Female"){
    akan="Ama"
  }
  return(alert(akan));
}
