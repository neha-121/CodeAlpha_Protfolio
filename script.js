const themeToggle = document.getElementById('theme-toggle');
let darkMode = false;

themeToggle.addEventListener('click', () => {
    if (!darkMode) {
        document.body.classList.add('dark-mode');
        document.querySelector('header').classList.add('dark-mode');
        document.querySelector('footer').classList.add('dark-mode');
        document.querySelectorAll('article').forEach(article => article.classList.add('dark-mode'));
        themeToggle.textContent = 'Switch to Light Mode';
        darkMode = true;
    } else {
        document.body.classList.remove('dark-mode');
        document.querySelector('header').classList.remove('dark-mode');
        document.querySelector('footer').classList.remove('dark-mode');
        document.querySelectorAll('article').forEach(article => article.classList.remove('dark-mode'));
        themeToggle.textContent = 'Switch to Dark Mode';
        darkMode = false;
    }
});
