package stepDefinitions1;

import org.junit.runner.RunWith;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;

@RunWith(Cucumber.class)

@CucumberOptions(
		
plugin = {"html:target/html-cucumber", "json:target/cucumber.json"},
		
		features = "src/test/java/features",
		tags = {"@Regression or @Sanity"},
		glue = {"stepDefinitions1"}
		
		
		)


public class testRunner1 {

}
