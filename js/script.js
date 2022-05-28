// BURGER MENU
const burgerBtn = document.querySelector("#burger-btn")
const burgerNav = document.querySelector("#burger-nav")

burgerBtn.addEventListener("click", () =>{
    if (burgerNav.classList.contains("opened")){
        burgerNav.classList.remove("opened")
    }else {
        burgerNav.classList.add("opened")
    }

})


// TYPING
const typingText = document.querySelector("#typing-text")

const text = "BEka i love youuuuuu"
let index = 0
const typeText = () =>{
    typingText.innerHTML = text.slice(0, index)
    index++
    if (index > text.length){
        index = 0
    }
}

setInterval(typeText,200)

// MODAL WINDOW
const openModalBtn = document.querySelector("#modal-btn")
const closeModalBtn = document.querySelector("#close-modal-btn")
const modal = document.querySelector(".modal-overview")

openModalBtn.addEventListener("click", ()=>{
    modal.style.display = "flex"
})
closeModalBtn.addEventListener("click", ()=>{
    modal.style.display = "none"
})

// TOASTER
const toasterBtn = document.querySelector("#toaster-btn")
const toasterContent = document.querySelector(".toaster-content")

toasterBtn.addEventListener("click", ()=>{
    const toasterMsg = document.createElement("div")
    toasterMsg.classList.add("toaster-msg")
    toasterMsg.innerHTML = "Звапрос успешно отправлен"
    toasterContent.append(toasterMsg)
    setTimeout(()=>{
        toasterMsg.remove()
    },2000)
})



