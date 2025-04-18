const cards = document.querySelectorAll('.mushroom-guide .card');
const seasonalFilter = document.querySelector('#season');
const edibleFilter = document.querySelector('#edible');

const currentFilters = {
    season: "all",
    edible: "all"
};

/* seasonedFiltert.addEventListener('change', (event) => {
    currentFilters.seasoned = event.target.value;
    console.log(currentFilters);
});

seasonedFiltert.addEventListener("change", (event) => {
    edibleFilterFilters.edible = event.target.value;
    console.log(currentFilters);
}); */


seasonalFilter.addEventListener('change', updateFilter);
edibleFilter.addEventListener('change', updateFilter);

function updateFilter(e) {
   // console.log(e.target.value);
    //console.log(e.target.name);
    const filterType = e.target.name;
    currentFilters[filterType] = e.target.value;
    //console.log(currentFilters);
}

