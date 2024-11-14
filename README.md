# Sitto Test Assignment

## Overview

This repository contains automated tests using Playwright to validate the Resource Library page on both Desktop and Mobile versions of Sitoo’s website.

### Test Cases

1. **Navigate to Resource Library**: Opens the menu, navigates to the Resource Library page, and verifies if filters are present.
   
2. **Filter Visibility Check**: Confirms that the Resource Library filters are displayed correctly on both Desktop and Mobile versions.

### Project Structure

- `tests/desktop/resourceLibrary.spec.js`: Contains tests for the Desktop view.
- `tests/mobile/resourceLibrary.spec.js`: Contains tests for the Mobile view.


## Technologies Used

Playwrite, Node.js, JavaScript and Github Actions

## Setup

1. Install dependencies

```bash
npm install
```

2. Install Playwright
```bash
npx playwright install
```

## How to run the tests:

Inside that directory, you can run several commands:
```bash
#To run the end-to-end tests.
npx playwright test

#Starts the tests in interactive UI mode.
npx playwright test --ui

#To runs the tests only on Desktop Chrome (We have the option - chromium, firefox, msedge, chrome).
npx playwright test --project=chromium

#To runs a specific tests in a file EX: login flow.
npx playwright test login

#To runs the tests in debug mode.
npx playwright test --debug

#To run only smoke tests:
npx playwright test --grep @smoke

#Print the report in the CLI
npx playwright test --reporter=list

```

## Project Structure

```bash
UBIQUITI_E2E_AUTOMATION 
├── .github │ 
    └── workflows │ 
        ├── regression_test_pipeline.yml │ # Run the regression test pipeline
        └── smoke_test_pipeline.yml # Run the smoke tests
├── images │ 
    ├── regression_test.png │ 
    └── smoke_test.png 
├── tests/
│   ├── desktop/
│   │   └── resourceLibrary.spec.js
│   ├── mobile/
│   │   └── resourceLibrary.spec.js
├── .gitignore 
├── package-lock.json 
├── package.json # Project dependencies
├── playwright.config.js # Configuration to run tests in diff browsers
└── README.md # Explains about the projecta and how to run the tests

```

