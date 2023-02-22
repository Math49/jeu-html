let a = document.getElementById("a")
let img = document.getElementById("img")
let audio = document.getElementById("audio")
let submit = document.getElementById("submit")
let valider = false
let edit = document.getElementById("edit")
let texte = document.getElementById("edit").textContent

a.addEventListener('click', function(){
    a.style.backgroundColor = "rgb(173, 192, 208)"
    img.style.backgroundColor = "rgb(223, 240, 255)"
    audio.style.backgroundColor = "rgb(223, 240, 255)"

    document.getElementById("edit").outerHTML = "<a id='edit' href='https://developer.mozilla.org/fr/docs/Web/HTML/'>"+texte+"</a>";

    valider = true
})

img.addEventListener('click', function(){
    a.style.backgroundColor = "rgb(223, 240, 255)"
    img.style.backgroundColor = "rgb(173, 192, 208)"
    audio.style.backgroundColor = "rgb(223, 240, 255)"

    document.getElementById("edit").outerHTML = "<img id='edit' src='../images/logo-mds.png'></img>";

    valider = false
})

audio.addEventListener('click', function(){
    a.style.backgroundColor = "rgb(223, 240, 255)"
    img.style.backgroundColor = "rgb(223, 240, 255)"
    audio.style.backgroundColor = "rgb(173, 192, 208)"

    document.getElementById("edit").outerHTML = "<audio id='edit' controls></audio>";
    
    valider = false
})

submit.addEventListener('click', function(){
    if (valider == true){
        document.location.href="./Exo3.html"
    } else { 
        document.getElementById("send").innerHTML = "Mauvaise réponse"
    }
})