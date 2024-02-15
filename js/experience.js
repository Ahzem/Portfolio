
const circles = document.querySelectorAll('.circle');
const contents = document.querySelectorAll('.experience__content');

circles.forEach((circle, index) => {
    circle.addEventListener('click', () => {
        circles.forEach((circle) => {
            circle.classList.remove('active');
        });
        circle.classList.add('active');
        contents.forEach((content) => {
            content.style.display = 'none';
        });
        contents[index].style.display = 'block';
        lines.forEach((line) => {
            line.style.display = 'none';
        });
        lines[index].style.display = 'block';
    });
});
