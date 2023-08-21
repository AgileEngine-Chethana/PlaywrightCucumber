Feature: Enter details on Get in Touch page

  @Regression
  Scenario: Enter details on Get in Touch pageß
    Given Open the AE home page "AgileEngine | Home"
    When Click on Get in Touch link
    Then Enter details on Send Message page

    Examples: 
      | searchPageTitle | searchtext   | link                     | resultpagetitle |
      | Google          | Agile Engine | https://agileengine.com/ |                 |
