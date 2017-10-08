package stepdefinitions;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class SearchResultsPageStepDefinitions extends BaseStepDefinition {
	
	
	@When("^I enter \"([^\"]*)\" in the search bar$")
	public void i_enter_in_the_search_bar(String searchText) throws Throwable {
	   onSearchPage.enterSearchText(searchText);
	}

	@When("^Click on Search$")
	public void click_on_Search() throws Throwable {
		onSearchPage.clickSearchButton();
	    
	}

	@Then("^I should be displayed with results$")
	public void i_should_be_displayed_with_results() throws Throwable {
	  onSearchPage.resultsDisplayed();
	}

	@Then("^I should assert first five results with \"([^\"]*)\"$")
	public void i_should_assert_first_five_results_with(String price) throws Throwable {
		Thread.sleep(2000);
		onSearchPage.assertFirstFiveResults(price,"noSort");
	}
	
	@Then("^I should assert first five prices with \"([^\"]*)\" after sorting$")
	public void i_should_assert_first_five_prices_with_after_sorting(String price) throws Throwable {
		Thread.sleep(2000);
		onSearchPage.assertFirstFiveResults(price,"lowToHigh");
	}
	
	@Then("^I sort the results Low to High$")
	public void i_sort_the_results_Low_to_High() throws Throwable {
		onSearchPage.sortLowToHigh();
	}

	@When("^I add the cheapest item to the bag$")
	public void i_add_the_cheapest_item_to_the_bag() throws Throwable {
		onSearchPage.addLowestItemToBag();
	}

	@Then("^The item should be added to the bag$")
	public void the_item_should_be_added_to_the_bag() throws Throwable {
		Assert.assertTrue(onSearchPage.isItemAddedToBag());
	}
}
