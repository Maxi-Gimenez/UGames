function openNav(){
    document.getElementById("mobile-menu").style.width = "100%";
}
function closeNav(){
    document.getElementById("mobile-menu").style.width = "0%";
}
const pass = document.getElementById("password-vernover"),
      icon = document.querySelector(".bx-pass");

icon.addEventListener("click", e =>{
    if(pass.type === "password"){
        pass.type = "text";
        icon.classList.remove(`fa-eye-slash`);
        icon.classList.add(`fa-eye`);
    }
    else{
        pass.type = "password"
        icon.classList.add(`fa-eye-slash`);
        icon.classList.remove(`fa-eye`);
    }
})
