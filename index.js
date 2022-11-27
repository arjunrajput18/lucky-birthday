const birthDate = document.querySelector("#birth-date");
const luckyNumber = document.querySelector("#lucky-number");
const btnCheck = document.querySelector("#btn-check");
const showMsg = document.querySelector("#show-msg");

function validate(){
    if(birthDate.value==""){
     displayMsg("please select birthdate")
        return false;
    }

    if(luckyNumber.value==0){
        displayMsg("please select luckyNumber")
        return false;
    }
        return true;
}


function eventHandler(){
    showMsg.style.display="none"
  if(!validate()){
    return
  }

  var birthdateStr=birthDate.value.replaceAll("-","")
   var count=0;
  for(i=0;i<birthdateStr.length;i++){
    count=count+parseInt(birthdateStr[i])
  }
 if((count % luckyNumber.value)===0){
  displayMsg("You are lucky😍🍿🎂");
 }
else{
   displayMsg("sorry , your are unlucky 🥶🥶")
}
}

function displayMsg(msg){
    showMsg.style.display="block"
    showMsg.style.color="#0369a1"
    showMsg.innerHTML =msg

}
btnCheck.addEventListener("click",eventHandler)