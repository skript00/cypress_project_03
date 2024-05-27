/// <reference types="cypress" />

import BookingPage from "../../Pages/BookingPage";

const bookingPage = new BookingPage()

describe('Book Your Trip Form Tests', () => {

  beforeEach(() => {
    cy.clickCard("Project - Booking Function");
  });

  it.only('Test Case 01 - Validate the default Book your trip form', () => {
    bookingPage.getOneWayButton().should('be.visible').and('be.checked')
    
  });

  it('Test Case 02 - Validate the Book your trip form when Round trip is selected', () => {

  });

  it('Test Case 03 - Validate the booking for 1 passenger and one way', () => {

  });

  it('Test Case 04 - Validate the booking for 1 passenger and round trip', () => {

  });

  it('Test Case 05 - Validate the booking for 2 passengers and one way', () => {

  });

});