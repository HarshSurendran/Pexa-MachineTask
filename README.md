# Machine Task Submission – Harsh Surendran

This repository contains solutions to the machine task questions.  
Each question has been implemented and placed in a separate file or folder, named accordingly for easy access and clarity.

## Folder Structure

PEXA MACHINE TASK/
|
├── question1 → Angular project for the paginated table
├── question2.js → JavaScript debounce function
├── question3.js → JavaScript function to find the missing number in a sequence
├── question4 → JavaScript for DOM manipulation (add/remove user)
├── question5 → HTML and JavaScript for basic form validation
└── README.md → Project explanation and instructions


## Question 1 – Angular Paginated Table

**Location:** `question1/`

This is a standalone Angular project that displays user data fetched from the REST API:  
`https://reqres.in/api/users/`

### Features Implemented

- Displays user data in a table format
- Dynamic pagination with page numbers
- Dropdown to select the number of rows per page (5, 10, 20)
- Fetches data from the API on each page change

### How to Run the Angular Project

**Prerequisites:**
- Node.js installed (https://nodejs.org/)
- Angular CLI installed globally (`npm install -g @angular/cli`)

**Steps:**

1. Open a terminal and navigate to the project directory:

2. Install project dependencies:

3. Start the development server:

4. Open your browser and visit:

The application should now be running locally.

## Question 2 – Debounce Function

**File:** `question2.js`

A JavaScript implementation of the `debounce` function that delays the execution of a given function until after a specified wait time has passed without further calls.

## Question 3 – Find the Missing Number

**File:** `question3.js`

This JavaScript function identifies the first missing number in an array of distinct integers ranging from 1 to (n+1).  
It handles unordered inputs and works for arrays with one missing value.

## Question 4 – Modify User List in HTML

**File:** `question4/`

This script includes DOM manipulation tasks:
- Adds a new user "David" to an existing HTML list
- Removes the first user from that list

## Question 5 – Form Validation

**File:** `question5/`

An HTML form with JavaScript validation to:
- Ensure both the username and password fields are filled
- Display an appropriate error message in case of validation failure
- Log "Form Submitted" to the console when validation passes

## Notes

- Each question is implemented separately for clarity.
- Comments are added within the code for better understanding where appropriate.
- All work is original and completed within the permitted timeframe.

Regards,  
Harsh Surendran