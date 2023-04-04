const form = document.querySelector("#form");

form.addEventListener("submit", onSubmit);

function onSubmit(e){
    e.preventDefault();
    console.log(e.currentTarget.elements);

    const{
        elements: {login, password},
    } = e.currentTarget;
    if(login.value === "" || password.value === ""){
        console.log("Заповніть обов'язкові поля");
        return
    }
    console.log('login :>> ', login.value);
    console.log('password :>>', password.value);

    const user = document.querySelector("#login").value;
    const user1 = document.querySelector("#password").value;
    document.querySelector("#user").innerHTML = user;
    document.querySelector("#user1").innerHTML = user1;
}

