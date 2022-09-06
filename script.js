function accept(id) {
    var element = document.querySelector(id);
    element.remove();
}

function changePic(element){
    console.log(element.getAttribute("src"))
    if(element.getAttribute("src") == "succulents-2.jpg"){
        element.setAttribute("src", "succulents-1.jpg")
    }
    else{
        element.setAttribute("src", "succulents-2.jpg")
    }
}