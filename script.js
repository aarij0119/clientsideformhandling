const btn = document.querySelector("#btn");
const username = document.querySelector("#username");
const fullname = document.querySelector("#fullname");
const email = document.querySelector("#email");
const number = document.querySelector("#number");
const error1 = document.querySelector("#error1");
const error2 = document.querySelector("#error2");
const error3 = document.querySelector("#error3");
const error4 = document.querySelector("#error4");
console.log(error1)
btn.addEventListener("click", function () {
    if (username.value == "") {
        error1.style.display = 'block'
        error1.innerHTML = "Username can't be empty"
     
    } else if(username.value.length < 4){
        error1.style.display = 'block'
        error1.innerHTML = "Username can't less than 4"
         
    }else if(!/^[a-zA-Z]+$/.test(username.value)){
        error1.style.display = 'block'
        error1.innerHTML = "Username can't number"

    }else if(fullname.value == ""){
          error2.style.display = "block"
        error2.innerHTML = "Full Name can't be empty"
      
    }else if(fullname.value.length < 4){
        error2.style.display = 'block'
        error2.innerHTML = "Username can't less than 4"
    }
    else if(!/^[a-zA-Z]+$/.test(fullname.value)){
        error2.style.display = 'block'
        error2.innerHTML = "Username can't number"
    }else if(email.value == ""){
        error3.style.display = "block"
        error3.innerHTML = "email can't be empty"
    }else if(!email.value.includes('@') || !email.value.includes('.')){
        error3.style.display = 'block';
        error3.innerHTML = "Please enter a valid"
       
    }else if(number.value == ""){
        error4.style.display = 'block';
        error4.innerHTML = "number can't be empty"
    }else if(number.value.length < 10 || number.value.length > 10){
        error4.style.display = "block"
        error4.innerHTML = "number maximum have 10 digit"
    }else if(isNaN(Number(number))){
        error4.style.display = "block"
        error4.innerHTML = "Number should have number"
    }
    else{
        error1.innerHTML = ""
        error1.style.display = "none"
        error2.innerHTML = ""
        error2.style.display = "none"
        error3.innerHTML = ""
        error3.style.display = "none"
        error4.innerHTML = ""
        error4.style.display = "none"
        
        username.value = ""
        fullname.value = ""
        email.value = ""
        number.value = ""
    }
    // console.log(email.value.toLowerCase())
   
})
console.log(error2)