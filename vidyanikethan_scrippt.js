AOS.init({
    delay:250
});

// navbarNav

const myCollapsible = document.getElementById('navbarNav');


const bsCollapse = new bootstrap.Collapse(myCollapsible, { toggle: false })




function hideCollapse() {
    bsCollapse.hide();
}
