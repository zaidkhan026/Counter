let title = document.getElementById("title")
let starting = 0
let Inc = document.getElementById("Inc")
let Reset = document.getElementById("Reset")
let Dec = document.getElementById("Dec")

Inc.addEventListener("click", (e=>{
    starting++
    title.textContent = starting
}))

Reset.addEventListener("click", (e=>{
    starting = 0
    title.textContent = starting 
}))

Dec.addEventListener("click", (e=>{
    starting--
    title.textContent = starting
}))