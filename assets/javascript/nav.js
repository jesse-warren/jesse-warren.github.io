const TIME_TO_SLEEP = 800
let CURRENTLY_REVEALED = 0
const CURRENT_SECTIONS = [
  "#about-section",
  "#portfolio-section"
]
const revealSection = (section) => {
  const currentSection = $(section)
  if (currentSection.hasClass('hidden')) {unhideSections([section])} 
  else {hideSections([section])}
  hideSections(CURRENT_SECTIONS.filter(aSection => {
    if (aSection !== section) { return aSection }
  }))
}
const hideSections = (sections) => {
  sections.forEach(section => {$(section).addClass('hidden')})
}
const unhideSections = (sections) => {
  sections.forEach(section => {$(section).removeClass('hidden')})
}