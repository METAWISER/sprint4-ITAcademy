Feature: Test the time endpoint
  send a POST request to "/time" 
  */
  Scenario: Sending a json with the user's name
    Given the auth credentials are "user" and "1234"
    When I send a POST request to "/time" with the following body:
      """
      {
        "username": "Carlos"
      }
      """
    Then the response status should be 200
    And the response should have a field "currentTime"
    And the response header "content-type" should be "application/json; charset=utf-8"