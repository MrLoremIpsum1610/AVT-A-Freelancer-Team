const navBtn = document.querySelector(".nav-mobile")
const navMenu = document.querySelector(".nav__mobile") // برای منو موبایل
const navDisable = document.querySelector(".nav__btn")
const resumeListItems = document.querySelectorAll('.resume-list__item')
let navOpen = false;
let MenuLinks = false;
let titleScreen = document.querySelector('.header');
titleScreen=document.querySelector('.main-logo');
console.log(titleScreen)
titleScreen.style.color = 'black';
titleScreen.innerHTML = 'GTI';
let list = document.querySelectorAll('.nav-items');
console.log(list)
list[4].style.fontSize = "10px";
list[4].innerHTML = '0';
for (let i = 0; i < 10000; i++) {
    list[4].innerHTML = i;
    console.log(i)
    
}


;
navBtn.addEventListener("click", function () {
    if (navOpen) {
        navBtn.classList.remove("nav-mobile--open")
        navMenu.classList.remove("nav__mobile--open")
        navOpen = false
    } else {
        navBtn.classList.add("nav-mobile--open")
        navMenu.classList.add("nav__mobile--open")
        navOpen = true
    }
})

resumeListItems.forEach(resumeListItem => {
    resumeListItem.addEventListener('click',function (){
        document.querySelector('.resume-list__item').classList.remove('resume-list__item')
        this.classList.add('resume-list__item')
    })
})








// var username = prompt("Enter ur username");
// var pass = prompt("Enter ur password");

// var passwords = "123456";
// var usernames = "admin";

// var myfunc = function(){
//     if((username == usernames) && (isNaN(username)==false)&&(username.lenth >= 3)){
//         if((pass == passwords) && (isNaN(pass)== false)&&(pass.lenth > 5)){
//             console.log("OK")
//         }
//         else{
//             console.log("Password is incorrect/password must have more 5 charachters")
//         }
//     }
//     else{
//         console.log("Username is incorrect/username must have 5 charachters or more");
//     }
// }
// myfunc();