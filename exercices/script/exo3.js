let h1 = document.getElementById("h1")
let li1 = document.getElementById("li1")
let li2 = document.getElementById("li2")
let li3 = document.getElementById("li3")
let ul = document.getElementById("ul")
let _ul = document.getElementById("/ul")
let count = 0

h1.addEventListener('click', function(){
    h1.style.display = "none"
    count++

    edit = "edit" + count
    view = "view" + count

    let texte = document.getElementById(edit).innerHTML
    document.getElementById(edit).outerHTML = "<h1 id='"+edit+"'>"+texte+"</h1>"

    document.getElementById(view).innerText = "<h1>"+texte+"</h1>"
})

li1.addEventListener('click', function(){
    li1.style.display = "none"
    count++

    edit = "edit" + count
    view = "view" + count

    let texte = document.getElementById(edit).innerHTML
    document.getElementById(edit).outerHTML = "<li id='"+edit+"'>"+texte+"</li>"

    document.getElementById(view).innerText = "<li>"+texte+"</li>"
})

li2.addEventListener('click', function(){
    li2.style.display = "none"
    count++

    edit = "edit" + count
    view = "view" + count

    let texte = document.getElementById(edit).innerHTML
    document.getElementById(edit).outerHTML = "<li id='"+edit+"'>"+texte+"</li>"

    document.getElementById(view).innerText = "<li>"+texte+"</li>"
})

li3.addEventListener('click', function(){
    li3.style.display = "none"
    count++

    edit = "edit" + count
    view = "view" + count

    let texte = document.getElementById(edit).innerHTML
    document.getElementById(edit).outerHTML = "<li id='"+edit+"'>"+texte+"</li>"

    document.getElementById(view).innerText = "<li>"+texte+"</li>"
})

ul.addEventListener('click', function(){
    ul.style.display = "none"
    count++

    edit = "edit" + count
    view = "view" + count

    document.getElementById(edit).outerHTML = "<ul id='"+edit+"'>"

    document.getElementById(view).innerText = "<ul>"
})

_ul.addEventListener('click', function(){
    _ul.style.display = "none"
    count++

    edit = "edit" + count
    view = "view" + count

    document.getElementById(edit).outerHTML = "</ul>"

    document.getElementById(view).innerText = "</ul>"
})

submit.addEventListener('click', function(){
    if (valider == true){
        document.location.href="./Exo2.html"
    } else { 
        document.getElementById("send").innerHTML = "Mauvaise réponse"
    }
})