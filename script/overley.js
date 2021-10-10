const openButton = document.querySelector("#openOverley")
const closeButton = document.querySelector("#overleyNone")


openButton.addEventListener("click", e =>{
    
    document.getElementById("overleyActive").style.display = "flex"; //or "none"
});



closeButton.addEventListener("click", e =>{
    document.getElementById("overleyActive").style.display = "none"; //or "none"
})
