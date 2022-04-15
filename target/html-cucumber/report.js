$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/features/login1.feature");
formatter.feature({
  "name": "This feature is demonstrating a successful and failing login scenario",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Validate the successful login using multiple test data",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I enter a username \"\u003cUserName\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "I enter a password \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I click on the login button",
  "keyword": "And "
});
formatter.step({
  "name": "I should have landed on the home page",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "UserName",
        "Password"
      ]
    },
    {
      "cells": [
        "standard_user",
        "secret_sauce"
      ]
    }
  ]
});
formatter.background({
  "name": "Open the application",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I have opened the application in browser",
  "keyword": "Given "
});
formatter.match({
  "location": "productPriceSteps.i_have_opened_the_application_in_browser_and_logged_in()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate the successful login using multiple test data",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "I enter a username \"standard_user\"",
  "keyword": "When "
});
formatter.match({
  "location": "loginSteps1.i_enter_a_username(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter a password \"secret_sauce\"",
  "keyword": "And "
});
formatter.match({
  "location": "loginSteps1.i_enter_a_password(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on the login button",
  "keyword": "And "
});
formatter.match({
  "location": "loginSteps1.i_click_on_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should have landed on the home page",
  "keyword": "Then "
});
formatter.match({
  "location": "loginSteps1.i_should_have_landed_on_the_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Validate the negative login using multiple test data",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I enter a username \"\u003cUserName\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "I enter a password \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I click on the login button",
  "keyword": "And "
});
formatter.step({
  "name": "I should have received the error \"\u003cError\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "UserName",
        "Password",
        "Error"
      ]
    },
    {
      "cells": [
        "standard_user2",
        "xyz123",
        "Epic sadface: Username and password do not match any user in this service"
      ]
    }
  ]
});
formatter.background({
  "name": "Open the application",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I have opened the application in browser",
  "keyword": "Given "
});
formatter.match({
  "location": "productPriceSteps.i_have_opened_the_application_in_browser_and_logged_in()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate the negative login using multiple test data",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "I enter a username \"standard_user2\"",
  "keyword": "When "
});
formatter.match({
  "location": "loginSteps1.i_enter_a_username(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter a password \"xyz123\"",
  "keyword": "And "
});
formatter.match({
  "location": "loginSteps1.i_enter_a_password(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on the login button",
  "keyword": "And "
});
formatter.match({
  "location": "loginSteps1.i_click_on_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should have received the error \"Epic sadface: Username and password do not match any user in this service\"",
  "keyword": "Then "
});
formatter.match({
  "location": "loginSteps1.i_should_have_received_the_error(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/java/features/product.feature");
formatter.feature({
  "name": "This feature would be used to validate the prices of each product",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Sanity"
    }
  ]
});
formatter.background({
  "name": "Open the application and login successfully",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I have opened the application in browser",
  "keyword": "Given "
});
formatter.match({
  "location": "productPriceSteps.i_have_opened_the_application_in_browser_and_logged_in()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate the prices of the products",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "name": "I have logged in successfully",
  "keyword": "When "
});
formatter.match({
  "location": "productPriceSteps.i_have_logged_in_successfully()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I will validate the Product and Price",
  "rows": [
    {
      "cells": [
        "Sauce Labs Backpack",
        "$29.99"
      ]
    },
    {
      "cells": [
        "Sauce Labs Bike Light",
        "$9.99"
      ]
    },
    {
      "cells": [
        "Sauce Labs Bolt T-Shirt",
        "$15.99"
      ]
    },
    {
      "cells": [
        "Sauce Labs Fleece Jacket",
        "$49.99"
      ]
    },
    {
      "cells": [
        "Sauce Labs Onesie",
        "$7.99"
      ]
    },
    {
      "cells": [
        "Test.allTheThings() T-Shirt (Red)",
        "$15.99"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "productPriceSteps.i_will_validate_the_Product_and_Price(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});