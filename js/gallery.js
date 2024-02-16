function openModal(image) {
	var modal = document.getElementById("modal");
	var modalImage = document.getElementById("modal-image");
	var caption = document.getElementById("caption");
	modal.style.display = "block";
	modalImage.src = image.src;
	caption.innerHTML = image.dataset.caption;
  }
  
  // Close the modal
  function closeModal() {
	var modal = document.getElementById("modal");
	modal.style.display = "none";
  }



  //for the select gallery or blog or portfolio
function openGallery() {
    document.getElementById("gallery_section").style.display = "block";
    document.getElementById("blogs_section").style.display = "none";
    document.getElementById("portfolio_section").style.display = "none";
    
    var imagesContainers = document.getElementsByClassName('selection__container__images');
    for (var i = 0; i < imagesContainers.length; i++) {
        imagesContainers[i].style.backgroundColor = "#007BA2";
    }
    
    var blogsContainers = document.getElementsByClassName('selection__container__blogs');
    for (var i = 0; i < blogsContainers.length; i++) {
        blogsContainers[i].style.backgroundColor = "#007ca200";
    }

    var portfolioContainers = document.getElementsByClassName('selection__container__portfolio');
    for (var i = 0; i < portfolioContainers.length; i++) {
        portfolioContainers[i].style.backgroundColor = "#007ca200";
    }
}

function openBlogs() {
    document.getElementById("gallery_section").style.display = "none";
    document.getElementById("blogs_section").style.display = "block";
    document.getElementById("portfolio_section").style.display = "none";
    
    var imagesContainers = document.getElementsByClassName('selection__container__images');
    for (var i = 0; i < imagesContainers.length; i++) {
        imagesContainers[i].style.backgroundColor = "#007ca200";
    }
    
    var blogsContainers = document.getElementsByClassName('selection__container__blogs');
    for (var i = 0; i < blogsContainers.length; i++) {
        blogsContainers[i].style.backgroundColor = "#007BA2";
    }

    var portfolioContainers = document.getElementsByClassName('selection__container__portfolio');
    for (var i = 0; i < portfolioContainers.length; i++) {
        portfolioContainers[i].style.backgroundColor = "#007ca200";
    }
}

function openPortfolio() {
    document.getElementById("gallery_section").style.display = "none";
    document.getElementById("blogs_section").style.display = "none";
    document.getElementById("portfolio_section").style.display = "block";
    
    var imagesContainers = document.getElementsByClassName('selection__container__images');
    for (var i = 0; i < imagesContainers.length; i++) {
        imagesContainers[i].style.backgroundColor = "#007ca200";
    }
    
    var blogsContainers = document.getElementsByClassName('selection__container__blogs');
    for (var i = 0; i < blogsContainers.length; i++) {
        blogsContainers[i].style.backgroundColor = "#007ca200";
    }

    var portfolioContainers = document.getElementsByClassName('selection__container__portfolio');
    for (var i = 0; i < portfolioContainers.length; i++) {
        portfolioContainers[i].style.backgroundColor = "#007BA2";
    }
}




//for the gallery
  let currentPage = 1;

function showNextPage() {
    const pages = document.querySelectorAll('.gallery__page');
    if (currentPage < pages.length) {
        pages[currentPage - 1].style.display = 'none'; // Hide current page
        currentPage++; // Increment current page
        pages[currentPage - 1].style.display = 'flex'; // Show next page
    }
}

function showPrevPage() {
    const pages = document.querySelectorAll('.gallery__page');
    if (currentPage > 1) {
        pages[currentPage - 1].style.display = 'none'; // Hide current page
        currentPage--; // Decrement current page
        pages[currentPage - 1].style.display = 'flex'; // Show previous page
    }
}

//for the blogs

let currentBlogPage = 1;

function showNextBlogPage() {
    const pages = document.querySelectorAll('.blogs__page');
    if (currentBlogPage < pages.length) {
        pages[currentBlogPage - 1].style.display = 'none'; // Hide current page
        currentBlogPage++; // Increment current page
        pages[currentBlogPage - 1].style.display = 'flex'; // Show next page
    }
}

function showPrevBlogPage() {
    const pages = document.querySelectorAll('.blogs__page');
    if (currentBlogPage > 1) {
        pages[currentBlogPage - 1].style.display = 'none'; // Hide current page
        currentBlogPage--; // Decrement current page
        pages[currentBlogPage - 1].style.display = 'flex'; // Show previous page
    }
}



function showAllPortfolio() {
    var x = document.getElementsByClassName("mix");
    var i;
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "block";
    }
}
function showConsolePortfolio() {
    var x = document.getElementsByClassName("mix");
    var i;
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    var y = document.getElementsByClassName("console");
    for (i = 0; i < y.length; i++) {
        y[i].style.display = "block";
    }
}
function showDesignPortfolio() {
    var x = document.getElementsByClassName("mix");
    var i;
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    var y = document.getElementsByClassName("LogoDesigns");
    for (i = 0; i < y.length; i++) {
        y[i].style.display = "block";
    }
}
function showWebPortfolio() {
    var x = document.getElementsByClassName("mix");
    var i;
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    var y = document.getElementsByClassName("web");
    for (i = 0; i < y.length; i++) {
        y[i].style.display = "block";
    }
}
function showFlyerPortfolio() {
    var x = document.getElementsByClassName("mix");
    var i;
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    var y = document.getElementsByClassName("flyers");
    for (i = 0; i < y.length; i++) {
        y[i].style.display = "block";
    }
}