# Assignment
ToBuild

1)Open Command line

2)Navigate to the pom.xml path of the project

3)Enter "mvn clean"

4)Enter "mvn install"

Running the tests
1)Open the project in any IDE and navigate to the path src\main\java\runner

2)Right click the file RunnerTest.java and select Run as junit test

Reporting

1)Navigate to the path target\cucumber-report

2)Right click the file index.html and open in any browser

FeatureFilesPath

src\test\java\features

If any build failures run the following from terminal or command prompt

Remove all your failed downloads:

For Mac:

find ~/.m2  -name "*.lastUpdated" -exec grep -q "Could not transfer" {} \; -print -exec rm {} \;

For Windows: 

cd %userprofile%\.m2\repository
for /r %i in (*.lastUpdated) do del %i
Then rightclick on your project in eclipse and choose Maven->"Update Project ...", make sure "Update Dependencies" is checked in the resulting dialog and click OK.
