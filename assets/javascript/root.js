const filters = ["projects", "contact", "credits", "values"]

const searchFilter = () => {
  filters.forEach(filter => {
    $(`.${filter}`).addClass('hidden')
  })
  const searchValue = $("#search-bar").val()
  const regexSearch = new RegExp(searchValue, "i");
  if (searchValue !== "") {
    const appliedFilters = filters.filter(filterName => {
      return regexSearch.test(filterName)
    })

    appliedFilters.forEach(filterToApply => {
      $(`.${filterToApply}`).removeClass('hidden')
    })
  }
  // No else statement needed
}

const applySearch = (search) => {
  const searchBar = $("#search-bar")
  if (searchBar.val() !== search) {
    searchBar.val(search)
    searchFilter()
  } else {
    searchBar.val("values")
    searchFilter()
  }
  
}

// const changeSearch = () => {
//   const searchBar = $("#search-bar")

//   let data = document.querySelectorAll(`data[name="${searchBar()}"]`)
//   if (data.length) {
//     result.textContent = Array.from(data).map(i => `${name.value} is a ${i.getAttribute("job")}`).join(", another ")
//   } else {
//     result.textContent = `No "${name.value}" found`
//   }
// }