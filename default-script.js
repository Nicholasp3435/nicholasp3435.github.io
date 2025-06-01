console.log('Loaded', document.currentScript.src);

document.querySelectorAll('nav a').forEach(anchor => {
    if (anchor.href === window.location.href) {
        anchor.removeAttribute('href');
        anchor.classList.add('current');
    }
})