/// <reference types="cypress" />

import BookingPage from "../../Pages/BookingPage";

const bookingPage = new BookingPage()

describe('Book Your Trip Form Tests', () => {

  beforeEach(() => {
    cy.clickCard("Project - Booking Function");
  });

  const validateVisibility = () => {
    bookingPage.getLabels().each(($el) => {
      cy.wrap($el).should('be.visible');
    });
    
    bookingPage.getDatePickers().each(($el) => {
      cy.wrap($el).should('be.visible');
    });

    bookingPage.getDropdowns().each(($el) => {
      cy.wrap($el).should('be.visible');
    });

    bookingPage.getBookButton().should('be.visible').and('be.enabled')

  }

  it('Test Case 01 - Validate the default Book your trip form', () => {
    bookingPage.getOneWayButton().should('be.visible').and('be.enabled').and('be.checked');;
    bookingPage.getRoundTripButton().should('be.visible').and('be.enabled').and('not.be.checked');
    validateVisibility();
    bookingPage.getSpecificDatePicker(1).should('be.disabled')
    bookingPage.getSpecificDropdown(3).should('have.value', '1')
    bookingPage.getSpecificDropdown(4).should('have.value', 'Adult (16-64)')    
    
  });

  it.only('Test Case 02 - Validate the Book your trip form when Round trip is selected', () => {
    bookingPage.clickRoundTripButton()
    bookingPage.getRoundTripButton().should('be.checked')
    bookingPage.getOneWayButton().should('not.be.checked')
  });

  it('Test Case 03 - Validate the booking for 1 passenger and one way', () => {

  });

  it('Test Case 04 - Validate the booking for 1 passenger and round trip', () => {

  });

  it('Test Case 05 - Validate the booking for 2 passengers and one way', () => {

  });

});