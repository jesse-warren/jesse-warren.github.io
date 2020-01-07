const tags = ["projects", "contact", "credits", "values", "roles", "testimony"]

const searchFilter = () => {
  // Hide all tags
  tags.forEach(tag => {
    $(`.${tag}`).addClass('hidden')
  })
  const searchValue = $("#search-bar").val()
  // Then, convert user's input into a regex search
  const regexSearch = new RegExp(searchValue, "i");
  if (searchValue !== "") {
    // Filter tags that match regex search
    const appliedFilters = tags.filter(tag => {
      return regexSearch.test(tag)
    })

    // Show all filtered in tags
    appliedFilters.forEach(filterToApply => {
      $(`.${filterToApply}`).removeClass('hidden')
    })
  } // No else statement needed
}

const applySearch = (search) => {
  const searchBar = $("#search-bar")
  // Force apply a search value, for tag selection
  if (searchBar.val() !== search) {
    searchBar.val(search)
    searchFilter()
  } else {
    // If same tag is clicked again, reset to 'values' filter
    searchBar.val("values")
    searchFilter()
  }
  
}