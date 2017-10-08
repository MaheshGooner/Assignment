$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Login.feature");
formatter.feature({
  "line": 1,
  "name": "Login Amazon",
  "description": "",
  "id": "login-amazon",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 5,
  "name": ": Assert first five results",
  "description": "",
  "id": "login-amazon;:-assert-first-five-results",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@assertFiveResults"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I am on the home page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I enter \"\u003ctext\u003e\" in the search bar",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "Click on Search",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I should be displayed with results",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I should assert first five results with \"\u003cvalues\u003e\"",
  "keyword": "And "
});
formatter.examples({
  "line": 13,
  "name": "",
  "description": "",
  "id": "login-amazon;:-assert-first-five-results;",
  "rows": [
    {
      "cells": [
        "text",
        "values"
      ],
      "line": 15,
      "id": "login-amazon;:-assert-first-five-results;;1"
    },
    {
      "cells": [
        "Iphone",
        "270.00:339.00:539.00:7.9:5.29"
      ],
      "line": 16,
      "id": "login-amazon;:-assert-first-five-results;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3354106679,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": ": Assert first five results",
  "description": "",
  "id": "login-amazon;:-assert-first-five-results;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@assertFiveResults"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I am on the home page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I enter \"Iphone\" in the search bar",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "Click on Search",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I should be displayed with results",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I should assert first five results with \"270.00:339.00:539.00:7.9:5.29\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.match({
  "location": "HomePageStepDefinition.i_am_on_the_home_page()"
});
formatter.result({
  "duration": 2879779508,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Iphone",
      "offset": 9
    }
  ],
  "location": "SearchResultsPageStepDefinitions.i_enter_in_the_search_bar(String)"
});
formatter.result({
  "duration": 1788950258,
  "status": "passed"
});
formatter.match({
  "location": "SearchResultsPageStepDefinitions.click_on_Search()"
});
formatter.result({
  "duration": 2598293261,
  "status": "passed"
});
formatter.match({
  "location": "SearchResultsPageStepDefinitions.i_should_be_displayed_with_results()"
});
formatter.result({
  "duration": 187859882,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "270.00:339.00:539.00:7.9:5.29",
      "offset": 41
    }
  ],
  "location": "SearchResultsPageStepDefinitions.i_should_assert_first_five_results_with(String)"
});
formatter.result({
  "duration": 2232238803,
  "error_message": "junit.framework.AssertionFailedError: Assertion Failed for search result 1\r\n\tat junit.framework.Assert.fail(Assert.java:57)\r\n\tat junit.framework.Assert.assertTrue(Assert.java:22)\r\n\tat pageobjects.amazonSearchPage.assertFirstFiveResults(amazonSearchPage.java:80)\r\n\tat stepdefinitions.SearchResultsPageStepDefinitions.i_should_assert_first_five_results_with(SearchResultsPageStepDefinitions.java:29)\r\n\tat ✽.And I should assert first five results with \"270.00:339.00:539.00:7.9:5.29\"(Login.feature:11)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 1767706447,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 19,
  "name": ": Assert first five results",
  "description": "",
  "id": "login-amazon;:-assert-first-five-results",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 18,
      "name": "@sortLowToHighAndAssertFirstFiveResults"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "I am on the home page",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "I enter \"\u003ctext\u003e\" in the search bar",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "Click on Search",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I should be displayed with results",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "I sort the results Low to High",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I should assert first five prices with \"\u003cvalues\u003e\" after sorting",
  "keyword": "And "
});
formatter.examples({
  "line": 28,
  "name": "",
  "description": "",
  "id": "login-amazon;:-assert-first-five-results;",
  "rows": [
    {
      "cells": [
        "text",
        "values"
      ],
      "line": 30,
      "id": "login-amazon;:-assert-first-five-results;;1"
    },
    {
      "cells": [
        "Iphone",
        "61.99:69.99:79.00:79.99:89.99"
      ],
      "line": 31,
      "id": "login-amazon;:-assert-first-five-results;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2464342432,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": ": Assert first five results",
  "description": "",
  "id": "login-amazon;:-assert-first-five-results;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 18,
      "name": "@sortLowToHighAndAssertFirstFiveResults"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "I am on the home page",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "I enter \"Iphone\" in the search bar",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "Click on Search",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I should be displayed with results",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "I sort the results Low to High",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I should assert first five prices with \"61.99:69.99:79.00:79.99:89.99\" after sorting",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.match({
  "location": "HomePageStepDefinition.i_am_on_the_home_page()"
});
formatter.result({
  "duration": 3966521449,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Iphone",
      "offset": 9
    }
  ],
  "location": "SearchResultsPageStepDefinitions.i_enter_in_the_search_bar(String)"
});
formatter.result({
  "duration": 1485965334,
  "status": "passed"
});
formatter.match({
  "location": "SearchResultsPageStepDefinitions.click_on_Search()"
});
formatter.result({
  "duration": 2320713084,
  "status": "passed"
});
formatter.match({
  "location": "SearchResultsPageStepDefinitions.i_should_be_displayed_with_results()"
});
formatter.result({
  "duration": 160051456,
  "status": "passed"
});
formatter.match({
  "location": "SearchResultsPageStepDefinitions.i_sort_the_results_Low_to_High()"
});
formatter.result({
  "duration": 613094038,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "61.99:69.99:79.00:79.99:89.99",
      "offset": 40
    }
  ],
  "location": "SearchResultsPageStepDefinitions.i_should_assert_first_five_prices_with_after_sorting(String)"
});
formatter.result({
  "duration": 2084548954,
  "error_message": "junit.framework.AssertionFailedError: Assertion Failed for search result 1\r\n\tat junit.framework.Assert.fail(Assert.java:57)\r\n\tat junit.framework.Assert.assertTrue(Assert.java:22)\r\n\tat pageobjects.amazonSearchPage.assertFirstFiveResults(amazonSearchPage.java:80)\r\n\tat stepdefinitions.SearchResultsPageStepDefinitions.i_should_assert_first_five_prices_with_after_sorting(SearchResultsPageStepDefinitions.java:35)\r\n\tat ✽.And I should assert first five prices with \"61.99:69.99:79.00:79.99:89.99\" after sorting(Login.feature:26)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded1.png");
formatter.after({
  "duration": 1274598047,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 34,
  "name": "Add cheapest Item to the bag",
  "description": "",
  "id": "login-amazon;add-cheapest-item-to-the-bag",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 33,
      "name": "@addCheapestItemToBag"
    }
  ]
});
formatter.step({
  "line": 36,
  "name": "I am on the home page",
  "keyword": "Given "
});
formatter.step({
  "line": 37,
  "name": "I enter \"\u003ctext\u003e\" in the search bar",
  "keyword": "When "
});
formatter.step({
  "line": 38,
  "name": "Click on Search",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "I should be displayed with results",
  "keyword": "Then "
});
formatter.step({
  "line": 40,
  "name": "I add the cheapest item to the bag",
  "keyword": "When "
});
formatter.step({
  "line": 41,
  "name": "The item should be added to the bag",
  "keyword": "Then "
});
formatter.examples({
  "line": 43,
  "name": "",
  "description": "",
  "id": "login-amazon;add-cheapest-item-to-the-bag;",
  "rows": [
    {
      "cells": [
        "text"
      ],
      "line": 45,
      "id": "login-amazon;add-cheapest-item-to-the-bag;;1"
    },
    {
      "cells": [
        "Iphone"
      ],
      "line": 46,
      "id": "login-amazon;add-cheapest-item-to-the-bag;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 1949465006,
  "status": "passed"
});
formatter.scenario({
  "line": 46,
  "name": "Add cheapest Item to the bag",
  "description": "",
  "id": "login-amazon;add-cheapest-item-to-the-bag;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 33,
      "name": "@addCheapestItemToBag"
    }
  ]
});
formatter.step({
  "line": 36,
  "name": "I am on the home page",
  "keyword": "Given "
});
formatter.step({
  "line": 37,
  "name": "I enter \"Iphone\" in the search bar",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 38,
  "name": "Click on Search",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "I should be displayed with results",
  "keyword": "Then "
});
formatter.step({
  "line": 40,
  "name": "I add the cheapest item to the bag",
  "keyword": "When "
});
formatter.step({
  "line": 41,
  "name": "The item should be added to the bag",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageStepDefinition.i_am_on_the_home_page()"
});
formatter.result({
  "duration": 3109469265,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Iphone",
      "offset": 9
    }
  ],
  "location": "SearchResultsPageStepDefinitions.i_enter_in_the_search_bar(String)"
});
formatter.result({
  "duration": 1382335350,
  "status": "passed"
});
formatter.match({
  "location": "SearchResultsPageStepDefinitions.click_on_Search()"
});
formatter.result({
  "duration": 2208061569,
  "status": "passed"
});
formatter.match({
  "location": "SearchResultsPageStepDefinitions.i_should_be_displayed_with_results()"
});
formatter.result({
  "duration": 108284795,
  "status": "passed"
});
formatter.match({
  "location": "SearchResultsPageStepDefinitions.i_add_the_cheapest_item_to_the_bag()"
});
formatter.result({
  "duration": 6782036759,
  "status": "passed"
});
formatter.match({
  "location": "SearchResultsPageStepDefinitions.the_item_should_be_added_to_the_bag()"
});
formatter.result({
  "duration": 108393161,
  "status": "passed"
});
formatter.after({
  "duration": 1120487819,
  "status": "passed"
});
});