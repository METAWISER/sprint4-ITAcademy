Feature: user 
  recupera el nombre, edad y url del usuario
  */
  Scenario: user
    Given I send a GET request to "/user"
    Then the response status should be 200
    And the response content should be: 
    """
    {
      "name": "Carlos",
      "age": 32,
      "fullUrl": "http://127.0.0.1:8000/user"
    }
    """

