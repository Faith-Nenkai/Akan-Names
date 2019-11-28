function checkName(){
  var dd = document.getElementsByName("dd");
  var mm = document.getElementsByName("mm");
  var yyyy = document.getElementsByName("yyyy").toString();

  var cc = parseInt(yyyy.slice(0,2));
  var yy = parseInt(yyyy.slice(2,4));

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



  }
