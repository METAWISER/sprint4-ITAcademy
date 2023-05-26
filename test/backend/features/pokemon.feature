Feature: pokemon
  recupera los datos de un pokemon
  */
  Scenario: pokemon id valid
    Given I send a GET request to pokeapi "/pokemon/23"
    Then I receive a 200 status code 
    And the response content should be like: 
    """
    {
      "name": "ekans",
      "height": 20,
      "weight": 69
    }
    """
  Scenario: pokemon id not valid
    Given I send a bad GET request to pokeapi "/pokemon/2000"
    Then the response status should throw 404
    And the response content should throw an error: 
    """
    {}
    """