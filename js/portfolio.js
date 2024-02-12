//for the portfolio page

let currentPortfolioPage = 1;

function showNextPortfolioPage() {
    const pages = document.querySelectorAll('.portfolio__page');
    if (currentPortfolioPage < pages.length) {
        pages[currentPortfolioPage - 1].style.display = 'none'; // Hide current page
        currentPortfolioPage++; // Increment current page
        pages[currentPortfolioPage - 1].style.display = 'flex'; // Show next page
    }
}

function showPrevPortfolioPage() {
    const pages = document.querySelectorAll('.portfolio__page');
    if (currentPortfolioPage > 1) {
        pages[currentPortfolioPage - 1].style.display = 'none'; // Hide current page
        currentPortfolioPage--; // Decrement current page
        pages[currentPortfolioPage - 1].style.display = 'flex'; // Show previous page
    }
}

