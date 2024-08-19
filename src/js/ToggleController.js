function ToggleController() {
    const accordionBtns = document.querySelectorAll('.accordion');

    const togglePanel = (event) => {
        event.target.classList.toggle('active');

        const panel = event.target.nextSibling;
        if (panel.style.maxHeight) { // if visible
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + 'px';
        }
    }

    accordionBtns.forEach(btn => {
        btn.addEventListener('click', togglePanel);
    })
}

ToggleController();