@Regression
Feature: This feature is demonstrating a successful and failing login scenario

  Background: Open the application
    Given I have opened the application in browser

  Scenario Outline: Validate the successful login using multiple test data
    When I enter a username "<UserName>"
    And I enter a password "<Password>"
    And I click on the login button
    Then I should have landed on the home page

    Examples: 
      | UserName      | Password     |
      | standard_user | secret_sauce |

  Scenario Outline: Validate the negative login using multiple test data
    When I enter a username "<UserName>"
    And I enter a password "<Password>"
    And I click on the login button
    Then I should have received the error "<Error>"

    Examples: 
      | UserName       | Password | Error                                                                     |
      | standard_user2 | xyz123   | Epic sadface: Username and password do not match any user in this service |
