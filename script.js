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

    // Function to handle category click
    function handleCategoryClick(event) {
        const selectedCategory = event.target.textContent;
        showCategory(selectedCategory);

        // Remove 'active' class from all links
        navLinks.forEach(link => link.classList.remove('active'));
        // Add 'active' class to the clicked link
        event.target.classList.add('active');
    }

    // Attach click event to each link
    navLinks.forEach(link => {
        link.addEventListener('click', handleCategoryClick);
    });

    // Show 'HTML' category by default
    showCategory('HTML');
    // Add 'active' class to the 'HTML' link
    navLinks[0].classList.add('active');
});
