"use strict";
const $ = selector => document.querySelector(selector);

document.addEventListener("DOMContentLoaded", () => {
    // Add event handler to "Calculate" button
    $("#calculate").addEventListener("click", processEntry);

    // Move focus to income entry field on page load
    $("#income").focus();
});

function processEntry() {
    const incomeInput = $("#income");
    const taxInput = $("#tax");

    // Get the revenue value and convert it to a number
    const income = parseFloat(incomeInput.value);

    // Check if the entry is a valid number and greater than zero
    if (!isNaN(income) && income > 0) {
        // Calculate tax and display it in the tax field
        const tax = calculateTax(income);
        taxInput.value = tax.toFixed(2); // Round to two decimal places
    } else {
        // Show an error message if the input is invalid
        alert('Please enter a valid income greater than zero.');
        incomeInput.value = ''; // Clear input field
        incomeInput.focus(); //Move focus back to the input field
        taxInput.value = ''; //Clear the tax field
    }
}

function calculateTax(income) {
    let tax = 0;
    if (income <= 9875) {
        tax = income * 0.10;
    } else if (income <= 40125) {
        tax = 9875 * 0.10 + (income - 9875) * 0.12;
    } else if (income <= 85525) {
        tax = 9875 * 0.10 + (40125 - 9875) * 0.12 + (income - 40125) * 0.22;
    } else if (income <= 163300) {
        tax = 9875 * 0.10 + (40125 - 9875) * 0.12 + (85525 - 40125) * 0.22 + (income - 85525) * 0.24;
    } else if (income <= 207350) {
        tax = 9875 * 0.10 + (40125 - 9875) * 0.12 + (85525 - 40125) * 0.22 + (163300 - 85525) * 0.24 + (income - 163300) * 0.32;
    } else if (income <= 518400) {
        tax = 9875 * 0.10 + (40125 - 9875) * 0.12 + (85525 - 40125) * 0.22 + (163300 - 85525) * 0.24 + (207350 - 163300) * 0.32 + (income - 207350) * 0.35;
    } else {
        tax = 9875 * 0.10 + (40125 - 9875) * 0.12 + (85525 - 40125) * 0.22 + (163300 - 85525) * 0.24 + (207350 - 163300) * 0.32 + (518400 - 207350) * 0.35 + (income - 518400) * 0.37;
    }
    return tax;
}
