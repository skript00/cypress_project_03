/// <reference types="cypress" />

class BookingPage {

// Locators

getOneWayButton() {
  return cy.get('.radio').children().first()
}

getRoundTripButton() {
  return cy.get('.radio').children().last()
}

getLabels() {
  return cy.get('.label')
}

getSpecificLabel(index) {
  return this.getLabels().eq(index)
}

getDropdowns() {
  return cy.get('.select')
}

getSpecificDropdown(index) {
  return this.getDropdowns().eq(index)
}

getBookButton() {
  return cy.get('.Button_c_button__TmkRS')
}

getDateInputs() {
  return cy.get('.react-datepicker__input-container > input')
}

getSpecificDateInput(index) {
  return this.getDateInputs().eq(index)
}




// Methods

clickOneWayButton() {
  this.getOneWayButton.click()
}

clickRoundTripButton() {
  this.getRoundTripButton.click()
}

// selectDropdowns() {
//   this.getDropdowns().select()
// }

selectSpecificDropdown(index) {
  this.getSpecificDropdown().eq(index)
}











}

export default BookingPage;