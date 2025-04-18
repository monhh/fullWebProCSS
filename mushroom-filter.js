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

    filterCards();
}


function filterCards() {
    cards.forEach((card) => {
        //console.log(card);
        const season = card.querySelector('[data-season]').dataset.season;
        const edible = card.querySelector("[data-edible]").dataset.edible;
        //console.log(season, edible);

        const matchesSeason = currentFilters.season === season;
        const matchesEdible = currentFilters.edible === edible;
        //console.log(matchesSeason, matchesEdible);
        
        if (
            (matchesEdible || currentFilters.edible === "all") && 
            (matchesSeason || currentFilters.season === "all")
        ) {
            card.hidden = false;
        } else {
            card.hidden = true;
        }
    });
}
//filterCards();
