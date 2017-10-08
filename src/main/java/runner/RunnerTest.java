package runner;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;


@RunWith(Cucumber.class)
@CucumberOptions(
		features = "src/test/java/features",
				plugin = { "pretty",
						"html:target/cucumber-report"},
		glue = "stepdefinitions",
		//tags = {"@assertFiveResults"},
		dryRun = false
                )

public class RunnerTest {

}
