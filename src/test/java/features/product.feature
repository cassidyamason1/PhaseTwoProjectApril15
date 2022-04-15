@Sanity
Feature: This feature would be used to validate the prices of each product

  Background: Open the application and login successfully
    Given I have opened the application in browser

  Scenario: Validate the prices of the products
    When I have logged in successfully
    Then I will validate the Product and Price
      | Sauce Labs Backpack               | $29.99 |
      | Sauce Labs Bike Light             | $9.99  |
      | Sauce Labs Bolt T-Shirt           | $15.99 |
      | Sauce Labs Fleece Jacket          | $49.99 |
      | Sauce Labs Onesie                 | $7.99  |
      | Test.allTheThings() T-Shirt (Red) | $15.99 |
