let heartIcons = document.querySelectorAll(".fa-heart"),
    addIcons = document.querySelectorAll(".fa-plus"),
    shareIcons = document.querySelectorAll(".fa-share-nodes")


const addColor = (nodeList,clase) => {
    nodeList.forEach((icon)=> {
        icon.addEventListener("click",e=> {
             e.target.classList.toggle(clase)
        })
    })
}
const execute = () => {
    addColor(heartIcons,"like");
    addColor(addIcons,"add")
    addColor(shareIcons,"share")
}

window.addEventListener("DOMContentLoaded", execute)
