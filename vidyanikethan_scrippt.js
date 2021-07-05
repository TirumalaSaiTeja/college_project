AOS.init({
    delay:250
});

// navbarNav

const myCollapsible = document.getElementById('navbarNav');
// const myOffcanvas=document.getElementById('offcanvasTop')

const bsCollapse = new bootstrap.Collapse(myCollapsible, { toggle: false })
// const bsOffcanvas = new bootstrap.Offcanvas(myOffcanvas);

function scrolltopele() {
    screenTop();
}

function hideCollapse() {
    myCollapsible.classList.toggle('show');
}
