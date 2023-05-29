Feature: pokemon
  recupera los datos de un pokemon
  */
  Scenario: pokemon id valid
    Given I send a GET request to "/pokemon/23"
    Then the response status should be 200 
    And the response content should be: 
    """
    {
      "name": "ekans",
      "height": 20,
      "weight": 69
    }
    """
  Scenario: pokemon id not valid
    Given I send a GET request to "/pokemon/2000"
    Then the response status should be 500
