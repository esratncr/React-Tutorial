const btn =document.querySelector(".items")
const h1Element =document.querySelector(".title")

function change (){
    h1Element.classList.toggle("d-none")
}
btn.addEventListener('click',change)



const dropDownn =document.querySelector(".dropdown")
const Menu=document.querySelector(".dropdown-menu")


dropDownn.addEventListener('click',()=>{
    Menu.classList.toggle("open")
})