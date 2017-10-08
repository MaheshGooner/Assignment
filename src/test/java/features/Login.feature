Feature: Login Amazon 


	@assertFiveResults 
	Scenario Outline: : Assert first five results 

		Given I am on the home page 
		When  I enter "<text>" in the search bar 
		And   Click on Search 
		Then  I should be displayed with results 
		And   I should assert first five results with "<values>" 
	
		Examples: 
	
				|text  |values                        |
				|Iphone|270.00:339.00:539.00:7.9:5.29 |
		
		@sortLowToHighAndAssertFirstFiveResults 
		Scenario Outline: : Assert first five results 
		
			Given I am on the home page 
			When  I enter "<text>" in the search bar 
			And   Click on Search 
			Then  I should be displayed with results
			And   I sort the results Low to High
			And   I should assert first five prices with "<values>" after sorting
			
			Examples: 
			
				|text  |values                        |
				|Iphone|61.99:69.99:79.00:79.99:89.99 |
				
		@addCheapestItemToBag 
		Scenario Outline: Add cheapest Item to the bag 

			Given I am on the home page 
			When  I enter "<text>" in the search bar 
			And   Click on Search 
			Then  I should be displayed with results 
			When  I add the cheapest item to the bag
			Then  The item should be added to the bag
			
			Examples: 
			
				|text  |
				|Iphone|