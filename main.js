const navToggle = document.querySelector('[aria-controls="primary-nav"]');
const primaryNav = document.querySelector('#primary-nav');

navToggle.addEventListener("click", () => {
    /* console.log("clicked"); */
    const navOpened = navToggle.getAttribute("aria-expanded");

    if (navOpened === "false") {
        navToggle.setAttribute("aria-expanded", "true");
    } else {
        navToggle.setAttribute("aria-expanded", "false");
    }

    console.log(navOpened);
})

/* Fixing the resizing issue: disable animations when resizing */
/* const resizeObserver = new ResizeObserver(() => {
    document.body.classList.add("resizing");

    requestAnimationFrame(() => {
        document.body.classList.remove("resizing");
    });

});
resizeObserver.observe(document.body); */
