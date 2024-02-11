
  //for the select gallery or blog
function openEducation() {
    document.getElementById("education__section").style.display = "flex";
    document.getElementById("info__section").style.display = "none";
    
    var imagesContainers = document.getElementsByClassName('selection__container__education');
    for (var i = 0; i < imagesContainers.length; i++) {
        imagesContainers[i].style.backgroundColor = "#007BA2";
    }
    
    var blogsContainers = document.getElementsByClassName('selection__container__info');
    for (var i = 0; i < blogsContainers.length; i++) {
        blogsContainers[i].style.backgroundColor = "#007ca200";
    }
}

function openInfo() {
    document.getElementById("education__section").style.display = "none";
    document.getElementById("info__section").style.display = "flex";
    
    var imagesContainers = document.getElementsByClassName('selection__container__education');
    for (var i = 0; i < imagesContainers.length; i++) {
        imagesContainers[i].style.backgroundColor = "#007ca200";
    }
    
    var blogsContainers = document.getElementsByClassName('selection__container__info');
    for (var i = 0; i < blogsContainers.length; i++) {
        blogsContainers[i].style.backgroundColor = "#007BA2";
    }
}
