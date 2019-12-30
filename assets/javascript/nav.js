const CURRENT_SECTIONS = [
  "#about-section",
  "#travel-section"
]

const revealSection = (section) => {
  const currentSection = $(section)

  if (currentSection.hasClass('hidden')) {
    unhideSections([section])
  } else {
    hideSections([section])
  }

  const sectionsToHide = CURRENT_SECTIONS.filter(aSection => {
    if (aSection !== section) {
      return aSection
    }
  })

  hideSections(sectionsToHide)
  
}

const hideSections = (sections) => {
  sections.forEach(section => {
    $(section).addClass('hidden')
  })
}

const unhideSections = (sections) => {
  sections.forEach(section => {
    $(section).removeClass('hidden')
  })
}