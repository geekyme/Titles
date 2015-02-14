Feature: Create page (for authenticated users only)

  As a user
  I want to create new titles
  So that others can view it in the feed

  Scenario: 
    Given I am unauthenticated
    When I navigate to "/create"
    Then I should see a heading "Restricted content"



