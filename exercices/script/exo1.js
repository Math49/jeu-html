let em = document.getElementById("em")
let strong = document.getElementById("strong")
let h1 = document.getElementById("h1")
let h3 = document.getElementById("h3")
let submit = document.getElementById("submit")
let valider = false
let edit = document.getElementById("edit")
let texte = document.getElementById("edit").textContent


em.addEventListener('click', function(){
    em.style.backgroundColor = "rgb(173, 192, 208)"
    strong.style.backgroundColor = "rgb(223, 240, 255)"
    h1.style.backgroundColor = "rgb(223, 240, 255)"
    h3.style.backgroundColor = "rgb(223, 240, 255)"

    document.getElementById("edit").outerHTML = "<p id='edit'> <em>"+texte+"</em></p>";

    valider = false
})

strong.addEventListener('click', function(){
    em.style.backgroundColor = "rgb(223, 240, 255)"
    strong.style.backgroundColor = "rgb(173, 192, 208)"
    h1.style.backgroundColor = "rgb(223, 240, 255)"
    h3.style.backgroundColor = "rgb(223, 240, 255)"

    document.getElementById("edit").outerHTML = "<p id='edit'> <strong>"+texte+"</strong></p>";

    valider = true
})

h1.addEventListener('click', function(){
    em.style.backgroundColor = "rgb(223, 240, 255)"
    strong.style.backgroundColor = "rgb(223, 240, 255)"
    h1.style.backgroundColor = "rgb(173, 192, 208)"
    h3.style.backgroundColor = "rgb(223, 240, 255)"

    document.getElementById("edit").outerHTML = "<h1 id='edit'>"+texte+"</h1>";
    
    valider = false
})

h3.addEventListener('click', function(){
    em.style.backgroundColor = "rgb(223, 240, 255)"
    strong.style.backgroundColor = "rgb(223, 240, 255)"
    h1.style.backgroundColor = "rgb(223, 240, 255)"
    h3.style.backgroundColor = "rgb(173, 192, 208)"

    let texte = document.getElementById("edit").textContent
    document.getElementById("edit").outerHTML = "<h3 id='edit'>"+texte+"</h3>";

    valider = false
})

submit.addEventListener('click', function(){
    if (valider == true){
        document.location.href="./Exo2.html"
    } else { 
        document.getElementById("send").innerHTML = "Mauvaise réponse"
    }
})