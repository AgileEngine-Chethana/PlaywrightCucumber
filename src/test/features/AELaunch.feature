Feature: Launch AE Official Website

  @Regression
  Scenario Outline: Navigate AE official Web page
    Given Open the Google home page
    Then Validate the title "<searchPageTitle>" of the Google search page
    When Enter the Search text "<searchtext>" in the search text box and Validate the search text
    Then Validate the Search result displayed
    When Search for AE Link "<link>" and Click on it
    Then Validate the title of the AE official web page "AgileEngine | Home"

    Examples: 
      | searchPageTitle | searchtext   | link                     | resultpagetitle |
      | Google          | Agile Engine | https://agileengine.com/ |                 |
