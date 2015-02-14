Feature: Create page (for authenticated users only)

  As a user
  I want to create new titles
  So that others can view it in the feed

  Scenario: 
    Given I am unauthenticated
    When I navigate to "create"
    Then I should see a heading "Restricted content"


  Scenario: 
    Given I am authenticated
    When I navigate to "create"
    Then I should see a heading "Create a title"

  Scenario: 
    Given I am authenticated
    And I navigate to "create"
    And I fill the form field "title" with "helloworld"
    When I submit the form
    Then I get redirected to route name "title"
