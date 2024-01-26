function showCategory(category) {
    const mainBox = document.getElementById('resourcesContainer');
    mainBox.innerHTML = ""; 

    resources.forEach(resource => {
        if (resource.category.toLowerCase() === category.toLowerCase()) {
            mainBox.innerHTML += `<article>
                <h3>${resource.category}</h3>
                <p>${resource.text}</p>`;

            mainBox.innerHTML += `<ul class="sourcesList">`;
            resource.sources.forEach(source => {
                mainBox.innerHTML += `<li><a href="${source.url}">${source.title}</a></li>`;
            });
            mainBox.innerHTML += `</ul>`;

            mainBox.innerHTML += `</article>`;
        }
    });
}

document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('#categoryNav a');

    function handleCategoryClick(event) {
        const selectedCategory = event.target.textContent;
        showCategory(selectedCategory);

        navLinks.forEach(link => link.classList.remove('active'));
        event.target.classList.add('active');
    }

    navLinks.forEach(link => {
        link.addEventListener('click', handleCategoryClick);
    });

    showCategory('HTML');
    navLinks[0].classList.add('active');
});
