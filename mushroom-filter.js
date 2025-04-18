const cards = document.querySelectorAll('.mushroom-guide .card');
const seasonedFiltert = document.querySelector('#season');
const edibleFilter = document.querySelector('#edible');

const currentFilters = {
    seasoned: "all",
    edible: "all"
};

seasonedFiltert.addEventListener('change', (event) => {
    /* console.log(event); */
    /* console.log(event.target.value); */
    currentFilters.seasoned = event.target.value;
    console.log(currentFilters);
});


seasonedFiltert.addEventListener("change", (event) => {
    /* console.log(event); */
    /* console.log(event.target.value); */
    currentFilters.edible = event.target.value;
    console.log(currentFilters);
});