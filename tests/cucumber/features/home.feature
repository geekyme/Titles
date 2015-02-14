Feature: Homepage should show "Learn more about Titles"

  As a visitor
  I want to access the home page
  So that I can learn more about the website

  The story above is to set context for the reader. It doesn't actually have any impact on the test
  itself. The phrases inside the scenarios are ties to test code using regex, which you can see in
  /tests/features/step_definitions/steps.js

  Scenario:
    Given I am a visitor
    When I navigate to ""
    Then I should see a heading of "Learn more about Titles"