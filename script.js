function AgeCheck(event) {
    event.preventDefault();
    let age = document.querySelector("#Age").value;
    age = Number(age);

    

    let message = ""; // Initialize an empty message variable

    if (age <= 10) {  
        message = "You are a child";
    } else if (age <= 20) {  
        message = "You are a teenager";
    } else if (age <= 45) {  
        message = "You are young";
    } else if (age >=46) {
        message = "You are aged";
    }
    
    document.querySelector("#resultWindow").innerHTML = message;
}

document.querySelector("#checkButton").addEventListener("click", AgeCheck);